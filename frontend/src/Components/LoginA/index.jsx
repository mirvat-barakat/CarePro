import React , {useState} from 'react';
import "./styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import i18n from "../../i18n";
import {redirectToDashboard} from "../../auth";

const LoginABlock = ({ onSubmit }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const language = localStorage.getItem("lang") || "en";
  const isArabic = language === "ar";

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
      method: "POST",
      data:data,
      url: `http://localhost:3000/auth/login`,
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
         localStorage.setItem("role", res.data.user.role);
         redirectToDashboard(navigate);

      }
    } catch (error) {
      return error.response;
    }

  }

  const handleIconClick = () => {
    onSubmit();
  };

  return (
    <div className="login-block1">
      <FontAwesomeIcon icon={faTimes} className="faicon1" onClick={handleIconClick} />
      <h2>{i18n.t("loginText")}</h2>
      <form >
        <div className="form-group">
          <label htmlFor="email" className={isArabic ? "label-arabic" : ""}>{i18n.t("emailLabelText")}</label>
          <input type="email" id="email" name="email" value={email}  onChange={handleEmailChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="password" className={isArabic ? "label-arabic" : ""}>{i18n.t("passwordLabelText")}</label>
          <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange}/>
        </div>
      </form>
      <button type="submit" onClick={handleLogin}>{i18n.t("loginText")}</button>
    </div>
  );
};

export default LoginABlock;