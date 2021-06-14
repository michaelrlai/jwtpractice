import React from 'react';
import { useDispatch } from 'react-redux';
import { setFalse } from '../redux/authSlice';

const Dashboard = () => {
  const dispatch = useDispatch();

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    dispatch(setFalse());
  };

  return (
    <>
      <h1>Dashboard</h1>
      <div></div>
      <button className='btn btn-danger' onClick={logout}>
        Logout
      </button>
    </>
  );
};

export default Dashboard;
