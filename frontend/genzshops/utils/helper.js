import jwt from 'jsonwebtoken';
import { STRAPI_TOKEN, STRAPI_URL } from '@/utils/url';
import axios from 'axios';
import { headers } from '@/next.config';
// discount logic
export const getDiscountedPricePercentage = (
  originalPrice,
  discountedPrice
) => {
  const discount = originalPrice - discountedPrice;

  const discountPercentage = (discount / originalPrice) * 100;

  return discountPercentage.toFixed(2);
};

// api to fetch products
const fetchProducts = async (params) => {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${STRAPI_TOKEN}`,
    },
    method: 'GET',
  }
  const res = await fetch(`${STRAPI_URL}/api/products?populate=*&${params}`, reqOptions);
  const data = await res.json();
  return data;
};
export default fetchProducts;

export const registerUser = async (userData) => {
  try {
    const response = await axios.post('http://localhost:1337/api/auth/local/register', userData);
    const { user, jwt } = response.data;
    return response.data;
  } catch (error) {
    if (error.response.data.error && error.response.data.error.status === 400) {
      const validationErrors = error.response.data.error.message;
      return { error: validationErrors };
    } else {
      return { error: error.response.data.error.message };
    }
  }
};

//login api
export const loginUser = async (loginData, setToken) => {
  try {
    const response = await axios.post('http://localhost:1337/api/auth/local', loginData);
    setToken(response.data.jwt);
    localStorage.setItem('token', response.data.jwt);
    return response.data;
  } catch (error) {
    if (error.response.data.error && error.response.data.error.status === 400) {
      const validationErrors = error.response.data.error.message;
      return { error: validationErrors };
    } else {
      return { error: error.response.data.error.message };
    }
  }
};

// fetchprofile api
// export const fetchProfile = async (token) => {
//   try {
//     const response = await axios.get('http://localhost:1337/api/users', {
//       headers: {
//         Authorization: `Bearer ${token}`, // Include the user's token for authentication
//       },
//     });
    
//     if (response.status === 200) {
//       // Return the user's profile data from the response.
//       return response.data;
//     } else {
//       // Handle other status codes or errors as needed.
//       throw new Error('Failed to fetch user profile');
//     }
//   } catch (error) {
//     // Handle any unexpected errors that might occur during the request.
//     console.error('An error occurred while fetching user profile:', error);
//     throw error;
//   }
// };


export const checkAuthentication = (token) => {
 return !!token
};

export const getUser = async (token) => {
  try {
    const response = await axios.get(`${STRAPI_URL}/api/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const userData = response.data;
    return userData; // Returning the user data in case you want to use it further
  } catch (error) {
    console.error('Error', error);
    throw error; // Re-throw the error so you can handle it at a higher level if needed
  }
};

export const updateUser = async (token, userData)=>{
  try{
const response = await axios.post(`${STRAPI_URL}/api/users/me`,userData,{
  headers:{
    Authorization: `Bearer ${token}`,
  }
})
return response.data
  }
  catch(error){
    console.error('Error updating user:', error);
    throw error; // Re-throw the error for the calling code to handle.
  }
}