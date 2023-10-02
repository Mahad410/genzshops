"use client"
// import Card from '../../components/card'{ssr:false};
// import Categories from '../../components/categories';
// import fetchProducts from '@/utils/helper';
// export default async function products() {
//   const products = await fetchProducts();
//   return (
//     <section className='pt-[20px] bg-[--bg-intro] min-h-screen'>
//       <Categories />
//       <h1 className='font-luckiest text-[3rem] md:text-[6rem] text-[--bg-intro-text] sticky top-[20px] w-full pl-[40px] pr-[40px] pt-[40px] bg-[--bg-intro] z-10'>
//         Products
//       </h1>
//       <div className='grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0'>
//         {products?.data?.map((product) => (
//           <Card productData={product} key={product?.id}/>
//         ))}
//       </div>
//     </section>
//   )
// }

"use client"
import { useEffect, useState } from 'react';
import Card from '@/app/components/card';
import Categories from '@/app/components/categories';
import fetchProducts from '@/utils/helper';
import Loading from '@/app/(pages)/products/loading'; // Make sure to import 'Loading' properly.

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const productsData = await fetchProducts();
      setProducts(productsData.data);
      setLoading(false);
    }

    // Fetch data on the client only after the initial render.
    if (products.length === 0) {
      fetchData();
    }
  }, []);

  return (
    loading ? (
      <Loading />
    ) : (
      <section className='bg-[--bg-intro] min-h-screen'>
        <Categories />
        <h1 className='font-luckiest text-[3rem] md:text-[6rem] text-[--bg-intro-text] sticky top-[20px] w-full pt-[40px] bg-[--bg-intro] z-10'>
          Products
        </h1>
        <div className='grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0'>
          {products.map((product) => (
            <Card productData={product} key={product?.id} />
          ))}
        </div>
      </section>
    )
    )
}
