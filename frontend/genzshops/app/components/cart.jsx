'use client'
import React, { useState } from "react";
import { useAuth } from '@/utils/context';
import HighlightOffTwoToneIcon from '@mui/icons-material/HighlightOffTwoTone';
export default function cart() {
    const { cartItems, setCartItems } = useAuth();
    return (
        <>
        {
            console.log(cartItems)
        }
            <p className="font-bold text-[2.5rem] md:text-[5rem] text-[--bg-intro-text] w-full">
                Shopping Cart
            </p>
            <p className="font-bold text-[2rem] md:text-[3rem] text-[--bg-intro-text] w-full">
                Products
            </p>
            {
                cartItems.map((items, index) => {
                    <div className="flex items-center justify-between border-[2px]">
                        <div className="border-[3px] w-[100px] h-[100px]">
                            items?.thumbnail
                        </div>
                        <div className="border-[3px]">
                            items?.name
                        </div>
                        <div className="border-[3px]">
                            items?.quantity
                        </div>
                        <div className="border-[3px]">
                            items?.price
                        </div>
                        <div className="tooltip" data-tip={'delete'}>
                            <button className={`rounded-lg icon-btn`}>
                                <HighlightOffTwoToneIcon className={`icon text-[#ec5353]`} />
                            </button>
                        </div>
                    </div>
                })
            }

        </>
    )
}