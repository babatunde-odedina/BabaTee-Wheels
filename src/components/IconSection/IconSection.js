import React from 'react';
import { faCar, faHome, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './IconSection.css';

function IconSection() {
  return (
    <section className='icons_container'>
      <div className='icons'>
        <FontAwesomeIcon icon={faHome} className='icon' />
        <div className='content'>
          <h3>270+</h3>
          <p>branches</p>
        </div>
      </div>

      <div className='icons'>
        <FontAwesomeIcon icon={faCar} className='icon' />
        <div className='content'>
          <h3>1490+</h3>
          <p>Cars sold</p>
        </div>
      </div>

      <div className='icons'>
        <FontAwesomeIcon icon={faUsers} className='icon' />
        <div className='content'>
          <h3>480+</h3>
          <p>happy clients</p>
        </div>
      </div>

      <div className='icons'>
        <FontAwesomeIcon icon={faCar} className='icon' />
        <div className='content'>
          <h3>990+</h3>
          <p>new cars</p>
        </div>
      </div>
    </section>
  );
}

export default IconSection;
