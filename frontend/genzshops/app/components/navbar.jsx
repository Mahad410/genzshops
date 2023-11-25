'use client'
import React, { createContext, useContext, useState, useMemo, useEffect } from 'react';
import Inventory2RoundedIcon from '@mui/icons-material/Inventory2Rounded';
import ConnectWithoutContactRoundedIcon from '@mui/icons-material/ConnectWithoutContactRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import Link from 'next/link';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { checkAuthentication } from '@/utils/helper';
import { useAuth } from '@/utils/context';
import { useRouter,usePathname } from 'next/navigation';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import secureLocalStorage from 'react-secure-storage';
export default function Navbar() {
  const { token, setToken } = useAuth();
  const path = usePathname();


  useEffect(() => {
    const isAuthenticated = checkAuthentication(token);
    if (!isAuthenticated) {
      secureLocalStorage.setItem('redirectUrl', path);
    }
    }, [token,path]);

  const handleLogout = () => {
    secureLocalStorage.clear();
    setToken(null);
  };
  return (
    <>
      <div className="navbar bg-[--bg-sidebar] fixed z-20 left-0 right-0">
        <div className="navbar-start">
          <label className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle text-[--sidebar-text]" />
            <div className="drawer-content">
              <span className="btn bg-[--bg-li] border-[4px] border-white hover:border-[--bg-li] drawer-button rounded-full h-[55px] w-[55px]"><svg xmlns="http://www.w3.org/2000/svg" className="h-[20px] w-[20px] text-[--svg]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg></span>
            </div>
            <div className="drawer-side">
              <span className="drawer-overlay hover:cursor-auto"></span>
              <ul className="menu p-4 w-80 h-full bg-[--bg-sidebar] text-[#ffffff]">
                <span className="rounded-full btn p-0 bg-[--bg-li] drawer-button mb-1 border-white border-[4px] hover:border-[--bg-li] hover:bg-[#ffffff]">
                  <span className='w-[100%] h-[100%] flex justify-center items-center hover:text-[#000000] inner-svg'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[--svg] " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                  </span>
                </span>

                <li className='rounded-full font-bold btn p-0 bg-[--bg-li] border-white border-[4px] hover:border-[--bg-li] hover:bg-[#ffffff] mb-1'><Link href="products" className='w-[100%] hover:font-bold text-[--sidebar-text] hover:text-[#000000] transition-text duration-300'><Inventory2RoundedIcon fontSize="large" />Products</Link></li>
                <li className='rounded-full font-bold btn p-0 bg-[--bg-li] border-white border-[4px] hover:border-[--bg-li] hover:bg-[#ffffff] mb-1'><Link href="products" className='w-[100%] hover:font-bold text-[--sidebar-text] hover:text-[#000000] transition-text duration-300'><ConnectWithoutContactRoundedIcon color="#5070D" fontSize="large" />Contact Us</Link></li>
                <li className='rounded-full font-bold btn p-0 bg-[--bg-li] border-white border-[4px] hover:border-[--bg-li] hover:bg-[#ffffff] mb-1'><Link href="products" className='w-[100%] hover:font-bold text-[--sidebar-text] hover:text-[#000000] transition-text duration-300'><InfoRoundedIcon color="#5070D" fontSize="large" />About</Link></li>
                <li className='rounded-full font-bold btn p-0 bg-[--bg-li] border-white border-[4px] hover:border-[--bg-li] hover:bg-[#ffffff] mb-1'><Link href="products" className='w-[100%] hover:font-bold text-[--sidebar-text] hover:text-[#000000] transition-text duration-300'><WorkRoundedIcon color="#5070D" fontSize="large" />Careers</Link></li>
                <div className='absolute bottom-[4%] left-[50%] translate-x-[-50%] md:hidden flex'>
                  <div className="join">
                    <button className="btn bg-[--bg-li] hover:bg-[#ffffff] border-white border-[4px] hover:border-[--bg-li] rounded-full text-[--sidebar-text] hover:text-[#000000] join-item"><Link href={'/signup'}>Sign Up</Link></button>
                    <button className="btn bg-[#ffffff] hover:bg-[--bg-li] border-[--bg-li] border-[4px] hover:border-[#ffffff] rounded-full text-[#000000] hover:text-[--sidebar-text] join-item"><Link href={'login'}>Log In</Link></button>
                  </div>
                </div>
              </ul>
            </div>
          </label>

        </div>
        <div className="navbar-center items-center justify-center">
          <Link href='/' className="text-[2rem] font-luckiest text-[--bg-intro] h-min">GenZ Shop&apos;s</Link>
        </div>
        <div className="navbar-end">
          {
            token ? (
              <>
                <label tabIndex={0} htmlFor='search'>
                  <input type='search' id='search' name='search' className='bg-[--bg-li] border-[4px] border-white hover:border-[--bg-li] rounded-full p-2 pl-[16px] pr-[16px]' placeholder="Search">
                  </input>
                </label>
                <div className='btn btn-circle border-white border-[4px] hover:border-[--bg-intro] mr-[1rem] ml-[0.2rem]'>
                  <SearchRoundedIcon className='text-[--bg-sidebar]' />
                </div>             
                <div>
                  <Link href={'/cart'}>
                  <span tabIndex={0} className="btn btn-circle bg-[--bg-li] border-[4px] border-white hover:border-[--bg-li] rounded-full p-2">
                    <div className="indicator">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-[24px] w-[24px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                      <span className="badge badge-sm indicator-item bg-yellow-400 border-none mt-[-10px]"></span>
                    </div>
                  </span>
                      </Link>
                </div>
                <div className="dropdown dropdown-end ml-[16px] mr-[16px]">
                  <span tabIndex={0} className="btn btn-ghost btn-circle border-[4px] border-[#ffffff] hover:border-[--bg-intro]">
                    <AccountCircleTwoToneIcon className="text-[--bg-intro] w-[40px] h-[40px] hover:text-[#ffffff]" />
                  </span>
                  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                      <Link href={'/profile'} className="justify-between">
                        Profile
                      </Link>
                    </li>
                    <li className='hover:bg-red-400 rounded-lg'><Link href={'/'} onClick={handleLogout}>Logout</Link></li>
                  </ul>
                </div>
              </>
            ) : (
              <div className={'hidden md:flex'}>
                <div className="join">
                  <button className="btn bg-[--bg-li] hover:bg-[#ffffff] border-white border-[4px] hover:border-[--bg-li] rounded-full text-[--sidebar-text] hover:text-[#000000] join-item"><Link href={'/signup'}>Sign Up</Link></button>
                  <button className="btn bg-[#ffffff] hover:bg-[--bg-li] border-[--bg-li] border-[4px] hover:border-[#ffffff] rounded-full text-[#000000] hover:text-[--sidebar-text] join-item"><Link href={'login'}>Log In</Link></button>
                </div>
              </div>
            )
          }
        </div>
      </div>

    </>
  )
}