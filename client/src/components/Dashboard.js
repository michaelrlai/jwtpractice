import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import api from '../api/api';
import { setFalse } from '../redux/authSlice';

const Dashboard = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    dispatch(setFalse());
  };

  useEffect(() => {
    const getName = async () => {
      try {
        const response = await api({
          method: 'GET',
          url: '/dashboard',
          headers: { token: localStorage.token },
        });
        setName(response.data.user_name);
      } catch (err) {
        console.log(err.message);
      }
    };
    getName();
  }, []);

  return (
    <>
      <h1>Dashboard</h1>
      <p>Hello {name}!</p>
      <button className='btn btn-danger' onClick={logout}>
        Logout
      </button>
    </>
  );
};

export default Dashboard;
