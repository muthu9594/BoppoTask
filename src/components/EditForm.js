import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const FormDetails = {
  firstname: "",
  lastname: "",
  age: "",
  email: "",
  phoneNumber: "",
  password: "",
};
const EditForm = ({ userData, setToggle, toggle }) => {
  const { id } = useParams();
  // const [userData, setUserData] = useState(FormDetails);
  const [data, setData] = useState([]);

  const [details, setDetails] = useState(FormDetails);
  const [validation, setValidation] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setDetails({ ...details, ...userData });
    console.log(details);
  }, [userData]);

  const onValueChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  console.log(details);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleSubmit = (e) => {
    setToggle(true);
    try {
      axios.post("http://65.0.93.119:4000/update", details);
      console.log("Edited successfully");

      console.log(toggle);
      navigate("/");
    } catch (error) {
      console.log("Error while adding user", error);
    }
  };
  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container">
            <div className="card" style={{ textAlign: "left" }}>
              <div className="card-title">
                <h2>Edit User</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>FirstName</label>
                      <input
                        required
                        onChange={onValueChange}
                        onMouseDown={(e) => setValidation(true)}
                        name="firstname"
                        className="form-control"
                        value={details.firstname}
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
                        value={details.lastname}
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
                        value={details.age}
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
                        value={details.email}
                        disabled
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
                        value={details.phoneNumber}
                        onChange={(e) => onValueChange(e)}
                        required
                        name="phoneNumber"
                        className="form-control"
                      ></input>
                      {details.phoneNumber.length === 0 && validation && (
                        <span className="text-danger">
                          Enter the phoneNumber
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Password</label>
                      <input
                        value={details.password}
                        onChange={(e) => onValueChange(e)}
                        name="password"
                        required
                        className="form-control"
                      ></input>
                      {details.password.length === 0 && validation && (
                        <span className="text-danger">Enter the Password</span>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <button
                        className="btn btn-success"
                        onClick={handleSubmit}
                        type="submit"
                      >
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
    </div>
  );
};

export default EditForm;
