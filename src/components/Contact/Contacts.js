import React from 'react';
import './Contacts.css';

const Contact = () => {
  return (
    <section className='contact' id='contact'>
      <h1 className='heading'>
        <span>Contact</span> us
      </h1>
      <div className='row'>
        <iframe
          className='map'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.224280339112!2d3.4733856147858124!3d6.6190361952135355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bec48afcde89f%3A0x93f746a485133226!2sJustrite%20Superstore%20Ikorodu!5e0!3m2!1sen!2sng!4v1636387898985!5m2!1sen!2sng'
          allowfullscreen=''
          loading='lazy'
        ></iframe>

        <form action=''>
          <h3>get in touch</h3>
          <input type='text' placeholder='name' className='box' />
          <input type='email' placeholder='email' className='box' />
          <input type='number' placeholder='number' className='box' />
          <textarea
            placeholder='message'
            className='box'
            cols='30'
            rows='10'
          ></textarea>
          <input type='submit' value='send  message' className='btn' />
        </form>
      </div>
    </section>
  );
};

export default Contact;
