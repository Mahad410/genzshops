'use client'

import React, { useState, useEffect } from 'react';
import ProductCarousel from "@/app/components/productCarousel";
import ProductActionButtons from "@/app/components/productactionbuttons";
import Card from "@/app/components/card";
import CarousalLoader from "@/app/components/carousalloader";
import fetchProducts from '@/utils/helper';
import { Suspense } from 'react';
import { ProtectedRoutes } from '@/app/components/protectedRoutes';

export default function Product(props) {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const productData = await fetchProducts(`filters[productSlug][$eq]=${props.params.slug}`);
                setProduct(productData);
            } catch (error) {
                console.error('An error occurred while fetching the product:', error);
            }
        };

        fetchProduct();
    }, [props.params.slug]);

    return (
        <ProtectedRoutes>
            <div className={'pt-[40px] pb-[40px] w-full bg-[--bg-intro] min-h-min'}>
                <section className={'flex justify-between min-h-min'}>
                    <section className={'bg-[--bg-intro] pt-[60px] w-full'}>
                        <Suspense fallback={<CarousalLoader />}>
                            <ProductCarousel />
                        </Suspense>
                    </section>
                    <section className={'bg-[--bg-intro] w-full p-[40px] pr-[40px]'}>
                        {product && (
                            <>
                                <h1 className={'font-luckiest text-[3rem] md:text-[6rem] text-[--bg-intro-text] pt-[20px]'}>
                                    {product.data[0].attributes.productTitle}
                                </h1>
                                <p className={'font-luckiest text-[3rem] text-[--bg-intro-text] bg-[--bg-intro]'}>
                                    {product.data[0].attributes.productPrice} Pkr
                                </p>
                                <p className={'text-[3.5rem] font-luckiest bg-[--bg-intro] text-[--bg-intro-text]'}>
                                    {product.data[0].attributes.productDescription}
                                </p>
                                <section className={'p-10'}>
                                    <ProductActionButtons />
                                </section>
                            </>
                        )}
                    </section>
                </section>
            </div>
        </ProtectedRoutes>
    );
}
