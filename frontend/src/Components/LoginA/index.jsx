import React , {useState} from 'react';
import "./styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const LoginABlock = ({ onSubmit }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

   const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  const handleLogin = async() => {
    const data = JSON.stringify({
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
      if (res.data.status == "success" && res.data.user.role == "doctor") {
        alert("success");
         localStorage.setItem("token", res.data.token);
         navigate("/doctors");

      }
    } catch (error) {
      return error.response;
    }

  }

  const handleIconClick = () => {
    onSubmit();
  };

  return (
    <div className="login-block">
      <FontAwesomeIcon icon={faTimes} className="faicon1" onClick={handleIconClick} />
      <h2>LOGIN</h2>
      <form >
        <div className="form-group">
          <label htmlFor="email" >Email:</label>
          <input type="email" id="email" name="email" value={email}  onChange={handleEmailChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange}/>
        </div>
      </form>
      <button type="submit" onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginABlock;