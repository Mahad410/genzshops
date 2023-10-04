// "use client"
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { registerUser } from '@/utils/helper';

// export default function RegisterForm() {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });
//   const [errors, setErrors] = useState({});
//   const router = useRouter();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
//   };

//   const handleBlur = (e) => {
//     const { name, value } = e.target;
//     const newErrors = { ...errors };

//     if (!value) {
//       newErrors[name] = `${name} is required`;
//     } else if (name === 'email' && !value.includes('@')) {
//       newErrors[name] = 'Invalid email format';
//     } else if (name === 'password' && value.length < 6) {
//       newErrors[name] = 'Password must be at least 6 characters long';
//     } else if (name === 'confirmPassword' && value !== formData.password) {
//       newErrors[name] = 'Passwords do not match';
//     } else {
//       newErrors[name] = '';
//     }

//     setErrors(newErrors);
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.username) {
//       newErrors.username = 'Username is required';
//     }

//     if (!formData.email) {
//       newErrors.email = 'Email is required';
//     } else if (!formData.email.includes('@')) {
//       newErrors.email = 'Invalid email format';
//     }

//     if (formData.password.length < 6) {
//       newErrors.password = 'Password must be at least 6 characters long';
//     }

//     if (formData.password !== formData.confirmPassword) {
//       newErrors.confirmPassword = 'Passwords do not match';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     if (validateForm()) {
//       try {
//         await registerUser(formData);
//         router.push('/login');
//       } catch (error) {
//         if (error.response && error.response.data && error.response.data.message) {
//           setErrors({ ...error.response.data.message[0].messages });
//         } else {
//           console.error(error);
//         }
//       }
//     }
//   };

//   const renderInput = (name, label, type = 'text') => (
//     <div>
//       <label htmlFor={name} className="block m-1">
//         {label}
//       </label>
//       <input
//         type={type}
//         name={name}
//         value={formData[name]}
//         onChange={handleChange}
//         onBlur={handleBlur}
//         className="input input-bordered w-full m-1"
//       />
//       {errors[name] && <span className="text-red-600">{errors[name]}</span>}
//     </div>
//   );

//   return (
//     <form onSubmit={handleSubmit} className="min-h-min w-[600px] p-[24px] border-[4px] m-[auto]">
//       {renderInput('username', 'Username')}
//       {renderInput('email', 'Email')}
//       {renderInput('password', 'Password', 'password')}
//       {renderInput('confirmPassword', 'Confirm Password', 'password')}

//       <div className="join w-full flex items-center justify-center mt-5 m-1">
//         <button type="button" className="btn bg-[--bg-li] hover:bg-[#ffffff] border-white border-[4px] hover:border-[--bg-li] rounded-full text-[--sidebar-text] hover:text-[#000000] join-item w-[50%]">
//           Cancel
//         </button>
//         <button type="submit" className="btn bg-[#ffffff] hover.bg-[--bg-li] border-[--bg-li] border-[4px] hover:border-[#ffffff] rounded-full text-[#000000] hover:text-[--sidebar-text] join-item w-[50%]">
//           Sign Up
//         </button>
//       </div>
//     </form>
//   );
// }



"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { registerUser } from '@/utils/helper';

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [formErrors, setFormErrors] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.username) {
      newErrors.username = 'Username is required';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username is too short';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!formData.email.includes('@')) {
      newErrors.email = 'Invalid email format';
    }

    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (validateForm()) {
      try {
        const response = await registerUser(formData);
        if (!response.error) {
          setSuccessMessage('Registration successful!');
          router.push('/login');
        } else {
          setFormErrors(response.error);
        }
      } catch (error) {
        console.error(error);
      }
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
        className="input input-bordered w-full m-1"
      />
      {errors[name] && <span className="text-red-600">{errors[name]}</span>}
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="min-h-min w-[600px] p-[24px] border-[4px] m-[auto]">
      {renderInput('username', 'Username')}
      {renderInput('email', 'Email')}
      {renderInput('password', 'Password', 'password')}
      {renderInput('confirmPassword', 'Confirm Password', 'password')}

      {formErrors && <p className="text-red-600 text-center">{formErrors}</p>}
      {successMessage && <p className="text-green-600 text-center mt-4">{successMessage}</p>}

      <div className="join w-full flex items-center justify-center mt-5 m-1">
        <button
          type="button"
          className="btn bg-[--bg-li] hover:bg-[#ffffff] border-white border-[4px] hover:border-[--bg-li] rounded-full text-[--sidebar-text] hover:text-[#000000] join-item w-[50%]"
          onClick={() => router.push('/login')}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="btn bg-[#ffffff] hover.bg-[--bg-li] border-[--bg-li] border-[4px] hover.border-[#ffffff] rounded-full text-[#000000] hover.text-[--sidebar-text] join-item w-[50%]"
        >
          Sign Up
        </button>
      </div>
    </form>
  );
}
