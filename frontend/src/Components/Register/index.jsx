import React, { useState } from 'react';
import "./styles.css";
import { useNavigate } from "react-router-dom";

const RegisterBlock = () => {

    return (
        <div className="register-block">
            <h2>REGISTER</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterBlock;