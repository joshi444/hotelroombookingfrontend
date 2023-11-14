import React, { Fragment, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [errors, setErrors] = useState({});
  const Navigate = useNavigate();

  const handleNameChange = (value) => {
    setName(value);
  };

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handlecontactChange = (value) => {
    setContactNo(parseInt(value));
  };

  const handleSave = () => {
    // Validate the form before submitting
    const validationErrors = {};

    if (!name) {
      validationErrors.name = "Please enter your name.";
    }

    if (!email) {
      validationErrors.email = "Please enter your email address.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Please enter a valid email address.";
    }

    if (!password) {
      validationErrors.password = "Please enter a password.";
    }

    if (!contactNo) {
      validationErrors.contactNo = "Please enter your phone number.";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const data = {
      UserName: name,
      Email: email,
      Password: password,
      ContactNo: contactNo,
    };

    axios
      .post("https://localhost:44397/api/User", data)
      .then((result) => {
       // alert("Registration Successful");
        message.success("Registration Successful")
        Navigate("/login", { replace: false });
      })
      .catch((error) => {
        message.error(error);
      });
  };

  return (
    <>
      <div className="imag">
        <div class="Container mt-10 ml-4 " align="center">
          <div class="row mx-auto center mt-10">
            <div class="mx-auto col-md-10 mt-4 pt-10">
              <div class="card mb-10 p-10  shadow rounded">
                <div class="card-body mt-10">
                  <div class="row mb-3 ml-5">
                    <h3 class="text-success text-center border-bottom border-success p-3 ml-10">
                      Registration
                    </h3>
                  </div>

                  <div className="mb-3 mt-2 ">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      name="UserName"
                      className={`form-control ${
                        errors.name ? "is-invalid" : ""
                      }`}
                      id="UserName"
                      placeholder="Enter the Name"
                      onChange={(e) => handleNameChange(e.target.value)}
                      required
                    />
                    {errors.name && (
                      <div className="invalid-feedback">{errors.name}</div>
                    )}
                  </div>

                  <label className="form-label">Email</label>
                  <input
                    type="text"
                    name="Email"
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    id="Email"
                    placeholder="Enter the Email"
                    onChange={(e) => handleEmailChange(e.target.value)}
                    required
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}

                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    name="Password"
                    className={`form-control ${
                      errors.password ? "is-invalid" : ""
                    }`}
                    id="Password"
                    placeholder="Enter the Password"
                    onChange={(e) => handlePasswordChange(e.target.value)}
                    required
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}

                  <label className="form-label">Phone</label>
                  <input
                    type="number"
                    name="ContactNo"
                    className={`form-control ${
                      errors.contactNo ? "is-invalid" : ""
                    }`}
                    id="ContactNo"
                    placeholder="Enter the phone number"
                    onChange={(e) => handlecontactChange(e.target.value)}
                    required
                  />
                  {errors.contactNo && (
                    <div className="invalid-feedback">{errors.contactNo}</div>
                  )}

                  <button className="btn btn-primary mt-4" onClick={handleSave}>
                    Register
                  </button>
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
    </>
  );
}

export default Register;
