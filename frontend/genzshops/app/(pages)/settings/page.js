"use client"
import React, { useState } from 'react';
import ModeEditTwoToneIcon from '@mui/icons-material/ModeEditTwoTone';

export default function Profile() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    confirmpassword: '',
    phone: '',

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to your backend
  };

  return (
    <div>
      <h1 className='text-[4rem] text-center m-2 font-bold'>Settings</h1>
      <form onSubmit={handleSubmit} className="min-h-min w-[600px] p-[24px] border-[4px] m-[auto]">
        <div className='mb-2'>
          <label htmlFor="username" className='block'>Username</label> 
          <span className='flex items-center justify-between'>  
            <input
        type="name"
        name="username"
        // value={formData[name]}
        // onChange={handleChange}
        // onBlur={handleBlur}
        className="input input-bordered w-full m-1"/>
          <button className='btn bg-[--bg-intro-text] text-blue-700'>
          <ModeEditTwoToneIcon/>
          </button>
            </span>
        </div>

        <div className='mb-2'>
          <label htmlFor="email" className='block'>Email</label> 
          <span className='flex items-center justify-between'>  
            <input
        type="email"
        name="email"
        // value={formData[name]}
        // onChange={handleChange}
        // onBlur={handleBlur}
        className="input input-bordered w-full m-1"/>
          <button className='btn bg-[--bg-intro-text] text-blue-700'>
          <ModeEditTwoToneIcon/>
          </button>
            </span>
        </div>

        {/* <div className='mb-2'>
          <label htmlFor="phone" className='block'>Phone</label> 
          <span className='flex items-center justify-between'>  
            <input
        type="tel"
        name="phone"
        // value={formData[name]}
        // onChange={handleChange}
        // onBlur={handleBlur}
        className="input input-bordered w-full m-1"/>
          <button className='btn bg-[--bg-intro-text] text-blue-700'>
          <ModeEditTwoToneIcon/>
          </button>
            </span>
        </div> */}


        <div className='mb-2'>
          <label htmlFor="password" className='block'>Password</label> 
          <span className='flex items-center justify-between'>  
            <input
        type="password"
        name="password"
        // value={formData[name]}
        // onChange={handleChange}
        // onBlur={handleBlur}
        className="input input-bordered w-full m-1"/>
          <button className='btn bg-[--bg-intro-text] text-blue-700'>
          <ModeEditTwoToneIcon/>
          </button>
            </span>
        </div>

        <div className='mb-2'>
          <label htmlFor="confirmpassword" className='block'>Confirm Password</label> 
          <span className='flex items-center justify-between'>  
            <input
        type="confirmpassword"
        name="confirmpassword"
        // value={formData[name]}
        // onChange={handleChange}
        // onBlur={handleBlur}
        className="input input-bordered w-full m-1"/>
          <button className='btn bg-[--bg-intro-text] text-blue-700'>
          <ModeEditTwoToneIcon/>
          </button>
            </span>
        </div>
        <div className='flex items-center'>
        <button className="btn bg-red-500 hover:bg-red-400 border-[4px] border-[#000000] hover:border-[#ffffff] rounded-full font-bold text-[#ffffff] mt-[30px] h-min mr-1" >Cancel</button>
        <button className="btn bg-[#ffffff] hover:bg-[--bg-li] border-[4px] border-[#000000] hover:border-[#ffffff] rounded-full font-bold text-[#000000] hover:text-[--sidebar-text] mt-[30px] h-min" >Save Changes</button>
        </div>
      </form>
    </div>
  );
}
