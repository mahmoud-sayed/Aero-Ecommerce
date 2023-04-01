import React from 'react';
import './signIn-style.scss';
import { Link } from 'react-router-dom';
import image from "./../../assets/Login-Register/img-login.svg";


const SignIn = () => {

  return (
    <div className="login">
      <div className="login__content">
        <div className="login__img">
          <img src={image} alt="" />
        </div>
        <div className="login__forms">
          <form action="" className="login__registre" id="login-in">
            <h1 className="login__title">Sign In</h1>
            <div className="login__box">
              <i className='bx bx-user login__icon'></i>
              <input type="text" placeholder="Username" className="login__input" />
            </div>
            <div className="login__box">
              <i className='bx bx-lock-alt login__icon'></i>
              <input type="password" placeholder="Password" className="login__input" />
            </div>
            <Link to='#' className="login__forgot">Forgot password?</Link>
            <Link to='#' className="login__button">Sign In</Link>
            <div>
              <span className="login__account">Don't have an Account ?</span>
              <Link to='/register' className="login__signin" id="sign-up">Sign Up</Link>
            </div>
          </form>


        </div>
      </div>
    </div>
  );
};

export default SignIn;