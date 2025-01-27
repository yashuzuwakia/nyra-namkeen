import React from 'react';

import logo from '../assets/images/logo.png'
import cover from '../assets/images/homehead1.png'
import video from '../assets/videos/video.MP4'

import "./Home.css"

const Home = () => {
  return (
    <div className="home">
      <img src={logo} alt="" className='logo'/>
      <h1>Welcome to Nyra Namkeen</h1>
      <p>Taste Nahi, Feelings Hai!</p>
      <video src={video} className='video' autoPlay loop muted />
    </div>
  );
};

export default Home;