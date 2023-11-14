'use client'
import { useEffect, useState, memo } from 'react';
import { fetchProducts } from '@/utils/helper';
import Card from '@/app/components/card';

const MemoizedCard = memo(({ productData }) => (
    <Card productData={productData} key={productData?.id} />
  ));
  
export default function Products(props) {
const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const productData = await fetchProducts(`filters[productCategories][name][$eq]=${props.params.slug}&populate=*`);
                setProduct(productData.data);
            } catch (error) {
                console.error('An error occurred while fetching the product:', error);
            }
        };
        if (product.length === 0) {
            fetchProduct();
          }
    }, [props.params.slug, product]);
    return (
        <>
    <h1 className='font-bold text-[2.5rem] md:text-[5rem] text-[--bg-intro-text] w-full py-[30px]'>
        {props.params.slug} Products
    </h1>
    {
        product.length === 0 ? (
<h1 className="font-bold text-[2rem] md:text-[3rem] text-[--bg-intro-text] w-full text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
    No products found 😓
</h1>
        ):(
             <div className="m-[auto] w-full px-[0.5rem] md:px-[1rem]">
            <div className="grid grid-cols-1 gap-[1.5rem] md:grid-cols-2 xl:grid-cols-4 place-items-center">
              {product?.map((products) => (
                <MemoizedCard productData={products} key={products?.id}/>
              ))}
            </div>
          </div>
        )
    }
   
    </>
)
}