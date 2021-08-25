import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/' exact={true} >
          <h1>Root Page</h1>
        </Route>
        <Route path='/login' exact={true} component={LoginForm} />
        <Route path='/sign-up' exact={true} component={SignUpForm} />
        <ProtectedRoute path='/users/:userId' exact={true} component={User} />
        <ProtectedRoute path='/users' exact={true} component={UsersList} />
      </Switch>
    </BrowserRouter >
  );
}

export default App;
