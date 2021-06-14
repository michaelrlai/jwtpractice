import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';

import Dashboard from './components/Dashboard';
import api from './api/api';

import { useDispatch, useSelector } from 'react-redux';
import { setTrue, setFalse } from './redux/authSlice';

const App = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const isAuth = async () => {
    try {
      const response = await api({
        method: 'GET',
        url: '/auth/is-verify',
        headers: { token: localStorage.token },
      });

      response.data ? dispatch(setTrue()) : dispatch(setFalse());
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    isAuth();
  }, []);

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='container col-md-6'>
          <Router>
            <Switch>
              <Route exact path='/login'>
                {!auth ? <Login /> : <Redirect to='/dashboard' />}
              </Route>
              <Route exact path='/register'>
                {!auth ? <Register /> : <Redirect to='/dashboard' />}
              </Route>
              <Route exact path='/dashboard'>
                {auth ? <Dashboard /> : <Redirect to='/login' />}
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
};

export default App;
