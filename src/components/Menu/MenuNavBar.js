import React, { useState, useEffect } from 'react';
import './Menu-style.scss';
import { motion } from 'framer-motion';


const menuItems = {
  shop: {
    wheels: [1, 2, 3, 4],
    Decoration: [1, 2, 3, 4],
    accessories: [1, 2, 3, 4],
    engine: [1, 2, 3, 4],
  },
  featured: {
    item1: {
      img: '',
      name: 'AOPO DESIGNS WOOLRICH KLETTERSACK',
      price: 150.00
    },
    item2: {
      img: '',
      name: 'AOPO DESIGNS WOOLRICH KLETTERSACK',
      price: 150.00
    },
    item3: {
      img: '',
      name: 'AOPO DESIGNS WOOLRICH KLETTERSACK',
      price: 150.00
    },

  },
  pages: [
    'home', 'cart', 'check out', 'confirmation', 'information', 'payment', 'products', 'register', 'shipping', 'signIn', 'single Product View', 'whish List'
  ]
};

const MenuNavBar = ({ isOpen, itemName }) => {
  const [keepOpen, setKeepOpen] = useState(false);
  const [itemsToLoopThrough, setItemsToLoopThrough] = useState('');


  const iterationFunc = (itemToIterateOn) => {
    for (const key in itemToIterateOn) {
      if (itemName === key) {
        setItemsToLoopThrough(key);
      }
    }
  };

  useEffect(() => {
    iterationFunc(menuItems);
  }, [isOpen]);


  const MenuData = () => {
    if (itemsToLoopThrough === 'shop') {
      return (<p>shop</p>);
    } else if (itemsToLoopThrough === 'featured') {
      return (<p>featured</p>);
    }
    else if (itemsToLoopThrough === 'pages') {
      return (<p>pages</p>);
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
      dd
      <MenuData />
    </motion.div>
  );
};

export default MenuNavBar;


