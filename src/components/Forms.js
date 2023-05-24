import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const FormDetails = {
  firstname: "",
  lastname: "",
  age: "",
  email: "",
  phoneNumber: "",
  password: "",
};

const Forms = () => {
  const [details, setDetails] = useState(FormDetails);
  const [validation, setValidation] = useState(false);
  const navigate = useNavigate();
  const onValueChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(details);
    try {
      axios.post("http://65.0.93.119:4000/adduser", details);
      console.log("saved successfully");
      navigate("/");
    } catch (error) {
      console.log("Error while adding user", error);
    }
  };
  return (
    <div className="row">
      <div className="offset-lg-3 col-lg-6">
        <form className="container" onSubmit={handleSubmit}>
          <div className="card" style={{ textAlign: "left" }}>
            <div className="card-title">
              <h2>Create User</h2>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>FirstName</label>
                    <input
                      required
                      onChange={(e) => onValueChange(e)}
                      onMouseDown={(e) => setValidation(true)}
                      name="firstname"
                      className="form-control"
                    ></input>
                    {details.firstname.length === 0 && validation && (
                      <span className="text-danger">Enter the FirstName</span>
                    )}
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>LastName</label>
                    <input
                      onChange={(e) => onValueChange(e)}
                      required
                      name="lastname"
                      className="form-control"
                    ></input>
                    {details.lastname.length === 0 && validation && (
                      <span className="text-danger">Enter the LastName</span>
                    )}
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Age</label>
                    <input
                      onChange={(e) => onValueChange(e)}
                      required
                      name="age"
                      className="form-control"
                    ></input>
                    {details.age.length === 0 && validation && (
                      <span className="text-danger">Enter the Age</span>
                    )}
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      onChange={(e) => onValueChange(e)}
                      required
                      name="email"
                      className="form-control"
                    ></input>
                    {details.email.length === 0 && validation && (
                      <span className="text-danger">Enter the Email</span>
                    )}
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>phoneNumber</label>
                    <input
                      onChange={(e) => onValueChange(e)}
                      required
                      name="phoneNumber"
                      className="form-control"
                    ></input>
                    {details.phoneNumber.length === 0 && validation && (
                      <span className="text-danger">Enter the phoneNumber</span>
                    )}
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      onChange={(e) => onValueChange(e)}
                      name="password"
                      required
                      className="form-control"
                    ></input>
                    {details.password.length === 0 && validation && (
                      <span className="text-danger">Enter the PAssword</span>
                    )}
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <button className="btn btn-success" type="submit">
                      Save
                    </button>
                    <Link className="btn btn-danger">Back</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Forms;
