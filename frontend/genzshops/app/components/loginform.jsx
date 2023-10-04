'use client'
import React, { useState } from 'react';
import { loginUser } from '@/utils/helper';
import { useRouter } from 'next/navigation'; // Use 'next/router' instead of 'next/navigation'
import { useAuth } from '@/utils/context';
import Link from 'next/link';
export default function LoginForm() {
  const { setToken } = useAuth();
  const router = useRouter();
  const [formData, setFormData] = useState({
    identifier: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [formError, setFormError] = useState(''); // New state for general form-level error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.identifier) {
      newErrors.identifier = 'Username or email is required';
    }

    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (validateForm()) {
      try {
        const response = await loginUser(formData, setToken);
        if (!response.error) {
          setSuccessMessage('Login successful!');
          const redirectUrl = localStorage.getItem('redirectUrl') || '/';
          console.log(`Redirecting to ${redirectUrl}`);
          router.push(redirectUrl);
        } else {
          setFormError(response.error);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };
const handleCancel = async (e) => {
e.preventDefault();
localStorage.removeItem('redirectUrl');
router.push('/');
}
  const renderInput = (name, label, type = 'text') => (
    <div>
      <label htmlFor={name} className="block m-1">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        className="input input-bordered w-full m-1"
      />
      {errors[name] && <span className="text-red-600">{errors[name]}</span>}
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="min-h-min w-[600px] p-[24px] border-[4px] m-[auto]">
      {renderInput('identifier', 'Username or Email')}
      {renderInput('password', 'Password', 'password')}
      {successMessage && <p className="text-green-600">{successMessage}</p>}
      {formError && <p className="text-red-600">{formError}</p>}
      <div>Dont have an account? <Link href='/signup'>Sign Up</Link></div>
      <div className="join w-full flex items-center justify-center mt-5 m-1">
        <button type='button' className="btn bg-[--bg-li] hover:bg-[#ffffff] border-white border-[4px] hover.border-[--bg-li] rounded-full text-[--sidebar-text] hover:text-[#000000] join-item w-[50%]" onClick={handleCancel}>
          Cancel
        </button>
        <button type='submit' className="btn bg-[#ffffff] hover.bg-[--bg-li] border-[--bg-li] border-[4px] hover.border-[#ffffff] rounded-full text-[#000000] hover:text-[--sidebar-text] join-item w-[50%]">
          Log In
        </button>
      </div>
    </form>
  );
}
