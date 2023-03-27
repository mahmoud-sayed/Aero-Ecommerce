import React, { useState } from 'react';
import './navBar-style.scss';
import logo from './../../assets/logo-aero1.png';
import { Link } from 'react-router-dom';
import { FaSearch, FaRegUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { motion } from 'framer-motion';
import vars from './../../Helpers/style_needs.scss';

const NavBar = () => {
  const [styleChange, setStyleChange] = useState(false);

  const changeNavBarStyle = () => {
    window.scrollY > 70 ? setStyleChange(true) : setStyleChange(false);
  };
  window.addEventListener('scroll', changeNavBarStyle);

  return (
    <motion.nav
      initial={
        {
          height: '84px',
          padding: '12px 0',
          y: 0,
        }
      }
      animate={styleChange === true ? {
        height: '60px',
        padding: '0',
        y: 0,

      } : ''}
      transition={styleChange === true ? { ease: "easeInOut", duration: .5 } : ''}
      className='nav_wrapper'
    >
      <motion.div

        className='navbar'
      >
        <div className='nav_logo'>
          <img src={logo} alt="aero logo" />
        </div>
        <div className='nav_items'>
          <Link className='nav_item'>
            <motion.p
              initial={{ color: vars.textWhite }}
              whileHover={{ color: vars.redColor, scale: 1.1, transition: { duration: .2 } }}
            >Home &#11167;</motion.p>
          </Link>
          <Link className='nav_item' >
            <motion.p
              initial={{ color: vars.textWhite }}
              whileHover={{ color: vars.redColor, scale: 1.1, transition: { duration: .2 } }}
            >Shop &#11167;</motion.p>
          </Link>
          <Link className='nav_item' >
            <motion.p
              initial={{ color: vars.textWhite }}
              whileHover={{ color: vars.redColor, scale: 1.1, transition: { duration: .2 } }}
            >featured &#11167;</motion.p>
          </Link>
        </div>
        <div className='Nav_cart_account_search'>
          <motion.p
            initial={{ color: vars.textWhite }}
            whileHover={{ color: vars.redColor, scale: 1.1, transition: { duration: .2 } }}
          >
            <FaSearch className='icons nav_search_icon' />
          </motion.p>
          <motion.p
            initial={{ color: vars.textWhite }}
            whileHover={{ color: vars.redColor, scale: 1.1, transition: { duration: .2 } }}
          >
            <FaRegUser className='icons nav_account_sign' />
          </motion.p>
          <motion.p
            initial={{ color: vars.textWhite }}
            whileHover={{ color: vars.redColor, scale: 1.1, transition: { duration: .2 } }}
            className='cart_icon'
          >
            <AiOutlineShoppingCart className='icons nav_cart' />
            <motion.span className='cart_counter'>
              <motion.span
                initial={{ color: vars.textWhite }}
                whileHover={{ color: '#fff' }}
              >
                0
              </motion.span>
            </motion.span>
          </motion.p>
        </div>
      </motion.div>
    </motion.nav >
  );
};

export default NavBar;