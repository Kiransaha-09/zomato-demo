import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const navigate = useNavigate();
  const handleGoToCart = () => {
    if (emailValue === "") {
      setEmailError("Email is Required");
    }
    if (passwordValue === "") {
      setPasswordError("Password is Required");
    }
    console.log(emailError, passwordError);
    if (emailValue !== "" && passwordValue !== "") {
      navigate("/cards");
    }
  };
  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
    setEmailError("");
  };
  const handlePasswordChange = (e) => {
    setPasswordValue(e.target.value);
    setPasswordError("");
  };
  return (
    <>
      <div className="homescreen">
        <h1>Log in</h1>
      </div>
      <div className="homecontainer">
        <div className="inputfield">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Your Email"
            value={emailValue}
            onChange={(e) => {
              handleEmailChange(e);
            }}
          />
          <span>{emailError}</span>
        </div>
        <div className="inputfield">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Provide Password"
            value={passwordValue}
            onChange={(e) => {
              handlePasswordChange(e);
            }}
          />
          <span>{passwordError}</span>
        </div>
        <div className="handlelogin">
          <button onClick={handleGoToCart}>Log-in</button>
        </div>
      </div>
    </>
  );
}
