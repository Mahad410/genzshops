// import React from "react";


// export default function Login() {
//   return (
//     <>
//       <h1 className="text-[4rem] font-luckiest text-center">Log in</h1>
//       <div className="min-h-min w-[600px] p-[24px] border-[4px] m-[auto]">
      
//         <label htmlFor='email' className="block m-1">
//             Email: 
//         </label>
//         <input type="email" placeholder="Enter your email" className="input input-bordered w-full m-1" />
//         <label htmlFor='password' className="block m-1">
//             Password: 
//         </label>
//         <input type="password" placeholder="Enter your password" className="input input-bordered w-full m-1" />

// <div className="join w-full flex items-center justify-center mt-5 m-1">
//                 <button className="btn bg-[--bg-li] hover:bg-[#ffffff] border-white border-[4px] hover:border-[--bg-li] rounded-full text-[--sidebar-text] hover:text-[#000000] join-item w-[50%]">Cancel</button>
//                 <button className="btn bg-[#ffffff] hover:bg-[--bg-li] border-[--bg-li] border-[4px] hover:border-[#ffffff] rounded-full text-[#000000] hover:text-[--sidebar-text] join-item w-[50%]">Log In</button>
//             </div>
// </div>

//     </>
//   );
// }


import React from 'react';
import LoginForm from '@/app/components/loginform';

export default function Signup() {
  return (
    <div>
      <h1 className='text-[4rem] text-center m-2 font-bold'>Log In</h1>
        <LoginForm />
    </div>
  );
}