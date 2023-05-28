import React , {useState} from 'react';
import "./styles.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const LoginBlock = ({ onSubmit }) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showRegistration, setShowRegistration] = useState(false);

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
      if (res.data.status == "success") {
        alert("success");
         localStorage.setItem("token", res.data.token);

      }
    } catch (error) {
      return error.response;
    }

  }

  const handleIconClick = () => {
    onSubmit();
  };

  const handleSignUpClick = () => {
    setShowRegistration(true); 
  };

  const handleBackToLoginClick = () => {
    setShowRegistration(false);
  };

  return (
    <div className="login-block">
      <FontAwesomeIcon icon={faTimes} className="faicon1" onClick={handleIconClick} />
      <h2>{showRegistration ? 'REGISTER' : 'LOGIN'}</h2>
      {showRegistration ? (
        <form>
          <div className="form-group">
            <label htmlFor="registration-name">Name:</label>
            <input type="name" id="registration-name" name="registration-name" />
          </div>
          <div className="form-group">
            <label htmlFor="registration-email">Email:</label>
            <input type="email" id="registration-email" name="registration-email" />
          </div>
          <div className="form-group">
            <label htmlFor="registration-password">Password:</label>
            <input type="password" id="registration-password" name="registration-password" />
          </div>
          <p>Already have an account? <Link to="" onClick={handleBackToLoginClick}>Back to Login</Link></p>
        </form>
      ) : (
      <form >
        <div className="form-group">
          <label htmlFor="email" >Email:</label>
          <input type="email" id="email" name="email" value={email}  onChange={handleEmailChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange}/>
        </div>
        <p>Don't Have an Account? <Link to="" onClick={handleSignUpClick}>Sign Up Here</Link></p>
      </form>
      )}
      <button type="submit" onClick={handleLogin}>{showRegistration ? 'Register' : 'Login'}</button>
    </div>
  );
};

export default LoginBlock;