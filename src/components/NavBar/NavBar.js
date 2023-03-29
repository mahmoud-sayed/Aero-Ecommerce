import React, { Fragment, useState } from 'react';
import './navBar-style.scss';
import logo from './../../assets/logo-aero1.png';
import { Link } from 'react-router-dom';
import { FaSearch, FaRegUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { motion } from 'framer-motion';
import vars from './../../Helpers/style_needs.scss';
import MenuNavBar from './../Menu/MenuNavBar';
import MenuUser from './../Menu/MenuUser';

const NavBar = () => {
  const [styleChange, setStyleChange] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [itemIndex, setItemIndex] = useState();


  const changeNavBarStyle = () => {
    window.scrollY >= 50 ? setStyleChange(true) : setStyleChange(false);
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
      <motion.div className='navbar'>
        <div className='nav_logo'>
          <img src={logo} alt="aero logo" />
        </div>
        <div className='nav_items'>

          {['home', 'shop', 'featured', 'pages'].map((item, index) => (

            <Fragment key={index}>
              <Link className='nav_item'
                onMouseEnter={() => { setIsOpen(true); setItemIndex(index); }}
                onMouseLeave={() => { setIsOpen(false); setItemIndex(''); }}
              >
                <motion.p
                  initial={{ color: vars.textWhite }}
                  whileHover={{ color: vars.redColor, scale: 1.1, transition: { duration: .2 } }}
                >
                  {item}
                  {item !== 'home' ? <span>&#11167;</span> : ''}
                </motion.p>
                {
                  itemIndex === index && item !== 'home' ?
                    (<MenuNavBar isOpen={isOpen} itemName={item} />) : ''
                }
              </Link>
            </Fragment>
          ))}

        </div>
        <div className='Nav_cart_account_search'>
          <motion.div
            initial={{ color: vars.textWhite }}
            whileHover={{ color: vars.redColor, scale: 1.1, transition: { duration: .2 } }}
          >
            <FaSearch className='icons nav_search_icon' />
          </motion.div>
          <motion.div
            initial={{ color: vars.textWhite }}
            whileHover={{ color: vars.redColor, scale: 1.1, transition: { duration: .2 } }}
          >
            <FaRegUser
              onClick={() => setIsUserOpen(true)}
              onMouseLeave={() => setIsUserOpen(false)}
              className='icons nav_account_sign' />
            {isUserOpen && (<MenuUser isUserOpen={isUserOpen} />)}

          </motion.div>
          <motion.div
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
          </motion.div>
        </div>
      </motion.div>
    </motion.nav >
  );
};

export default NavBar;