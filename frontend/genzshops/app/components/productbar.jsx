"use client"
import React from 'react'
import Link from 'next/link';

export default function productbar() {
  return (
    <>
    <div className='navbar w-full h-auto p-[16px] backdrop-blur-lg bg-[--transparent_black_4] sticky z-[9] top-[90px] mt-[60px] mb-5 rounded-full pl-[32px] pr-[32px]'>
    <div className='navbar-start'>
            center
        </div>
        <div className='navbar-center'>
            center
        </div>
        <div className="navbar-end">


        <div className="dropdown dropdown-end">
        <div className="form-control">
      <input type="search" placeholder="Search" className="input input-bordered w-24 md:w-auto  rounded-full bg-[--transparent_black_4] focus:bg-[rgba(0,0,0,0.7)] text-[--search-text] text-lg font-bold border-[0.3rem]" />
    </div>
    </div>
  
        <div className="dropdown dropdown-end ml-[16px] mr-[16px]">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator bg-[--bg-li] border-[4px] border-white hover:border-[--bg-li] btn rounded-full">
          <svg className="h-[20px] w-[20px] text-[--svg]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item rounded-full w-[10px] bg-[--bg-sidebar]"></span>
        </div>
      </label>
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
        </div>
    </div>
    </>
  )
}