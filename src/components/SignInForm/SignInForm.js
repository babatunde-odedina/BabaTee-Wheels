import React from 'react';
import './SignInForm.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function SignInForm({ showSignUp, setShowSignUp }) {
  return (
    <div
      className={
        showSignUp ? 'login_form_container_active' : 'login_form_container'
      }
    >
      <span className='close_login_form'>
        <FontAwesomeIcon
          icon={faTimes}
          onClick={() => setShowSignUp(!showSignUp)}
        />
      </span>
      <form action=''>
        <h3>User Login</h3>
        <input type='email' placeholder='email' className='box' />
        <input type='password' placeholder='password' className='box' />
        <p>
          forget your password <Link to='/'>click here</Link>
        </p>
        <input type='submit' value='login now' className='btn' />
        <p>or login with</p>
        <div className='buttons'>
          <Link to='/' className='btn'>
            Google
          </Link>
          <Link to='/' className='btn'>
            Facebook
          </Link>
        </div>
        <p>
          don't have an account <Link to='/'>create one</Link>
        </p>
      </form>
    </div>
  );
}

export default SignInForm;
