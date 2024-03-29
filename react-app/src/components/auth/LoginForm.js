import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { login } from '../../store/session';

import './Login.css'
import loginimg from './login.jpg'

const LoginForm = () => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const demoLogin = async () => {
    const data = await dispatch(login('demo@aa.io', 'password'));
    if (data) {
      setErrors(data);
    }
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='wrapper__login' style={{ backgroundImage: `url(${loginimg})` }}>
      <div className='login__container'>
        <form className='login__form' onSubmit={onLogin}>
          <input className='form__textinput'
            name='email'
            type='text'
            placeholder='Email'
            value={email}
            onChange={updateEmail}
          />
          <input className='form__textinput'
            name='password'
            type='password'
            placeholder='Password'
            value={password}
            onChange={updatePassword}
          />
          <div className='error__container'>
            {errors.map((error, ind) => (
              <div className='errors' key={ind}>{error}</div>
            ))}
          </div>
          <button className='form__button' type='submit'>Login</button>
        </form>
        <p className='container__p login__container__p'>New to DiWhy?
          <Link className='login__container__link' to='/sign-up'>Sign Up »</Link>
        </p>
        <p className='container__p login__container__p'>Just want to try the site?
        </p>
        <button type='button' onClick={demoLogin} className='form__button' to='/login'>Demo Login</button>

      </div >
    </div >

  );
};

export default LoginForm;
