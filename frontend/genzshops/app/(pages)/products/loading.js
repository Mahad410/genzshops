import React from 'react'
import Image from "next/image";
import testImg from "@/public/img/intro-img.webp";
import IntroSingleButton from "@/app/components/IntroSingleButton";
import Link from "next/link";

export default function loading() {
    return (
        <>
            <div className='h-screen w-full pt-[40px] bg-[--bg-intro] overflow-hidden'>
                <div className='max-w-[300px] h-[80px] bg-yellow rounded-full bg-gradient-shimmer mb-10 ml-[40px]'></div>

                <div className='categories max-h-max md:max-h-[75vh] w-full p-[40px] pt-[0] pb-[0] flex gap-[10px] flex-col sm:flex-row'>
                    <div className="col flex flex-col flex-1 gap-[10px]">
                        <div className="row flex flex-1 gap-[10px] overflow-hidden relative">
                            <div className='w-full h-[60vh] bg-yellow bg-gradient-shimmer mb-10'></div>
                        </div>
                        <div className="row flex flex-1 gap-[10px] overflow-hidden relative">
                            <div className='w-full h-full bg-yellow bg-gradient-shimmer mb-10'></div>
                        </div>
                    </div>

                    <div className="col flex flex-col flex-1 gap-[10px]">
                        <div className="row flex flex-1 gap-[10px] overflow-hidden relative">
                            <div className='w-full h-full bg-yellow bg-gradient-shimmer mb-10'></div>
                        </div>
                    </div>

                    <div className="col flex flex-col flex-1 flex-2 gap-[10px]">
                        <div className="row flex flex-1 gap-[10px] overflow-hidden">
                            <div className="col flex flex-col flex-1 gap-[10px]">
                                <div className="row flex flex-1 gap-[10px] overflow-hidden relative">
                                    <div className='w-full h-full bg-yellow bg-gradient-shimmer mb-10'></div>
                                </div>
                            </div>
                            <div className="col flex flex-col flex-1 gap-[10px]">
                                <div className="row flex flex-1 gap-[10px] overflow-hidden relative">
                                    <div className='w-full h-full bg-yellow bg-gradient-shimmer mb-10'></div>
                                </div>
                            </div>
                        </div>

                        <div className="row flex flex-1 gap-[10px] overflow-hidden relative">
                            <div className='w-full h-full bg-yellow bg-gradient-shimmer mb-10'></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}