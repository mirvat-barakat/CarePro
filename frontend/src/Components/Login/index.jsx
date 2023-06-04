import React , {useState} from 'react';
import "./styles.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import i18n from "../../i18n";

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
        localStorage.setItem('user_id', JSON.stringify(res.data.user._id));
        navigate("/login");
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


  const language = localStorage.getItem("lang") || "en";
  const isArabic = language === "ar";

  return (
    <div className="login-block">
      <FontAwesomeIcon icon={faTimes} className="faicon1" onClick={handleIconClick} />
      <h2>{showRegistration ? i18n.t("registerText") : i18n.t("loginText") }</h2>
      {showRegistration ? (
        <form>
          <div className="form-group">
            <label htmlFor="registration-name" className={isArabic ? "label-arabic" : ""}>{i18n.t("nameLabelText")}</label>
            <input type="name" id="registration-name" name="registration-name" value={name} onChange={handleNameChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="registration-email" className={isArabic ? "label-arabic" : ""}>{i18n.t("emailLabelText")}</label>
            <input type="email" id="registration-email" name="registration-email" value={email}  onChange={handleEmailChange} />
          </div>
          <div className="form-group">
            <label htmlFor="registration-password" className={isArabic ? "label-arabic" : ""}>{i18n.t("passwordLabelText")}</label>
            <input type="password" id="registration-password" name="registration-password" value={password} onChange={handlePasswordChange}/>
          </div>
          <p className='link'>{i18n.t("haveAccountText")} <Link to="" onClick={handleBackToLoginClick}>{i18n.t("backToLoginText")}</Link></p>
        </form>
      ) : (
      <form >
        <div className="form-group">
          <label htmlFor="email" className={isArabic ? "label-arabic" : ""}>{i18n.t("emailLabelText")}</label>
          <input type="email" id="email" name="email" value={email}  onChange={handleEmailChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="password" className={isArabic ? "label-arabic" : ""}>{i18n.t("passwordLabelText")}</label>
          <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange}/>
        </div>
        <p className='link'>{i18n.t("noAccountText")} <Link to="" onClick={handleSignUpClick}>{i18n.t("signUpText")}</Link></p>
      </form>
      )}
      <button type="submit" onClick={handleSubmit}>{showRegistration ? i18n.t("registerText") : i18n.t("loginText")}</button>
    </div>
  );
};

export default LoginBlock;