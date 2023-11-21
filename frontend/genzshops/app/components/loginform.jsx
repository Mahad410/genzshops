'use client'
import React, { useState } from 'react';
import { loginUser } from '@/utils/helper';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '@/utils/context';
import Link from 'next/link';
import secureLocalStorage from 'react-secure-storage';

export default function LoginForm() {
  const path = usePathname();
  const { token, setToken,setRole } = useAuth();
  const router = useRouter();

  const [formData, setFormData] = useState({
    identifier: '',
    password: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [formError, setFormError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(formData, setToken, setRole);
      if (!response.error) {
        setSuccessMessage('Login successful!');
        setFormError('');
        const redirectUrl = secureLocalStorage.getItem('redirectUrl') || '/';
        router.push(redirectUrl === '/login' ? '/' : redirectUrl);
      } else {
        if (formData.password.length < 6) {
          setFormError('Password must be at least 6 characters long');
        }
        else if (response.error === 'identifier is a required field') {
          setFormError('Username or email is required');
        }
        else if (response.error === '2 errors occurred') {
          setFormError('Email and Password is required')
        }
        else if (response.error === 'Invalid identifier or password') {
          setFormError('Invalid username or password');
        }
        else {
          setFormError(response.error);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancel = async (e) => {
    e.preventDefault();
    secureLocalStorage.removeItem('redirectUrl');
    router.push('/');
  };

  const renderInput = (name, label, type = 'text') => (
    <div>
      <label htmlFor={name} className="block m-1">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        onBlur={(() => setFormError(''))}
        onKeyDown={(() => setFormError(''))}
        className="input input-bordered w-full m-1"
      />
    </div>
  );

  const showLoginError = (token) => {
    if (!token && path !== '/login') {
      return (
        <div className="alert alert-warning mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <span className="">You need to be logged in to access this page</span>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="relative w-full h-[calc(100vh-180px)] overflow-hidden">
      <form onSubmit={handleSubmit} className="h-min w-[600px] p-[24px] border-[4px] bg-white rounded-xl absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h1 className="text-5xl font-bold text-center mb-4">Log In</h1>
        {successMessage && (
          <div className="alert alert-success mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {successMessage}
          </div>
        )}
        {formError && (
          <div className="alert alert-error mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {formError}
          </div>
        )}
        {showLoginError(token)}
        {renderInput('identifier', 'Username or Email')}
        {renderInput('password', 'Password', 'password')}

        <div>
          Dont have an account? <Link href="/signup" className="underline hover:text-[--bg-intro]">Sign Up</Link>
        </div>
        <div className="join w-full flex items-center justify-around mt-5 m-1">
          <button
            type="button"
            className='btn w-1/3'
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            type="submit"
            className='btn btn-active btn-neutral w-1/2'
          >
            Log In
          </button>
        </div>
      </form>
    </div>
  );
}
