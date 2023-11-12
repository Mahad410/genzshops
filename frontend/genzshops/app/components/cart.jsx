'use client'
import React, { useState } from "react";
import { useAuth } from '@/utils/context';
import HighlightOffTwoToneIcon from '@mui/icons-material/HighlightOffTwoTone';
import Image from "next/image";
import Link from "next/link";
import { ProtectedRoutes } from "./protectedRoutes";
export default function cart() {
    const { cartItems, setCartItems } = useAuth();
    return (
        <>
            <ProtectedRoutes>
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
                                <div className="flex items-center justify-between border-2 p-4 mb-2">
                                    <div className="w-11 mx-4">
                                        <p className="text-lg font-bold">{`No`}</p>
                                    </div>
                                    <div className="w-24 mx-4 cart">
                                        <p className="text-lg font-bold text-center">
                                            {'Image'}
                                        </p>
                                    </div>
                                    <div className=" w-max flex-grow mx-4">
                                        <h2 className="text-lg font-bold">{'Name'}</h2>
                                    </div>
                                    <div className="w-11 mx-4">
                                        <p className="text-lg font-bold">{'Price'}</p>
                                    </div>
                                    <div className="w-11 mx-4">
                                        <p className="text-lg font-bold">{'Qty'}</p>
                                    </div>
                                    <div className="w-11 mx-4 mr-4">
                                        <p className="text-lg font-bold">{`Total`}</p>
                                    </div>
                                    <div className="w-11 mx-2">
                                        <p className="text-lg font-bold">{`Del`}</p>
                                    </div>
                                </div>
                                {cartItems.map((item, index) => (
                                    <div key={index} className="flex items-center justify-between border-2 p-4 mb-2">
                                        <div className="w-11 mx-4">
                                            <p className="text-lg font-bold">{index + 1}</p>
                                        </div>
                                        <div className="w-24 mx-4 cart">
                                            <Image src={item.thumbnail} width={96} height={96} alt={item.name} />
                                        </div>
                                        <div className=" w-max flex-grow mx-4">
                                            <h2 className="text-lg font-bold">{item.name}</h2>
                                            <p className="text-sm">{item.size}</p>
                                        </div>
                                        <div className="w-11 mx-4">
                                            <p className="text-lg font-bold text-center">{item.price}</p>
                                        </div>
                                        <div className="w-11 mx-4">
                                            <p className="text-lg font-bold text-center">{item.quantity}</p>
                                        </div>
                                        <div className="w-11 mx-4">
                                            <p className="text-lg font-bold text-center">{`${item.price * item.quantity}`}</p>
                                        </div>
                                        <div className="tooltip " data-tip={'delete'}>
                                            <button className={`rounded-lg icon-btn w-11 mr-4`}>
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
            </ProtectedRoutes>
        </>
    )
}