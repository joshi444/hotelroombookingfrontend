import React, { Fragment, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {NavLink} from "react-router-dom";
import "./Login.css";
import { message } from "antd";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const auth = localStorage.getItem("user");
  const Navigate = useNavigate();

  const handleEmailChange = (value) => {
    setEmail(value);
    // Clear any previous email validation errors
    setErrors((prevErrors) => ({
      ...prevErrors,
      email: null,
    }));
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
    // Clear any previous password validation errors
    setErrors((prevErrors) => ({
      ...prevErrors,
      password: null,
    }));
  };

  const mainpage = () => {
    Navigate("/mainpage", { replace: false });
  };

  const openAdmin = () => {
    Navigate("/admin", { replace: false });
  };

  const handleLogin = async (email, password) => {
    // Validate the email and password fields
    const validationErrors = {};

    if (!email) {
      validationErrors.email = "Please enter an email.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Please enter a valid email address.";
    }

    if (!password) {
      validationErrors.password = "Please enter a password.";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
try{
    let result = await fetch(`https://localhost:44397/api/User/${email},${password}`);
    result = await result.json();
    console.warn(result);
    localStorage.setItem("user", JSON.stringify(result));

    if (result.errorMessage) {
      alert(result.errorMessage);
      alert("Enter correct password/email");
      return;
    }

    if (email === "admin@gmail.com" && password === "Admin@123") {
      message.success("login successfully");
      openAdmin();
    } else {
      message.success("login successfully");
      mainpage();
    }
  }
  catch(error){
    message.error("email/password wrong");
  };
}



  return (
    <div className="imag">
      <div className="Container mt-5 ml-5 mb-4"align="center">
        <div className="row mx-auto mt-5">
          <div className="mx-auto col-md-6 mt-5 pt-4">
            <div className="card mb-5 p-2 shadow rounded">
              <div className="card-body mt-1">
                <div className="row mb-3 ml-3 text-center">
                  <h3 className="text-success text-center border-bottom border-success p-3 ml-5">
                    LOGIN 
                  </h3>

                  <div className={`form-outline mb-10 ${errors.email ? "has-danger" : ""}`}>
                    <label className="form-label">Email address</label>
                    <input
                      type="text"
                      placeholder="Enter the Email"
                      className={`form-control ${errors.email ? "is-invalid" : ""}`}
                      onChange={(e) => handleEmailChange(e.target.value)}
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                  </div>

                  <div className={`form-outline mb-5 ${errors.password ? "has-danger" : ""}`}>
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className={`form-control ${errors.password ? "is-invalid" : ""}`}
                      placeholder="Enter the Password"
                      onChange={(e) => handlePasswordChange(e.target.value)}
                    />
                    {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                  </div>
                 <div className="custom-margin"> 
                  <div className="mb-10"> {/* Add margin-bottom class to create spacing */}
                <button className="btn btn-primary" onClick={() => handleLogin(email, password)}>
                  LOGIN
                </button>
              </div>
              </div>
              <div className="custom-margin"> 
              <div className="mb-1 mt-5 text-success ml-0">
              {/* <h6>
          New user?<NavLink to="/register">Register</NavLink>
  </h6>*/}</div> 
  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
      <footer className="foot">
          <p>&copy; 2023 BookMyRoom.com</p>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </footer>
        </div>
    </div>
  );
}
