import React, { useState, useEffect } from 'react';
import './Header.css';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import SignInForm from '../SignInForm/SignInForm';
import { faUser } from '@fortawesome/free-regular-svg-icons';

const Header = () => {
  const [icons, setIcons] = useState(true);
  const [isActive, setIsActive] = useState(true);
  const [isScroll, setIsScroll] = useState();
  const [showSignUp, setShowSignUp] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY === 0) {
        setIsScroll(false);
      } else {
        setIsScroll(true);
      }
    });

    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  const handleToggleIcon = () => {
    setIcons(!icons);
    setIsActive(!isActive);
  };

  const handleShowSignup = () => {
    setShowSignUp(!showSignUp);
  };

  return (
    <div>
      <div className={isScroll ? 'header header_active' : 'header'}>
        <div className='menu_btn' onClick={handleToggleIcon}>
          <FontAwesomeIcon
            icon={icons ? faBars : faTimes}
            className={icons ? '' : 'fa_times'}
          />
        </div>
        <a href='/' className='logo'>
          <span>Babatee</span>Wheels
        </a>
        <nav className={isActive ? 'navbar' : 'navbar navbar_active'}>
          <Link activeClass='active' to='home' className='nav'>
            Home
          </Link>
          <Link to='vehicles' offset={-70} className='nav'>
            Vehicles
          </Link>
          <Link to='services' offset={-70} className='nav'>
            Services
          </Link>
          <Link to='featured' offset={-70} className='nav'>
            Featured
          </Link>
          <Link to='review' offset={-70} className='nav'>
            Reviews
          </Link>
          <Link to='contact' offset={-70} className='nav'>
            Contact
          </Link>
        </nav>
        <div className='login_btn'>
          <div className='btn' onClick={handleShowSignup}>
            LogIn
          </div>
          <FontAwesomeIcon
            icon={faUser}
            className='icon'
            onClick={handleShowSignup}
          />
        </div>
      </div>
      {!showSignUp && (
        <SignInForm showSignUp={showSignUp} setShowSignUp={setShowSignUp} />
      )}
    </div>
  );
};

export default Header;
