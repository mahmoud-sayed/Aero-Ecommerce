import React from 'react';
import NavBar from './../NavBar/NavBar';
import Footer from './../Footer/Footer';

const ReusableNavFooter = ({ children }) => {
  return (
    <React.Fragment>
      <NavBar />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default ReusableNavFooter;