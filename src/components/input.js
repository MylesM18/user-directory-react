import React, { useState, useContext } from "react";
import GlobalContext from "./context/GlobalState"

function User() {
  const [employee, setEmployee] = useState("");
  const [category, setCategory] = useState("");
  const {filter} = useContext(GlobalContext)

  return (
    <>
      <div className="container" style={styleInput}>
        <input
          type="text"
          onChange={(e) => filter(e.target.value.toLowerCase(), "name")}
          className="form-control"
          placeholder="Employee Name"
        />
        <br />
        <input
          type="text"
          onChange={(e) => filter(e.target.value.toLowerCase())}
          className="form-control"
          placeholder="Location"
        />
      </div>
    </>
  );
}

const styleInput = {
  marginTop: "10px",
};

export default User;
