'use client'
import React, { useState } from "react";
import { useAuth } from '@/utils/context';
import HighlightOffTwoToneIcon from '@mui/icons-material/HighlightOffTwoTone';
import Image from "next/image";
import Link from "next/link";
export default function cart() {
    const { cartItems, setCartItems } = useAuth();
    return (
        <>
            <p className="font-bold text-[2.5rem] md:text-[5rem] text-[--bg-intro-text] w-full relative">
                Shopping Cart
            </p>

            <div className="flex flex-col items-center justify-center">

                {cartItems.length > 0 ? (
                    <>
                        <p className="font-bold text-[2rem] md:text-[3rem] text-[--bg-intro-text] w-full">
                            Products
                        </p>
                        <div className="w-full">
                            {cartItems.map((item, index) => (
                                <div key={index} className="flex items-center justify-between border-2 p-2 mb-2">
                                    <div className="border-3 w-24 h-24 mr-4 cart">
                                        <Image src={item.thumbnail} width={96} height={96} alt={item.name}/>
                                    </div>
                                    <div className="border-3 flex-grow mr-4">
                                        <h2 className="text-lg font-bold">{item.name}</h2>
                                        <p className="text-sm">{item.size}</p>
                                    </div>
                                    <div className="border-3 w-24 mr-4">
                                        <p className="text-lg font-bold">{item.quantity}</p>
                                    </div>
                                    <div className="border-3 w-24 mr-4">
                                        <p className="text-lg font-bold">{item.price}</p>
                                    </div>
                                    <div className="tooltip" data-tip={'delete'}>
                                        <button className={`rounded-lg icon-btn`}>
                                            <HighlightOffTwoToneIcon className={`icon text-[#ec5353]`} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                        <p className="font-bold text-[2rem] md:text-[3rem] text-[--bg-intro-text] w-full text-center">Your cart is empty.</p>
                        <Link href="/products">
                            <button type="button" className="btn btn-neutral btn-lg w-full my-5">
                                Go to Shopping
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </>
    )
}