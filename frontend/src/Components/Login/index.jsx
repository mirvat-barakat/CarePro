import React from 'react';
import "./styles.css";
import { Link } from 'react-router-dom';

const LoginBlock = () => {

  return (
    <div className="login-block">
      <h2>LOGIN</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <p>Don't Have an Account? <Link to="">Sign Up Here</Link></p>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginBlock;