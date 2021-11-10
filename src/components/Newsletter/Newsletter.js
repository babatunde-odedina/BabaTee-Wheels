import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
  return (
    <section className='newsletter'>
      <h3>subscribe for latest updates</h3>
      <p>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </p>
      <form action=''>
        <input type='email' placeholder='enter your email' name='' id='' />
        <input type='submit' className='subscribe_btn' name='' id='' />
      </form>
    </section>
  );
};

export default Newsletter;
