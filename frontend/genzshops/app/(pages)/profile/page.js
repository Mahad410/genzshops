'use client'
import React, { useState, useEffect } from 'react';
import ModeEditTwoToneIcon from '@mui/icons-material/ModeEditTwoTone';
import { ProtectedRoutes } from '@/app/components/protectedRoutes';
import { fetchProfile } from '@/utils/helper';
export default function Profile() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    confirmpassword: '',
    phone: '',
  });
  const [loading, setLoading] = useState(true); // To track if data is loading.
  const [errorMessage, setErrorMessage] = useState('');

  // Function to fetch and set the user's data
const token = localStorage.getItem('token');
console.log(token)
  // Function to update user profile using an API request.

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const profileData = await fetchProfile(token);
        setFormData(profileData);
        setLoading(false);
      } catch (error) {
        console.error('An error occurred while fetching user profile:', error);
        setErrorMessage('Failed to fetch user profile');
        setLoading(false);
      }
    };
    fetchUserProfile();
  }, [token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await updateUserProfile(formData);

      if (response.status === 200) {
        alert('Profile updated successfully');
      } else {
        setErrorMessage('Profile update failed. Please check your data.');
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again.');
    }
  };

  // Render the loading state while data is being fetched
  if (loading) {
    return <div>Loading user data...</div>;
  }

  return (
    <ProtectedRoutes>
      <h1 className='text-[4rem] text-center m-2 font-bold'>Settings</h1>
      <form onSubmit={handleSubmit} className="min-h-min w-[600px] p-[24px] border-[4px] m-[auto]">
        {/* Username Input */}
        <div className='mb-2'>
          <label htmlFor="username" className='block'>Username</label> 
          <span className='flex items-center justify-between'>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="input input-bordered w-full m-1"
            />
            <button className='btn bg-[--bg-intro-text] text-blue-700'>
              <ModeEditTwoToneIcon />
            </button>
          </span>
        </div>

        {/* Email Input */}
        <div className='mb-2'>
          <label htmlFor="email" className='block'>Email</label> 
          <span className='flex items-center justify-between'>  
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input input-bordered w-full m-1"
            />
            <button className='btn bg-[--bg-intro-text] text-blue-700'>
              <ModeEditTwoToneIcon />
            </button>
          </span>
        </div>

        {/* Password Input */}
        <div className='mb-2'>
          <label htmlFor="password" className='block'>Password</label> 
          <span className='flex items-center justify-between'>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="input input-bordered w-full m-1"
            />
            <button className='btn bg-[--bg-intro-text] text-blue-700'>
              <ModeEditTwoToneIcon />
            </button>
          </span>
        </div>

        {/* Confirm Password Input */}
        <div className='mb-2'>
          <label htmlFor="confirmpassword" className='block'>Confirm Password</label> 
          <span className='flex items-center justify-between'>
            <input
              type="password"
              name="confirmpassword"
              value={formData.confirmpassword}
              onChange={handleChange}
              className="input input-bordered w-full m-1"
            />
            <button className='btn bg-[--bg-intro-text] text-blue-700'>
              <ModeEditTwoToneIcon />
            </button>
          </span>
        </div>

        {/* Phone Input */}
        <div className='mb-2'>
          <label htmlFor="phone" className='block'>Phone</label> 
          <span className='flex items-center justify-between'>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="input input-bordered w-full m-1"
            />
            <button className='btn bg-[--bg-intro-text] text-blue-700'>
              <ModeEditTwoToneIcon />
            </button>
          </span>
        </div>

        <div className='flex items-center'>
          <button className="btn bg-red-500 hover:bg-red-400 border-[4px] border-[#000000] hover:border-[#ffffff] rounded-full font-bold text-[#ffffff] mt-[30px] h-min mr-1" >Cancel</button>
          <button className="btn bg-[#ffffff] hover:bg-[--bg-li] border-[4px] border-[#000000] hover:border-[#ffffff] rounded-full font-bold text-[#000000] hover:text-[--sidebar-text] mt-[30px] h-min" type="submit">Save Changes</button>
        </div>
      </form>
    </ProtectedRoutes>
  );
}
