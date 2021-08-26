import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, Link } from 'react-router-dom';
import { signUp } from '../../store/session';

import signupimg from './signup.jpg'

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='wrapper__login' style={{ backgroundImage: `url(${signupimg})` }}>
      <div className='login__container'>
        <form className='login__form' onSubmit={onSignUp}>
          <input className='form__textinput'
            placeholder='Username'
            type='text'
            name='username'
            onChange={updateUsername}
            value={username}
          ></input>
          <input className='form__textinput'
            placeholder='Email'
            type='text'
            name='email'
            onChange={updateEmail}
            value={email}
          ></input>
          <input className='form__textinput'
            placeholder='Password'
            type='password'
            name='password'
            onChange={updatePassword}
            value={password}
          ></input>
          <input className='form__textinput'
            placeholder='Confirm Password'
            type='password'
            name='repeat_password'
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          ></input>
          <div className='error__container'>
            {errors.map((error, ind) => (
              <div className='errors' key={ind}>{error}</div>
            ))}
          </div>
          <button className='form__button' type='submit'>Sign Up</button>
        </form>
        <p className='container__p login__container__p'>Already have an account?
          <Link className='login__container__link' to='/login'>Log In »</Link>
        </p>
      </div>
    </div>

  );
};

export default SignUpForm;
