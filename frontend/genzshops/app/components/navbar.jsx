// import icons
"use client"
import Inventory2RoundedIcon from '@mui/icons-material/Inventory2Rounded';
import ConnectWithoutContactRoundedIcon from '@mui/icons-material/ConnectWithoutContactRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import Link from 'next/link';
import IntroJoinButtons from './introJoinButton';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Image from 'next/image';
export default function Navbar() {
  return (
    <>
      <div className="navbar bg-[--bg-sidebar] fixed z-20 left-0 right-0">
        <div className="navbar-start">
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle text-[--sidebar-text]" />
            <div className="drawer-content">
              <label htmlFor="my-drawer" className="btn bg-[--bg-li] border-[4px] border-white hover:border-[--bg-li] drawer-button rounded-full h-[55px] w-[55px]"><svg xmlns="http://www.w3.org/2000/svg" className="h-[20px] w-[20px] text-[--svg]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg></label>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer" className="drawer-overlay hover:cursor-auto"></label>
              <ul className="menu p-4 w-80 h-full bg-[--bg-sidebar] text-[#ffffff]">
                <label htmlFor="my-drawer" className="rounded-full btn p-0 bg-[--bg-li] drawer-button mb-1 border-white border-[4px] hover:border-[--bg-li] hover:bg-[#ffffff]">
                  <span className='w-[100%] h-[100%] flex justify-center items-center hover:text-[#000000] inner-svg'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[--svg] " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                  </span>
                </label>

                <li className='rounded-full font-bold btn p-0 bg-[--bg-li] border-white border-[4px] hover:border-[--bg-li] hover:bg-[#ffffff] mb-1'><Link href="products" className='w-[100%] hover:font-bold text-[--sidebar-text] hover:text-[#000000] transition-text duration-300'><Inventory2RoundedIcon fontSize="large" />Products</Link></li>
                <li className='rounded-full font-bold btn p-0 bg-[--bg-li] border-white border-[4px] hover:border-[--bg-li] hover:bg-[#ffffff] mb-1'><Link href="products" className='w-[100%] hover:font-bold text-[--sidebar-text] hover:text-[#000000] transition-text duration-300'><ConnectWithoutContactRoundedIcon color="#5070D" fontSize="large" />Contact Us</Link></li>
                <li className='rounded-full font-bold btn p-0 bg-[--bg-li] border-white border-[4px] hover:border-[--bg-li] hover:bg-[#ffffff] mb-1'><Link href="products" className='w-[100%] hover:font-bold text-[--sidebar-text] hover:text-[#000000] transition-text duration-300'><InfoRoundedIcon color="#5070D" fontSize="large" />About</Link></li>
                <li className='rounded-full font-bold btn p-0 bg-[--bg-li] border-white border-[4px] hover:border-[--bg-li] hover:bg-[#ffffff] mb-1'><Link href="products" className='w-[100%] hover:font-bold text-[--sidebar-text] hover:text-[#000000] transition-text duration-300'><WorkRoundedIcon color="#5070D" fontSize="large" />Careers</Link></li>
                {/* login/signup buttons */}
                <div className='absolute bottom-[4%] left-[50%] translate-x-[-50%] md:hidden flex'>
                <IntroJoinButtons f_name={'Sign up'} s_name={'Login'} f_func={''} s_func={''}/>
                </div>
              </ul>
            </div>
          </div>

        </div>
        <div className="navbar-center items-center justify-center">
          <Link href='/' className="text-[2rem] font-luckiest text-[--bg-intro] h-min">GenZ Shop&apos;s</Link>
        </div>
        <div className="navbar-end">
        <label tabIndex={0} className=''>
          <input type='search' className='bg-[--bg-li] border-[4px] border-white hover:border-[--bg-li] rounded-full p-2 pl-[16px] pr-[16px]' placeholder="Search">
          </input>
          
      </label>
      <div className='btn btn-circle border-white border-[4px] hover:border-[--bg-intro] mr-[1rem] ml-[0.2rem]'>
           <SearchRoundedIcon className='text-[--bg-sidebar]'/>
          </div>

        <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-circle bg-[--bg-li] border-[4px] border-white hover:border-[--bg-li] rounded-full p-2">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-[24px] w-[24px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item bg-yellow-400 border-none mt-[-10px]"></span>
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


          {/* <div className={'hidden md:flex'}>
          <IntroJoinButtons f_name={'Sign up'} s_name={'Login'} f_func={''} s_func={''} />
          </div> */}

        <div className="dropdown dropdown-end ml-[16px] mr-[16px]">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <Image src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt='profile' sizes={'100%'} width={300} height={300}/>
          </div>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <a className="justify-between">
              Profile
            </a>
          </li>
          <li className='hover:bg-red-400 rounded-lg'><a>Logout</a></li>
        </ul>
      </div>

        </div>
      </div>
    </>
  )
}