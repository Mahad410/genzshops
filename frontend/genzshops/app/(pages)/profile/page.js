"use client";
import React, { useState, useEffect, useRef } from 'react';
import ModeEditTwoToneIcon from '@mui/icons-material/ModeEditTwoTone';
import { ProtectedRoutes } from '@/app/components/protectedRoutes';
import Loader from '@/app/loader';
import { useAuth } from '@/utils/context';
import { getUser } from '@/utils/helper';
import { useRouter } from 'next/navigation';

export default function Profile() {
  const router = useRouter();
  const inputRef = useRef(null);
  const {token } = useAuth();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
  });
  const [updateData, setUpdateData] = useState(formData.username); // Initialize with username
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const user = await getUser(token);
        setFormData({ username: user.username, email: user.email });
        setUpdateData(user.username); // Set initial value of updateData
      } catch (error) {
        console.error('An error occurred while fetching user profile:', error);
        setErrorMessage('Failed to fetch user profile');
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

  const handleCancel = (e) => {
    e.preventDefault();
    setUpdateData(formData.username); // Reset updateData to the value in formData
    router.back();
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Use the updateData state value for username
    const updatedFormData = { ...formData, username: updateData };

    try {
      const response = await updateUser(updatedFormData);
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

  return (
    <ProtectedRoutes>
      <div className="relative w-full h-[calc(100vh-180px)] overflow-hidden">
      <form onSubmit={handleSubmit} className="h-min w-[600px] p-[24px] border-[4px] bg-white rounded-xl absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <h1 className="text-5xl font-bold text-center mb-4">Profile</h1>
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
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </form>
      </div>
    </ProtectedRoutes>
  );
}
