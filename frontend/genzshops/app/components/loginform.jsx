"use client"
import React, { useState } from 'react';

export default function LoginForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const newErrors = { ...errors };

    if (!value) {
      newErrors[name] = `${name} is required`;
    } else if (name === 'email' && !value.includes('@')) {
      newErrors[name] = 'Invalid email format';
    } else if (name === 'password' && value.length < 6) {
      newErrors[name] = 'Password must be at least 6 characters long';
    } else if (name === 'confirmPassword' && value !== formData.password) {
      newErrors[name] = 'Passwords do not match';
    } else {
      newErrors[name] = '';
    }

    setErrors(newErrors);
  }; 
  const validateForm = () => {
    const newErrors = {};

    if (!formData.username) {
      newErrors.username = 'Username is required';
    }

    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Submit the form to your API or do something with the login data
    }
  };

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
        onBlur={handleBlur}
        className="input input-bordered w-full m-1"
      />
      {errors[name] && <span className="text-red-600">{errors[name]}</span>}
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="min-h-min w-[600px] p-[24px] border-[4px] m-[auto]">
      {renderInput('username', 'Username')}
      {renderInput('password', 'Password', 'password')}

      <div className="form-control">
  <label className="label cursor-pointer">
    <span className="label-text flex items-center font-extrabold"><input type="checkbox" checked="checked" className="checkbox m-1" />Remember me</span> 
    
  </label>
</div>

      <div className="join w-full flex items-center justify-center mt-5 m-1">
        <button className="btn bg-[--bg-li] hover:bg-[#ffffff] border-white border-[4px] hover:border-[--bg-li] rounded-full text-[--sidebar-text] hover:text-[#000000] join-item w-[50%]">
          Cancel
        </button>
        <button className="btn bg-[#ffffff] hover.bg-[--bg-li] border-[--bg-li] border-[4px] hover:border-[#ffffff] rounded-full text-[#000000] hover:text-[--sidebar-text] join-item w-[50%]">
          Log In
        </button>
      </div>
    </form>
  );
}
