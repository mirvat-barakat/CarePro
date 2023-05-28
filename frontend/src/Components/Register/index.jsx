import React, { useState } from 'react';
import "./styles.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterBlock = ({ onSubmit }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
      };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };

      const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
      };

    const handleRegister = async() => {

        const data = JSON.stringify({
            "name": name,
            "email": email,
            "password": password
           });

        const config = {
          method: "GET",
          data:data,
          url: 'http://localhost:3000/auth/login',
          headers: {
            'content-type': 'application/json',
            'Accept': 'application/json',
          },
        };
        try {
          const res = await axios(config);
          alert("axios");
          if (res.data.status == "success" && res.data.user.role == "patient") {
            alert("success");
          }
        } catch (error) {
          return error.response;
        }
    
      }

    const handleIconClick = () => {
        onSubmit();
      };

    return (
        <div className="register-block">
            <FontAwesomeIcon icon={faTimes} className="faicon1" onClick={handleIconClick} />
            <h2>REGISTER</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" value={name}  onChange={handleNameChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email" >Email:</label>
                    <input type="email" id="email" name="email" value={email}  onChange={handleEmailChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} required />
                </div>
                <p>Already Have an Account? <Link to="/login">Log In Here</Link></p>
            </form>
            <button type="submit" onClick={handleRegister}>Register</button>
        </div>
    );
};

export default RegisterBlock;