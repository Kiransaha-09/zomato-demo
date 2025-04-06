import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { API_ROUTES } from "../../constants/apiRoutes.constants";

export default function Home() {
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setshowPassword] = useState(false);
  const handleShowPassword = () => {
    setshowPassword(!showPassword);
  };
  const handleFormValidation = () => {
    const formErrors = {
      email: "",
      password: "",
    };
    if (values.email === "") {
      formErrors.email = "Email is Required";
    }
    if (values.password === "") {
      formErrors.password = "Password is Required";
    }
    setErrors(formErrors);
    return formErrors.email && formErrors.password;
  };

  const navigate = useNavigate();
  const handleGoToCart = () => {
    if (values.email !== "" && values.password !== "") {
      navigate(API_ROUTES.PRODUCTS);
    }
    if (!handleFormValidation()) {
      return;
    }
  };
  const handleChange = (e) => {
    const updatingState = {
      ...values,
      [e.target.name]: e.target.value,
    };
    setValues(updatingState);
    if (updatingState.email !== "") errors.email = "";
    if (updatingState.password !== "") errors.password = "";
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
            value={values.email}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <span>{errors.email}</span>
        </div>
        <div className="inputfield">
          <input
            type={!showPassword ? "password" : "text"}
            id="password"
            name="password"
            placeholder="Provide Password"
            value={values.password}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <button
            onClick={() => {
              handleShowPassword();
            }}
            disabled={values.password.length === 0}
          >
            {showPassword ? "Hide" : "Show"}
          </button>

          <span>{errors.password}</span>
        </div>
        <div className="handlelogin">
          <button onClick={handleGoToCart}>Log-in</button>
        </div>
      </div>
    </>
  );
}
