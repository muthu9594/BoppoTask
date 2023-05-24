import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Table = ({ getEditData, toggle }) => {
  const [remove, setremove] = useState(false);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    const data = await axios.get("http://65.0.93.119:4000/fetchusers");
    console.log(data.data.data);
    setData(data.data.data);
  };

  useEffect(() => {
    fetchData();

    const fetchTimeout = setTimeout(fetchData, 100);

    return () => {
      clearTimeout(fetchTimeout);
    };
  }, []);

  const editUser = (id) => {
    navigate("/editForm/" + id);
  };

  const removeUser = (email) => {
    console.log(email);
    if (window.confirm("Do you want to remove?")) {
      try {
        axios.post("http://65.0.93.119:4000/remove", { email: email });
        setremove(!remove);
        console.log("removed successfully");
      } catch (error) {
        console.log("Error while adding user", error);
      }
    }
  };

  console.log(remove);

  useEffect(() => {
    if (remove) window.location.reload();
  }, [remove]);

  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>User Details</h2>
        </div>
        <div className="card-body">
          <div className="divbtn">
            <Link to={"/form"} className="btn btn-success">
              Add New (+)
            </Link>
          </div>

          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>FirstName</td>
                <td>LastName</td>
                <td>Age</td>
                <td>PhoneNo</td>
                <td>Email</td>
                <td>Actions</td>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((d) => (
                  <tr key={d._id}>
                    <td>{d.firstname}</td>
                    <td>{d.lastname}</td>
                    <td>{d.age}</td>
                    <td>{d.phoneNumber}</td>
                    <td>{d.email}</td>
                    <td>
                      <span
                        onClick={() => {
                          editUser(d);
                          getEditData(d);
                        }}
                        className="btn btn-success"
                      >
                        Edit
                      </span>
                      <span
                        onClick={() => {
                          removeUser(d.email);
                        }}
                        className="btn btn-danger"
                      >
                        Remove
                      </span>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
