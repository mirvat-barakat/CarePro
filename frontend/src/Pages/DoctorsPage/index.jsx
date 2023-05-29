import React, { useState, useEffect } from "react";
import "./styles.css";
import axios from 'axios';

const DoctorsPage = () => {

  const [users, setUsers] = useState([]);
    const token = localStorage.getItem("token");

    const getUsers = {
        method: 'GET',
        url: 'http://localhost:3000/doctor/getPatients',
        headers: {
          'content-type': 'application/json',
          'Accept' : 'application/json',
          'Authorization': 'bearer ' + token
        },
      };
  
      useEffect(() => {
        axios.request(getUsers)
            .then(response => {
                setUsers(response.data.users);
            })
            .catch(function (error) {
            alert("error");
            });
      },[]);
  

  return (
    <div>
    </div>
    
  );
};

export default DoctorsPage;