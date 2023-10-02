'use client'
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';
import ShoppingBagTwoToneIcon from "@mui/icons-material/ShoppingBagTwoTone";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import React from "react";

export default function Productactionbuttons() {
    return (
        <>
            <div className={'flex justify-between items-center w-[50%] mb-[8px]'}>
                <div
                    className="flex flex-row items-center justify-evenly w-min bg-[--bg-intro-text] p-[8px] rounded-full h-min border-[4px]">
                    <button className={'hover:bg-[--bg-intro] rounded-full p-[8px] icon-btn'}>
                        <RemoveCircleOutlineRoundedIcon className={'text-[--bg-intro] icon w-[40px] h-[40px]'}/>
                    </button>
                    <p className={'text-[--bg-intro] font-bold text-[1.5rem] pl-[8px] pr-[8px]'}>
                        1
                    </p>
                    <button className={'hover:bg-[--bg-intro] rounded-full p-[8px]  icon-btn'}>
                        <AddCircleOutlineRoundedIcon className={'text-[--bg-intro] icon w-[40px] h-[40px]'}/>
                    </button>
                </div>
                <button
                    className={'bg-[--bg-intro-text] text-[--bg-intro] font-bold rounded-full w-[70%] h-min p-[12px] flex justify-center items-center border-[4px] btn-product'}>
                    <p className={'text-[1.5rem] font-bold'}>
                        Add to cart
                    </p>
                    <ShoppingBagTwoToneIcon className={'text-[3rem] ml-[8px] icon'}/>
                </button>
            </div>
            <div className={'w-[50%] mb-[8px]'}>
                <button
                    className={'bg-[--bg-intro-text] text-[--bg-intro] font-bold rounded-full h-min p-[12px] flex justify-center items-center w-full border-[4px] btn-product'}>
                    <p className={'text-[1.5rem] font-bold'}>
                        Add to Wishlist
                    </p>
                    <FavoriteTwoToneIcon className={'text-[3rem] ml-[8px] icon'}/>
                </button>
            </div>
        </>
    )
}