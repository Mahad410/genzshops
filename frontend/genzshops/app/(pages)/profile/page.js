"use client";
import React, { useState, useEffect, useRef } from 'react';
import ModeEditTwoToneIcon from '@mui/icons-material/ModeEditTwoTone';
import { ProtectedRoutes } from '@/app/components/protectedRoutes';
import Loader from '@/app/loader';
import { useAuth } from '@/utils/context';
import { getUser } from '@/utils/helper';

export default function Profile() {
  const inputRef = useRef(null);
  const { token } = useAuth();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
  });
  const [updateData, setUpdateData] = useState(formData.username); // Initialize with username
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const user = await getUser(token);
        setFormData({ username: user.username, email: user.email });
        setUpdateData(user.username); // Set initial value of updateData
        setLoading(false);
      } catch (error) {
        console.error('An error occurred while fetching user profile:', error);
        setErrorMessage('Failed to fetch user profile');
        setLoading(false);
      }
    })();
  }, [token]);

  const handleEdit = (e) => {
    e.preventDefault();
    inputRef.current.focus();
  }

  const handleUsernameChange = (e) => {
    const { value } = e.target;
    setUpdateData(value); // Update the updateData state as the user types
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Use the updateData state value for username
    const updatedFormData = { ...formData, username: updateData };

    try {
      const { updateUser } = await import('@/utils/helper');
      const response = await updateUser(token,updatedFormData);

      if (response.status === 200) {
        alert('Profile updated successfully');
        // Update formData with the new username
        setFormData({ ...formData, username: updateData });
      } else {
        setErrorMessage('Profile update failed. Please check your data.');
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again.');
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <ProtectedRoutes>
      <h1 className='text-[4rem] text-center m-2 font-bold'>Profile</h1>
      <form onSubmit={handleSubmit} className="min-h-min w-[600px] p-[24px] border-[4px] m-[auto]">
        <div className='mb-2'>
          <label htmlFor="username" className='block'>Username</label>
          <span className='flex items-center justify-between'>
            <input
              type="text"
              name="username"
              value={updateData} // Use the updateData state as the value
              onChange={handleUsernameChange} // Handle changes in the updateData state
              ref={inputRef}
              className="input input-bordered w-full m-1"
            />
            <button className='btn bg-[--bg-intro-text] text-blue-700' onClick={handleEdit}>
              <ModeEditTwoToneIcon />
            </button>
          </span>
        </div>

        <div className='mb-2'>
          <label htmlFor="email" className='block'>Email</label>
          <span className='flex items-center justify-between'>
            <input
              type="email"
              name="email"
              value={formData.email}
              className="input input-bordered w-full m-1"
              disabled
            />
            <button className='btn bg-[--bg-intro-text] btn-disabled text-blue-700'>
              <ModeEditTwoToneIcon />
            </button>
          </span>
        </div>
        <div className='flex items-center'>
          <button className="btn bg-red-500 hover.bg-red-400 border-[4px] border-[#000000] hover-border-[#ffffff] rounded-full font-bold text-[#ffffff] mt-[30px] h-min mr-1" >Cancel</button>
          <button className="btn bg-[#ffffff] hover.bg-[--bg-li] border-[4px] border-[#000000] hover-border-[#ffffff] rounded-full font-bold text-[#000000] hover-text-[--sidebar-text] mt-[30px] h-min" type="submit" onClick={handleSubmit}>Save Changes</button>
        </div>
      </form>
    </ProtectedRoutes>
  );
}
