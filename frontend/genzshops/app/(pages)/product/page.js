import React from 'react'
import ProductCarousel from "@/app/components/productCarousel";
import Productactionbuttons from "@/app/components/productactionbuttons";
import Card from "@/app/components/card";
import ArrowOutwardTwoToneIcon from '@mui/icons-material/ArrowOutwardTwoTone';
import Carousalloader from "@/app/components/carousalloader";
import ProtectedRoutes from "@/app/components/protectedRoutes";
import { Suspense } from 'react';

export default function Product() {
    return (
        <ProtectedRoutes>
        <div className={'pt-[40px] pb-[40px] w-full bg-[--bg-intro] min-h-min'}>
            <section className={'flex justify-between min-h-min md:block'}>
                <section className={'bg-[--bg-intro] pt-[60px] w-[550px]'}>
                    <Suspense fallback={<Carousalloader/>}>
                    <ProductCarousel />
                    </Suspense>
                </section>
                <section className={'bg-[--bg-intro] w-full p-[40px] pr-[40px]'}>
                    <h1 className={'font-luckiest text-[3rem] md:text-[6rem] text-[--bg-intro-text] pt-[20px]'}>
                        Product&nbsp;Name
                    </h1>
                    <p className={'font-luckiest text-[3rem] text-[--bg-intro-text] bg-[--bg-intro]'}>
                        $15.00
                    </p>
                    <p className={'text-[3.5rem] font-luckiest bg-[--bg-intro] text-[--bg-intro-text]'}>
                        Description
                    </p>
                    <p className={'font-bold'}>
                        lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget ultricies
                        aliquam, nisl nisl lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl
                        eget ultricies
                        aliquam, nisl nisl lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl
                        eget ultricies
                        aliquam, nisl nisl lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl
                        eget ultricies
                        aliquam, nisl nisl lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl
                        eget ultricies
                        aliquam, nisl nisl lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl
                        eget ultricies
                        aliquam, nisl nisl lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl
                        eget ultricies
                        aliquam, nisl nisl
                    </p>
                    <section className={'p-10'}>
                        <Productactionbuttons />
                    </section>
                </section>

            </section>

            <section className={'bg-[--bg-intro] w-full h-max'}>
                <h1 className={'font-luckiest text-[3rem] md:text-[6rem] text-[--bg-intro-text] sticky top-[60px] z-10 bg-[--bg-intro] pt-[20px] pl-[40px]'}>
                    Similar&nbsp;Products
                </h1>
                <div className={'pl-[40px] pr-[40px] flex justify-center items-center flex-col overflow-hidden'}>
                    <section className={'flex flex-wrap gap-9 justify-center items-center ]'}>
                        <Card /> <Card /> <Card /> <Card />
                    </section>
                    <button
                        className={'pl-[24px] pr-[24px] p-[12px] flex justify-center items-center mt-[24px] bg-[--bg-intro] text-[--bg-intro-text] btn-product font-bold border-[4px] border-[--bg-intro-text] hover:bg-[--bg-intro-text] hover:text-[--bg-intro] transition-all duration-300'}>
                        View More
                        {/* <ArrowOutwardTwoToneIcon className={'icon text-[2rem]'} /> */}
                    </button>
                </div>
            </section>
        </div>
        </ProtectedRoutes>

    )
}
