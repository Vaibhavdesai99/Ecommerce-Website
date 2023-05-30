import React, { useState } from "react";
import "./ContactUs.css";
const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    setError(null);
    try {
      e.preventDefault();
      const UserDetails = {
        name: name,
        email: email,
        phone: phone,
      };
      // In end of the URL always we have to insert route / node and .json also.
      const response = await fetch(
        "https://ecommerce-login-details-default-rtdb.firebaseio.com/userDetails.json",
        {
          method: "POST",
          //Before sending to database we need to stringify the object .
          body: JSON.stringify(UserDetails),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Error Handling:
      if (!response.ok) {
        throw new Error("Something Went Wrong....");
      }
      //response get parse here:
      const data = await response.json();
      alert("Response send successfully.");
      console.log(data);
    } catch (error) {
      setError(error.message);
    }

    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Contact Us</h1>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="phone">Phone Number:</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <button type="submit">Submit</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default ContactUs;
