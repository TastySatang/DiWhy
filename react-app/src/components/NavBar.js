
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { logout } from '../store/session';

import robot from './robot.png'
import './NavBar.css'

const NavBar = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const user = useSelector(state => state.session.user)

  const onLogout = async (e) => {
    await dispatch(logout());
    history.push('/login')
  };

  let auth;

  if (user) {
    auth = (
      <div className='topnavbar__right'>
        {/* <div className='right right__users'>
          <NavLink className='NavLink' to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </div>
        <span className='right right__pipe'>
          |
        </span> */}
        <div className='right right__Logout'>
          <div className='NavLink' onClick={onLogout}>
            Logout
          </div>
        </div>
      </div>
    )
  } else {
    auth = (
      <div className='topnavbar__right'>
        <div className='right right__login'>
          <NavLink className='NavLink' to='/login' exact={true} activeClassName='active'>
            Log In
          </NavLink>
        </div>
        <span className='right right__pipe'>
          |
        </span>
        <div className='right right__signup'>
          <NavLink className='NavLink' to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </div>
      </div>
    )
  }

  return (
    <div>
      <nav className='topnavbar'>
        <div className='topnavbar__left'>
          <NavLink className='NavLink' to='/' exact={true} activeClassName='active'>
            <i className="fas fa-home"></i>
          </NavLink>
        </div>
        {auth}
      </nav>
      <div className='botnavbar'>
        <div className='botnavbar__left'>
          <NavLink className='NavLink branding' to='/' exact>
            <img className='botnav__logo' src={robot} alt={robot} />
            <span>DiWHY</span>
          </NavLink>
          <NavLink className='NavLink' to='/projects'>
            <button className='NavBtn'>Projects</button>
          </NavLink>
        </div>
        <div className='botnavbar__right'>
          {user ? (
            <div>
              <NavLink className='NavLink' to='/projects/new'>
                PUBLISH
              </NavLink>
            </div>
          ) :
            (
              <div>
                <NavLink className='NavLink' to='/login'>
                  PUBLISH
                </NavLink>
              </div>
            )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
