import React from 'react';
import logo from '../assets/images/logo.png'
import cover from '../assets/images/homehead1.png'
import "./Home.css"

const Home = () => {
  return (
    <div className="home">
      <img src={logo} alt="" className='logo'/>
      <img src={cover} alt="" className='cover'/>
      <h1>Welcome to Nyra Namkeen</h1>
      <p>Taste Nahi, Feelings Hai!</p>
    </div>
  );
};

export default Home;