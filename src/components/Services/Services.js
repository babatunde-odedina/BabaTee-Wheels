import {
  faCar,
  faCarBattery,
  faCarCrash,
  faGasPump,
  faHeadset,
  faTools,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

function Services() {
  return (
    <section id='services' className='services'>
      <h1 className='heading'>
        our <span>services</span>
      </h1>
      <div className='box_container'>
        <div className='box'>
          <FontAwesomeIcon icon={faCar} className='s_icons' />
          <h3>Car Selling</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <Link to='/' className='btn'>
            read more
          </Link>
        </div>

        <div className='box'>
          <FontAwesomeIcon icon={faTools} className='s_icons' />
          <h3>Part Repair</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <Link to='/' className='btn'>
            read more
          </Link>
        </div>
        <div className='box'>
          <FontAwesomeIcon icon={faCarCrash} className='s_icons' />
          <h3>Car Insurance</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <Link to='/' className='btn'>
            read more
          </Link>
        </div>
        <div className='box'>
          <FontAwesomeIcon icon={faCarBattery} className='s_icons' />
          <h3>battery replacement</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <Link to='/' className='btn'>
            read more
          </Link>
        </div>
        <div className='box'>
          <FontAwesomeIcon icon={faGasPump} className='s_icons' />
          <h3>oil change</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <Link to='/' className='btn'>
            read more
          </Link>
        </div>
        <div className='box'>
          <FontAwesomeIcon icon={faHeadset} className='s_icons' />
          <h3>24/7 support</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <Link to='/' className='btn'>
            read more
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Services;
