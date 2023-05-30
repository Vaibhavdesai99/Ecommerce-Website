import { useState, useRef } from "react";
import classes from "./AuthForm.module.css";
import { useNavigate } from "react-router-dom";
import AuthContext from "../Store/AuthContext";
import { useContext } from "react";

const AuthForm = () => {
  const authCtx = useContext(AuthContext);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  // Form submit Handler  : =
  const submitHandler = async (e) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);

    try {
      // If user ALREADY HAVE ACCOUNT THEN LOG-IN .

      if (isLogin) {
        const response = await fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDj7gWjQQKUk0lv_P4S7T4pOMTt7jEh37M",
          {
            method: "POST",
            body: JSON.stringify({
              email: enteredEmail,
              password: enteredPassword,
              returnSecureToken: true,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.ok) {
          // Sign-in successful
          alert("Login Successfully");
          const data = await response.json();
          console.log(data.email);
          localStorage.setItem("email", data.email);
          // whenever the POST req is succ means user login then , redirect him to store page .
          navigate("/Store");
          const idToken = data.idToken;
          authCtx.login(idToken);
        } else {
          const errorData = await response.json();
          let errorMessage = "Authentication Failed";
          console.log(errorData);
          alert("Login failed: " + errorMessage);
        }
      } else {
        // If user DONT HAVE ACCOUNT THEN SIGN -UP .

        const response = await fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDj7gWjQQKUk0lv_P4S7T4pOMTt7jEh37M",
          {
            method: "POST",
            body: JSON.stringify({
              email: enteredEmail,
              password: enteredPassword,
              returnSecureToken: true,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          // Handle successful sign-up
          const data = await response.json();
          console.log(data);
          alert("Account Created Successfully.");
        } else {
          // Sign-up failed
          const errorData = await response.json();
          let errorMessage = "Authentication Failed";

          // To show full error if there is error ...
          if (errorData && errorData.error && errorData.error.message) {
            errorMessage = errorData.error.message;
          }
          alert(errorMessage);
        }
      }
    } catch (error) {
      // Catch and handle any errors
      console.log(error);
      alert(error.message);
    }

    setIsLoading(false);
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button>{isLogin ? "Login" : "Create Account"}</button>
          )}
          {isLoading && <p>Sending request...</p>}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};
export default AuthForm;
