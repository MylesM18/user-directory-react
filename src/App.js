import React, { useState, useEffect } from "react";
import Header from "./components/header";
import Employees from "./components/employees";
import GlobalContext from "./components/context/GlobalState";
import API from "./utils/API";
import User from "./"

import "./App.css";

function App() {
  const [apiResponse, setApiResponse] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState({users:[]})
  const [order, setOrder] = useState(1);
  useEffect(() => {
    API.getEmployees().then((response) => {
      setApiResponse(response.data.results);
      setFilteredUsers({users:response.data.results});
    });
    console.log(apiResponse);
  }, []);

  const filter = (val,category) => {
    let filtered;
    if(category === "name"){
      filtered = apiResponse.filter(a=> a.name.first.toLowerCase().includes(val)|| a.name.last.toLowerCase().includes(val));
    }else{
      filtered = apiResponse.filter(a=> a.location.state.toLowerCase().includes(val))
    }
    setFilteredUsers({users:filtered});
  }

  const handleSort = name => {
    let sorted;
    if(name === "location"){
      sorted = filteredUsers.users.sort((a,b)=> a.location.state>b.location.state? 1*order : a.location.state<b.location.state ? -1*order : 0)
    }else{
      sorted = filteredUsers.users.sort((a,b)=> a.name[name]>b.name[name]? 1*order : a.name[name]<b.name[name] ? -1*order : 0)
    }
    setFilteredUsers({users:sorted});
    setOrder(-order)
  }
  
  return (
    <GlobalContext.Provider value={{ users: filteredUsers.users, filter:filter, sort: handleSort }}>
      <Header />
      <Employees />
    </GlobalContext.Provider>
  );
}

export default App;
