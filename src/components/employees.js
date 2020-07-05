import React, { useContext } from "react";
import GlobalContext from "./context/GlobalState";
import User from "./input";

const Employees = () => {
  const { users, sort } = useContext(GlobalContext);


  return (
    <div className="container">
      <User />
      {users.map((item) => {
        return (
          <div>
            <div style={styleEmployee}>
              <table className="table table-hover table-sm">
                <thead>
                  <tr className="table-dark">
                    <th scope="col">Image</th>
                    <th onClick={()=> sort("first")} scope="col">First</th>
                    <th onClick={()=> sort("last")} scope="col">Last</th>
                    <th onClick={()=> sort("location")}scope="col">Location</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="table-light">
                    <td>
                      <img src={item.picture.medium} />
                    </td>
                    <td>{item.name.first}</td>
                    <td>{item.name.last}</td>
                    <td>{item.location.state}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const styleEmployee = {
  marginTop: "20px",
};

export default Employees;
