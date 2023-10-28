'use client'

import React, { useState, useEffect } from 'react';
import ProductCarousel from "@/app/components/productCarousel";
import ProductActionButtons from "@/app/components/productactionbuttons";
import Card from "@/app/components/card";
import CarousalLoader from "@/app/components/carousalloader";
import {fetchProducts} from '@/utils/helper';
import { Suspense } from 'react';
import { ProtectedRoutes } from '@/app/components/protectedRoutes';
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone';
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';
import { getDiscountedPricePercentage } from '@/utils/helper';

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
            <div className={'w-full min-h-min'}>
                <section className={'flex justify-between min-h-min py-10'}>
                    <section className={'w-full'}>
                        <ProductCarousel productData={product} />
                    </section>
                    <section className={'w-full'}>
                        {product && (
                            <>
                                <h1 className={'text-[--bg-intro-text] text-[2.5rem] font-bold'}>
                                    {product?.data[0]?.attributes?.productTitle}
                                </h1>
                                <p className={'text-[--bg-intro-text] text-[2rem] font-semibold'}>
                                    {product?.data[0]?.attributes?.productPrice} Pkr
                                    {getDiscountedPricePercentage(
                                        product?.data[0]?.attributes?.productOrginalPrice,
                                        product?.data[0]?.attributes?.productPrice
                                    ) > 0 && (
                                            <span className='font-bold badge-xl rounded-full px-4 badge-success mx-5'>
                                                Save {getDiscountedPricePercentage(
                                                    product?.data[0]?.attributes?.productOrginalPrice,
                                                    product?.data[0]?.attributes?.productPrice
                                                )}%
                                            </span>
                                        )}
                                </p>
                                <p className={'text-[--bg-intro-text] text-[1.5rem]'}>
                                    {product.data[0].attributes.productDescription}
                                </p>
                                <section className={''}>
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
