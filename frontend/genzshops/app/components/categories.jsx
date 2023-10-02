import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import IntroSingleButton from './IntroSingleButton'
export default function categories() {
    return (
        <>
         <h1 className='font-luckiest text-[3rem] md:text-[6rem] text-[--bg-intro-text] w-full bg-[--bg-intro] z-10'>
                    Categories
                </h1>
            <div className='categories max-h-max md:max-h-[75vh] w-full p-[40px] pt-[0] pb-[0] flex gap-[10px] flex-col sm:flex-row'>               
                <div className="col flex flex-col flex-1 gap-[10px]">
                    <div className="row flex flex-1 gap-[10px] overflow-hidden relative">
                        <Image src="/img/intro-img.webp" alt="GenZ Cart" objectFit="cover" sizes={'100%'} width={300} height={300} />
                        <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                        <IntroSingleButton text={'Women'}/>
                        </div>
                    </div>
                    <div className="row flex flex-1 gap-[10px] overflow-hidden relative">
                        <Image src="/img/intro-img.webp" alt="GenZ Cart" objectFit="cover" sizes={'100%'}  width={300} height={300} />
                        <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                        <IntroSingleButton text={'Women'}/>
                        </div>
                    </div>
                </div>

                <div className="col flex flex-col flex-1 gap-[10px]">
                    <div className="row flex flex-1 gap-[10px] overflow-hidden relative">
                        <Image src="/img/intro-img.webp" alt="GenZ Cart" objectFit="cover" sizes={'100%'}  width={300} height={300} />
                        <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                        <IntroSingleButton text={'Women'}/>
                        </div>
                    </div>
                </div>
                <div className="col flex flex-col flex-1 flex-2 gap-[10px]">
                    <div className="row flex flex-1 gap-[10px] overflow-hidden">
                        <div className="col flex flex-col flex-1 gap-[10px]">
                            <div className="row flex flex-1 gap-[10px] overflow-hidden relative">
                                <Image src="/img/intro-img.webp" alt="GenZ Cart" objectFit="cover" sizes={'100%'} width={300} height={300} />
                                <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                        <IntroSingleButton text={'Women'}/>
                        </div>
                            </div>
                        </div>
                        <div className="col flex flex-col flex-1 gap-[10px]">
                            <div className="row flex flex-1 gap-[10px] overflow-hidden relative">
                                <Image src="/img/intro-img.webp" alt="GenZ Cart" objectFit="cover" sizes={'100%'}  width={300} height={300} />
                                <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                        <IntroSingleButton text={'Women'}/>
                        </div>
                            </div>
                        </div>
                    </div>

                    <div className="row flex flex-1 gap-[10px] overflow-hidden relative">
                        <Image src="/img/intro-img.webp" alt="GenZ Cart" objectFit="cover" sizes={'100%'}  width={300} height={300} />
                        <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                        <IntroSingleButton text={'Women'}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

