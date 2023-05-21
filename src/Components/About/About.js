import React from "react";
import Summary from "../Summary/Summary";
import BrowserImage from "../../Components/Images/browser-773215_1920.png";

const About = () => {
  return (
    <div>
      <Summary />
      <h1
        style={{
          width: "70%",
          marginLeft: "35rem",
          marginTop: "1rem",
          fontFamily: "Metal Mania",
          fontSize: "30px",
          padding: "20px",
        }}
      >
        ABOUT
      </h1>
      <p style={{ width: "70%", margin: "0 auto", marginTop: "3rem" }}>
        <img
          src={BrowserImage}
          alt="imagesofBrowser"
          style={{
            width: "250px",
            height: "250px",
            float: "left",
            marginRight: "1rem",
          }}
        />
        React Router is a standard library for routing in React. It enables the
        navigation among views of various components in a React Application,
        allows changing the browser URL, and keeps the UI in sync with the URL.
        Let us create a simple application to React to understand how the React
        Router works. The application will contain three components: home
        component, about a component, and contact component. We will use React
        Router to navigate between these components. After installing
        react-router-dom, add its components to your React application. Adding
        React Router Components: The main Components of React Router are:
        BrowserRouter: BrowserRouter is a router implementation that uses the
        HTML5 history API(pushState, replaceState and the popstate event) to
        keep your UI in sync with the URL. It is the parent component that is
        used to store all of the other components. Routes: It’s a new component
        introduced in the v6 and an upgrade of the component. The main
        advantages of Routes over Switch are: Relative s and s Routes are chosen
        based on the best match instead of being traversed in order. Route:
        Route is the conditionally shown component that renders some UI when its
        path matches the current URL. Link: Link component is used to create
        links to different routes and implement navigation around the
        application. It works like HTML anchor tag.
      </p>
    </div>
  );
};

export default About;
