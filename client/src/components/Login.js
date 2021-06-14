import React, { useState } from 'react';
import axios from 'axios';
import api from '../api/api';
import { useSelector, useDispatch } from 'react-redux';
import { setFalse, setTrue } from '../redux/authSlice';
import { Link } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const { email, password } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api({
        method: 'POST',
        url: '/auth/login',
        data: {
          email,
          password,
        },
      });

      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        dispatch(setTrue());
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <form>
        <h1 className='text-center my-5'>Login</h1>
        <input
          className='form-control'
          type='email'
          placeholder='email'
          name='email'
          onChange={onChange}
        />
        <input
          className='form-control my-3'
          type='password'
          placeholder='password'
          name='password'
          onChange={onChange}
        />
        <div className='d-grid'>
          <button className='btn btn-primary' onClick={onSubmit}>
            Submit
          </button>
        </div>
      </form>
      <Link to='/register'>Register</Link>
    </>
  );
};

export default Login;
