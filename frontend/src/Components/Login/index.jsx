import React , {useState} from 'react';
import "./styles.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const LoginBlock = ({ onSubmit }) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showRegistration, setShowRegistration] = useState(false);
  const navigate = useNavigate();

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

  const handleSubmit = () => {
    if (showRegistration) {
      handleRegister();
    } else {
      handleLogin();
    }
  };

  const handleLogin = async() => {

    const data = JSON.stringify({
      "email": email,
      "password": password
     });
    const config = {
      method: "POST",
      data:data,
      url: 'http://localhost:3000/auth/login',
      headers: {
        'content-Type': 'application/json',
        Accept: 'application/json',
      },
    };
    console.log(data);
    try {
      const res = await axios(config);
      if (res.data.status == "success") {
         localStorage.setItem("token", res.data.token);
         localStorage.setItem("user_id", res.data.user._id);
         navigate("/patients")

      }
    } catch (error) {
      console.error(error);
    }
  }

  const handleRegister = async() => {
    const data = JSON.stringify({
        "name": name,
        "email": email,
        "password": password
       });

    const config = {
      method: "Post",
      data:data,
      url: 'http://localhost:3000/auth/register',
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json',
      },
    };
    try {
      const res = await axios(config);
      if (res.data.status == "success" && res.data.user.role == "patient") {
        setShowRegistration(false);
        console.log("success");
        navigate("/patients");
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
            <input type="name" id="registration-name" name="registration-name" value={name} onChange={handleNameChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="registration-email">Email:</label>
            <input type="email" id="registration-email" name="registration-email" value={email}  onChange={handleEmailChange} />
          </div>
          <div className="form-group">
            <label htmlFor="registration-password">Password:</label>
            <input type="password" id="registration-password" name="registration-password" value={password} onChange={handlePasswordChange}/>
          </div>
          <p className='link'>Already have an account? <Link to="" onClick={handleBackToLoginClick}>Back to Login</Link></p>
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
        <p className='link'>Don't Have an Account? <Link to="" onClick={handleSignUpClick}>Sign Up Here</Link></p>
      </form>
      )}
      <button type="submit" onClick={handleSubmit}>{showRegistration ? 'Register' : 'Login'}</button>
    </div>
  );
};

export default LoginBlock;