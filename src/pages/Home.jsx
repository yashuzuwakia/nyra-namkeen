import React from 'react';
import logo from '../assets/images/logo.png'
import "./Home.css"

const Home = () => {
  return (
    <div className="home">
      <img src={logo} alt="" className='logo'/>
      <h1>Welcome to Nyra Namkeen</h1>
      <p>Taste Nahi, Feelings Hai!</p>
    </div>
  );
};

export default Home;