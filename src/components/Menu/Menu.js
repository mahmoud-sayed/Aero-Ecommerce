import React, { useState } from 'react';
import './Menu-style.scss';
const Menu = ({ isOpen, refe }) => {
  const [keepOpen, setKeepOpen] = useState(false);
  return (
    <div
      onMouseEnter={() => setKeepOpen(true)}
      onMouseLeave={() => setKeepOpen(false)}
      className={isOpen === true || keepOpen === true ? 'show menu_wrapper' : 'menu_wrapper'}
      ref={refe}
    >
      asd
    </div>
  );
};

export default Menu;


