import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import HomePage from './pages/Home/Homepage';
import ProjectsPage from './pages/Projects/projects';
import ProjectPage from './pages/Project/project';
import NewProject from './pages/New/New';
import { authenticate } from './store/session';
import EditProject from './pages/New/Edit';
import Footer from './components/Footer';

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
        <Route path='/' exact={true} component={HomePage} />
        <Route path='/login' exact={true} component={LoginForm} />
        <Route path='/sign-up' exact={true} component={SignUpForm} />
        <Route path='/projects' exact component={ProjectsPage} />
        <ProtectedRoute path='/projects/new' exact component={NewProject} />
        <ProtectedRoute path='/projects/:id/edit' exact component={EditProject} />
        <Route path='/projects/:id' exact component={ProjectPage} />
        <ProtectedRoute path='/users/:userId' exact={true} component={User} />
        <ProtectedRoute path='/users' exact={true} component={UsersList} />
        <Route path='/' >
          <h1>404 not found</h1>
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter >
  );
}

export default App;
