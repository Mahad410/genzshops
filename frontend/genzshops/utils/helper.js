import { STRAPI_TOKEN, STRAPI_URL } from '@/utils/url';
import axios from 'axios';
import {LRUCache} from 'lru-cache';
// discount logic
const cache = new LRUCache({ max: 500, maxAge: 1000 * 60 * 60 }); // Cache up to 500 items for 1 hour

export const getDiscountedPricePercentage = (
  originalPrice,
  discountedPrice
) => {
  const discount = originalPrice - discountedPrice;

  const discountPercentage = (discount / originalPrice) * 100;

  return discountPercentage.toFixed(0);
};


// api to fetch products
export const fetchProducts = async (params = '') => {
  const cacheKey = `products_${params}`;
  // Check if the data is already in the cache
  const cachedData = cache.get(cacheKey);
  if (cachedData) {
    return cachedData;
  }
  const config = {
    headers: {
      Authorization: `Bearer ${STRAPI_TOKEN}`,
    },
  };

  try {
    const response = await axios.get(`${STRAPI_URL}/api/products?populate=*&${params}`, config);
    const data = response.data;
    // Store the data in the cache
    cache.set(cacheKey, data);
    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch products');
  }
};

// api to fetch categories
export const fetchCategories = async (params = '') => {
  const cacheKey = `categories_${params}`;

  // Check if the data is already in the cache
  const cachedData = cache.get(cacheKey);
  if (cachedData) {
    return cachedData;
  }

  const config = {
    headers: {
      Authorization: `Bearer ${STRAPI_TOKEN}`,
    },
  };

  try {
    const response = await axios.get(`${STRAPI_URL}/api/categories?populate=*&${params}`, config);
    const data = response.data;

    // Store the data in the cache
    cache.set(cacheKey, data);

    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch categories');
  }
};


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