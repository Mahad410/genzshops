import { STRAPI_TOKEN, STRAPI_URL } from '@/utils/url';


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
    headers:{
      Authorization: `Bearer ${STRAPI_TOKEN}`,
    },
    method:'GET',
   }
    const res = await fetch(`${STRAPI_URL}/api/products?populate=*&${params}`, reqOptions);
    const data = await res.json();
    return data;
  };  
export default fetchProducts;

// export const RegisterUser = async (data) => {
//   const reqOptions = { 
//     headers:{
//       Authorization: `Bearer ${STRAPI_TOKEN}`,
//     },
//     method:'POST',
//     body: JSON.stringify(data)
//    }
//     const res = await fetch(`${STRAPI_URL}/api/users`, reqOptions);
//     const dataRes = await res.json();
//     return dataRes;
//   };



import axios from 'axios';

export const registerUser = async (userData) => {
  try {
    const response = await axios.post('http://localhost:1337/api/auth/local/register', userData);

    // Registration successful, handle the response.
    console.log('Registration successful!');
    console.log('User profile', response.data.user);
    console.log('User token', response.data.jwt);

    return response.data; // You can return the user data or do something else with it.
  } catch (error) {
    // Registration failed, handle the error.
    if (error.response) {
      // The request was made and the server responded with an error.
      console.error('An error occurred:', error.response.data);
      return { error: error.response.data };
    } else if (error.request) {
      // The request was made but no response was received.
      console.error('No response received from the server.');
      return { error: 'No response received from the server.' };
    } else {
      // Something else happened while setting up the request.
      console.error('Request failed:', error.message);
      return { error: error.message };
    }
  }
};


export const loginUser = async (loginData) => {
  try {
    const response = await axios.post('http://localhost:1337/api/auth/local', loginData);

    // Login successful, handle the response.
    console.log('Login successful!');
    console.log('User profile', response.data.user);
    console.log('User token', response.data.jwt);

    return response.data; // You can return the user data or do something else with it.
  } catch (error) {
    // Login failed, handle the error.
    if (error.response) {
      // The request was made and the server responded with an error.
      console.error('An error occurred:', error.response.data);
      return { error: error.response.data };
    } else if (error.request) {
      // The request was made but no response was received.
      console.error('No response received from the server.');
      return { error: 'No response received from the server.' };
    } else {
      // Something else happened while setting up the request.
      console.error('Request failed:', error.message);
      return { error: error.message };
    }
  }
};