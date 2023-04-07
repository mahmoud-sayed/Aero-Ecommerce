import React from 'react';
import './Home-style.scss';
import { Slide } from 'react-slideshow-image';
import image1 from './../../assets/slider/slider1-aero2-1920x933_1920x846.progressive.webp';
import image2 from './../../assets/slider/slider2-aero2-1920x933_1920x846.progressive.webp';
import image3 from './../../assets/slider/slider3-aero2-1920x933_1920x846.progressive.webp';

const Home = () => {
  return (
    <Slide>
      <div className="each-slide-effect">
        <div style={{ 'backgroundImage': `url(${image1})` }}>
          <span>Slide 1</span>
        </div>
      </div>
      <div className="each-slide-effect">
        <div style={{ 'backgroundImage': `url(${image2})` }}>
          <span>Slide 2</span>
        </div>
      </div>
      <div className="each-slide-effect">
        <div style={{ 'backgroundImage': `url(${image3})` }}>
          <span>Slide 3</span>
        </div>
      </div>
    </Slide>
  );
};

export default Home;