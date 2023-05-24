import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Table from "./components/Table";
import Forms from "./components/Forms";
import EditForm from "./components/EditForm";
import { useState } from "react";

function App() {
  const [data, setEditData] = useState([]);
  const [toggle, setToggle] = useState(false);

  console.log(toggle);

  const getEditData = (data) => {
    setEditData(data);
    console.log(data);
  };
  return (
    <div className="App">
      <h1>TASK</h1>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Table getEditData={getEditData} toggle={toggle} />}
          />
          <Route path="/form" element={<Forms />} />
          <Route
            path="/editForm/:id"
            element={
              <EditForm userData={data} toggle={toggle} setToggle={setToggle} />
            }
          />
        </Routes>
      </BrowserRouter>
      ;
    </div>
  );
}

export default App;
