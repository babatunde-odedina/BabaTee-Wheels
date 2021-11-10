import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {
  faArrowRight,
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <section className='footer'>
      <div className='box_container'>
        <div className='box'>
          <h3>our branches</h3>
          <Link className='link' to='/'>
            <FontAwesomeIcon className='icon' icon={faMapMarkerAlt} /> Nigeria
          </Link>
          <Link className='link' to='/'>
            <FontAwesomeIcon className='icon' icon={faMapMarkerAlt} />
            SouthAfrica
          </Link>
          <Link className='link' to='/'>
            <FontAwesomeIcon className='icon' icon={faMapMarkerAlt} /> Ghana
          </Link>
          <Link className='link' to='/'>
            <FontAwesomeIcon className='icon' icon={faMapMarkerAlt} /> Kenya
          </Link>
          <Link className='link' to='/'>
            <FontAwesomeIcon className='icon' icon={faMapMarkerAlt} /> Rwanda
          </Link>
        </div>
        <div className='box'>
          <h3>quick links</h3>
          <Link className='link' to='/'>
            <FontAwesomeIcon className='icon' icon={faArrowRight} /> Home
          </Link>
          <Link className='link' to='/'>
            <FontAwesomeIcon className='icon' icon={faArrowRight} /> Vehicles
          </Link>
          <Link className='link' to='/'>
            <FontAwesomeIcon className='icon' icon={faArrowRight} /> services
          </Link>
          <Link className='link' to='/'>
            <FontAwesomeIcon className='icon' icon={faArrowRight} /> featured
          </Link>
          <Link className='link' to='/'>
            <FontAwesomeIcon className='icon' icon={faArrowRight} /> reviews
          </Link>
          <Link className='link' to='/'>
            <FontAwesomeIcon className='icon' icon={faArrowRight} /> contact
          </Link>
        </div>
        <div className='box'>
          <h3>quick links</h3>
          <Link className='link' to='/'>
            <FontAwesomeIcon className='icon' icon={faPhone} /> +234-812-120-057
          </Link>
          <Link className='link' to='/'>
            <FontAwesomeIcon className='icon' icon={faPhone} /> +111-222-3333
          </Link>
          <Link className='link' to='/'>
            <FontAwesomeIcon className='icon' icon={faEnvelope} />{' '}
            babsodedina@gmail.com
          </Link>
          <Link className='link' to='/'>
            <FontAwesomeIcon className='icon' icon={faMapMarkerAlt} /> ikorodu
            lagos, Nigeria
          </Link>
        </div>
        <div className='box'>
          <h3>quick links</h3>
          <Link className='link' to='/'>
            <FontAwesomeIcon className='icon' icon={faFacebookF} /> facebook
          </Link>
          <Link className='link' to='/'>
            <FontAwesomeIcon className='icon' icon={faTwitter} /> twitter
          </Link>
          <Link className='link' to='/'>
            <FontAwesomeIcon className='icon' icon={faInstagram} /> instagram
          </Link>
          <Link className='link' to='/'>
            <FontAwesomeIcon className='icon' icon={faLinkedin} />
            linkedin
          </Link>
        </div>
      </div>

      <div className='credit'>
        Created by Odedina Babatunde Wasiu | all rights reserved
      </div>
    </section>
  );
};

export default Footer;
