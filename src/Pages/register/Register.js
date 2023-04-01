import React from 'react';
import { Link } from 'react-router-dom';
import './Register-style.scss';
import image from "./../../assets/Login-Register/img-login.svg";

const Register = () => {
  return (
    <div className="login">
      <div className="login__content">
        <div className="login__img">
          <img src={image} alt="" />
        </div>
        <div className="login__forms">
          <form action="" className="login__registre" id="login-in">
            <h1 className="login__title">Sign Up</h1>

            <div className="login__box">
              <i className='bx bx-user login__icon'></i>
              <input type="text" placeholder="Username" className="login__input" />
            </div>

            <div className="login__box">
              <i className='bx bx-user login__icon'></i>
              <input type="email" placeholder="Email" className="login__input" />
            </div>

            <div className="login__box">
              <i className='bx bx-lock-alt login__icon'></i>
              <input type="password" placeholder="Password" className="login__input" />
            </div>

            <div className="login__box">
              <i className='bx bx-lock-alt login__icon'></i>
              <input type="password" placeholder="Confirm Password" className="login__input" />
            </div>

            <Link to='#' className="login__button">Sign Up</Link>

            <div>
              <Link to='/login' className="login__signin" id="sign-up">Sign In</Link>
            </div>
          </form>


        </div>
      </div>
    </div>
  );
};

export default Register;