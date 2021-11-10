import React from 'react';
import { Link } from 'react-router-dom';
import HomeImg from '../../images/home-img.png';
import './Home.css';

function Home() {
  const mousemove = (e) => {
    document.querySelectorAll('.home_parallax').forEach((elm) => {
      let speed = elm.getAttribute('data-speed');
      let x = (window.innerWidth - e.pageX * speed) / 90;
      let y = (window.innerWidth - e.pageY * speed) / 90;

      elm.style.transform = `translateX(${y}px) translateY(${x}px)`;
    });
  };

  const mouseleave = () => {
    document.querySelectorAll('.home_parallax').forEach((elm) => {
      elm.style.transform = `translateX(0px) translateY(0px)`;
    });
  };

  return (
    <section
      id='home'
      className='home'
      onMouseMove={mousemove}
      onMouseLeave={mouseleave}
    >
      <h1 className='home_parallax' data-speed='-2'>
        Find your car
      </h1>
      <img className='home_parallax' src={HomeImg} alt='' data-speed='5' />
      <Link to='/' data-speed='7' className='btn home_parallax'>
        Explore Cars
      </Link>
    </section>
  );
}

export default Home;
