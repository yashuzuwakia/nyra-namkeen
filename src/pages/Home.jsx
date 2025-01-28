import React from 'react';

import logo from '../assets/images/logo.png'
import video from '../assets/videos/video.MP4'
import cover from '../assets/images/finalcover.png'

import "./Home.css"

const Home = () => {
  return (
    <div className="home">
      <img src={logo} alt="" className='logo'/>
      <h1>Welcome to Nyra Namkeen</h1>
      <p>Taste Nahi, Feelings Hai!</p>
      <img src={cover} alt="" className='cover'/>
      <video
        src={video}
        className="video"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        controls={false}
        controlsList="nodownload noplaybackrate"
      />
    </div>
  );
};

export default Home;