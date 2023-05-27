import React from 'react';
import "./styles.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';

const LoginBlock = ({ onSubmit }) => {

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
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <p>Don't Have an Account? <Link to="">Sign Up Here</Link></p>
      </form>
      <button type="submit">Login</button>
    </div>
  );
};

export default LoginBlock;