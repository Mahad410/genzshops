"use client";
import React, { useEffect, useState, memo } from "react";
import { fetchProducts } from "@/utils/helper";
import Loading from "@/app/(pages)/products/loading";
import Card from "@/app/components/card";
import Categories from "@/app/components/categories";

const MemoizedCard = memo(({ productData }) => (
  <Card productData={productData} key={productData?.id} />
));

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const productsData = await fetchProducts('populate=*');
      setProducts(productsData.data);
      setLoading(false);
    }

    if (products.length === 0) {
      fetchData();
    }
  }, []);

  return (
    <>
    {console.log(products)}
      {loading ? (
        <Loading />
      ) : (
        <section className="bg-[--bg-intro] min-h-screen">
          <Categories productData={products} />
          <h1 className="font-bold text-[2.5rem] md:text-[5rem] text-[--bg-intro-text] w-full pt-[30px]">
            Products
          </h1>
          <div className="m-[auto] w-full px-[0.5rem] md:px-[1rem]">
            <div className="grid grid-cols-1 gap-[1.5rem] md:grid-cols-2 xl:grid-cols-4 place-items-center">
              {products.map((product) => (
                <MemoizedCard productData={product} key={product?.id}/>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}