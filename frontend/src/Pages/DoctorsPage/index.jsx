import React, { useState, useEffect } from "react";
import "./styles.css";
import axios from 'axios';

const DoctorsPage = () => {

    const [patients, setPatients] = useState([]);
    const token = localStorage.getItem("token");
    console.log(token);

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
                setPatients(response.data);
                console.log(response.data);
            })
            .catch(function (error) {
              return error.response;
            });
      },[]);
  

  return (
    <>
    <div className="body">
    <div className="title1">
      <h1>Patients</h1>
    </div>
      <div className="users-table">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
          {patients.map(patient => (
              <tr key={patient.id}>
                  <td>{patient.id}</td>
                  <td>{patient.name}</td>
                  <td>{patient.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </>
    
  );
};

export default DoctorsPage;