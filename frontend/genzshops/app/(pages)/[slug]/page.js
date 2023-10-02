import React from 'react'
import ProductCarousel from "@/app/components/productCarousel";
import Productactionbuttons from "@/app/components/productactionbuttons";
import Card from "@/app/components/card";
import Carousalloader from "@/app/components/carousalloader";
import fetchProducts from '@/utils/helper';
import { Suspense } from 'react';
export default async function Product(props) {
    const product = await fetchProducts(`filters[productSlug][$eq]=${props.params.slug}`);
    return (
        <>
            <div className={'pt-[40px] pb-[40px] w-full bg-[--bg-intro] min-h-min'}>
                <section className={'flex justify-between min-h-min'}>
                    <section className={'bg-[--bg-intro] pt-[60px] w-full'}>
                        <Suspense fallback={<Carousalloader />}>
                            <ProductCarousel />
                        </Suspense>
                    </section>
                    <section className={'bg-[--bg-intro] w-full p-[40px] pr-[40px]'}>
                        <h1 className={'font-luckiest text-[3rem] md:text-[6rem] text-[--bg-intro-text] pt-[20px]'}>
                            {product.data[0].attributes.productName}
                        </h1>
                        <p className={'font-luckiest text-[3rem] text-[--bg-intro-text] bg-[--bg-intro]'}>
                            {product.data[0].attributes.productPrice} Pkr
                        </p>
                        <p className={'text-[3.5rem] font-luckiest bg-[--bg-intro] text-[--bg-intro-text]'}>
                            {product.data[0].attributes.productDescription}
                        </p>
                        <section className={'p-10'}>
                            <Productactionbuttons />
                        </section>
                    </section>

                </section>
            </div>
        </>

    )
}

export async function getStaticParams() {
    const products = await fetchProducts();
    return {
        paths: products.data.map((product) => ({
            params: {
                slug: product.attributes.productSlug,
            },
        })),
        fallback: false,
    };
}