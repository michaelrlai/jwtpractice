import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setTrue } from '../redux/authSlice';
import api from '../api/api';

const Register = () => {
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log('hi');
      const response = await api({
        method: 'POST',
        url: '/auth/register',
        data: {
          name,
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
        <h1 className='text-center my-5'>Register</h1>
        <input
          className='form-control my-3'
          type='name'
          placeholder='name'
          name='name'
          onChange={onChange}
        />
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
      <Link to='/login'>Login</Link>
    </>
  );
};

export default Register;
