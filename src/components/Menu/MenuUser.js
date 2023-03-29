import React, { useState } from 'react';
import './Menu-style.scss';
import { motion } from 'framer-motion';

const MenuUser = ({ isUserOpen }) => {
  const [keepOpen, setKeepOpen] = useState(false);
  return (
    <motion.div
      initial={{ height: '0px', width: '0px' }}
      animate={{ height: 'initial', width: 'initial' }}
      transition={{ ease: 'easeInOut', duration: .2 }}
      onMouseEnter={() => setKeepOpen(true)}
      onMouseLeave={() => setKeepOpen(false)}
      className={isUserOpen === true || keepOpen === true ? 'show menu_wrapper' : 'menu_wrapper'}
    >
      <p>asdsaddasddddd</p>
      <p>asdsaddasddddd</p>
      <p>asdsaddasddddd</p>
      <p>asdsaddasddddd</p>
    </motion.div>
  );
};

export default MenuUser;