"use client";
import React, { useEffect, useState } from "react";
import fetchProducts from "@/utils/helper";
import Loading from "@/app/(pages)/products/loading"; // Make sure to import 'Loading' properly.
import { ProtectedRoutes } from "@/app/components/protectedRoutes";
import Card from "@/app/components/card";
import Categories from "@/app/components/categories";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const productsData = await fetchProducts();
      setProducts(productsData.data);
      setLoading(false);
    }

    if (products.length === 0) {
      fetchData();
    }
  }, []);

  return (
    <ProtectedRoutes>
      {loading ? (
        <Loading />
      ) : (
        <section className="bg-[--bg-intro] min-h-screen">
          <Categories />
          <h1 className="font-luckiest text-[3rem] md:text-[6rem] text-[--bg-intro-text] sticky top-[20px] w-full pt-[40px] bg-[--bg-intro] z-10">
            Products
          </h1>

          <div className="m-[auto] w-full pl-[0.5rem] pr-[0.5rem] md:pl-[1rem] md:pr-[1rem]">
          <div className="grid grid-cols-1 gap-[1.5rem] md:grid-cols-2 xl:grid-cols-4 place-items-center">
            {products.map((product) => (
              <Card productData={product} key={product?.id} />
            ))}
          </div>
          </div>
        </section>
      )}
    </ProtectedRoutes>
  );
}
