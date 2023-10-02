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