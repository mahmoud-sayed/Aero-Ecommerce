import React, { useState, useEffect } from 'react';
import './Menu-style.scss';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';



const MenuNavBar = ({ isOpen, itemName }) => {
  const [keepOpen, setKeepOpen] = useState(false);
  const [itemsToLoopThrough, setItemsToLoopThrough] = useState('');



  const menuItems = ['shop', 'featured', 'pages'];
  useEffect(() => {
    const iterationFunc = (itemToIterateOn) => {
      for (const key of itemToIterateOn) {
        if (itemName === key) {
          setItemsToLoopThrough(key);
        }
      }
    };
    iterationFunc(menuItems);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);


  // let shopData = [];
  // itemsToLoopThrough.forEach((key, val) => {
  //   console.log(key);
  // });

  const MenuData = () => {
    if (itemsToLoopThrough === 'shop') {
      return (
        <div className='list_header_paper'>
          <div>
            <p className='list_header'>wheels</p>
            {[1, 2, 3, 4].map((item, index) => (
              <div key={index}>
                <Link className='list_item' >{item}</Link>
              </div>
            ))
            }
          </div>
          <div>
            <p className='list_header'>Decoration</p>
            {[1, 2, 3, 4].map((item, index) => (
              <div key={index}>
                <Link className='list_item' >{item}</Link>
              </div>
            ))
            }
          </div>
          <div>
            <p className='list_header'>accessories</p>
            {[1, 2, 3, 4].map((item, index) => (
              <div key={index}>
                <Link className='list_item' >{item}</Link>
              </div>
            ))
            }
          </div>
          <div>
            <p className='list_header'>engine</p>
            {[1, 2, 3, 4].map((item, index) => (
              <div key={index}>
                <Link className='list_item' >{item}</Link>
              </div>
            ))
            }
          </div>
        </div>
      );
    } else if (itemsToLoopThrough === 'featured') {
      return (
        <div className='list_header_paper'>
          <div className='featured_product'>
            <img src="img_girl.jpg" alt='' />
            <p className='featured_product_name'>AOPO DESIGNS WOOLRICH KLETTERSACK</p>
            <p className='featured_product_price'>$150</p>
          </div>
          <div className='featured_product'>
            <img src="img_girl.jpg" alt='' />
            <p className='featured_product_name'>AOPO DESIGNS WOOLRICH KLETTERSACK</p>
            <p className='featured_product_price'>$150</p>
          </div>
          <div className='featured_product'>
            <img src="img_girl.jpg" alt='' />
            <p className='featured_product_name'>AOPO DESIGNS WOOLRICH KLETTERSACK</p>
            <p className='featured_product_price'>$150</p>
          </div>
        </div>
      );
    }
    else if (itemsToLoopThrough === 'pages') {
      return (
        <div className='list_header_paper'>
          <div>
            {[
              'home', 'cart', 'check out', 'confirmation', 'information', 'payment', 'products', 'register', 'shipping', 'signIn', 'single Product View', 'whish List'
            ].map((item, index) => (
              <Link to='#' key={index}>{item}</Link>
            ))}
          </div>
        </div>
      );
    }
  };

  return (
    <motion.div
      initial={{ height: '0px', width: '0px' }}
      animate={{ height: 'initial', width: 'initial' }}
      transition={{ ease: 'easeInOut', duration: .2 }}
      onMouseEnter={() => { setKeepOpen(true); }}
      onMouseLeave={() => setKeepOpen(false)}
      className={isOpen === true || keepOpen === true ? 'show menu_wrapper' : 'menu_wrapper'}
      style={{ left: 0 }}
    >
      <MenuData />
    </motion.div>
  );
};

export default MenuNavBar;


