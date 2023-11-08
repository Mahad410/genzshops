'use client'
import { useState } from "react";
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';
import LocalMallTwoToneIcon from '@mui/icons-material/LocalMallTwoTone';
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import React from "react";
import {useAuth} from '@/utils/context'

export default function Productactionbuttons({ data }) {
    const [isFavorite, setIsFavorite] = useState(false);
    let stock = data?.attributes?.productQuantity;
    let disable = stock.stock <= 0;
    let sizes = data?.attributes?.productSize?.sizes;
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);
    const { cartItems, setCartItems } = useAuth();
    const handleSizeChange = (size) => {
        setSelectedSize(size);
    };

    const handleAddToCart = () => {
        if (selectedSize) {
          const newItem = {
            id: data?.id,
            name: data?.attributes?.productTitle,
            size: selectedSize,
            price: data?.attributes?.productPrice,
            quantity: quantity,
            thumbnail: data?.attributes?.productThumbnail?.data?.attributes?.url,
          };
          const existingItemIndex = cartItems.findIndex((item) => item.id === newItem.id);
          if (existingItemIndex !== -1) {
            const updatedCartItems = [...cartItems];
            updatedCartItems[existingItemIndex].quantity += quantity;
            setCartItems(updatedCartItems);
          } else {
            setCartItems([...cartItems, newItem]);
          }
          setSelectedSize('');
          setQuantity(1);
        }
      };

    const handleIncrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleToggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };
    return (
        <>
        {console.log(data)}
        {console.log('cartItems',cartItems)}
            <div className="my-3">
                <h3 className="my-2 text-[1.5rem] font-bold">Select a Size:</h3>
                <div className="flex items-center justify-around w-full border-black border-[4px] h-[72px] rounded-lg p-1">
                    {sizes.map((item, index) => (
                        <div key={index} className="mx-2">
                            <input
                                type="radio"
                                id={item.size}
                                name="size"
                                value={item.size}
                                checked={selectedSize === item.size}
                                onChange={() => handleSizeChange(item.size)}
                                disabled={!item.enabled}
                                className="hidden"
                            />
                            <label htmlFor={item.size} className={`border-[4px] rounded-lg flex items-center justify-center w-[50px] h-[50px] uppercase ${selectedSize === item.size ? 'bg-black text-white hover:bg-black' : 'bg-white text-black hover:bg-slate-300'} ${!item.enabled ? 'cursor-not-allowed hover:bg-white opacity-50 bg-[white]' : 'cursor-pointer'} `}>{item.size}</label>
                        </div>
                    ))}
                </div>



            </div>

            <div className={'flex items-center mb-[8px]'}>

                <div
                    className={`flex flex-row items-center justify-evenly w-full bg-[--bg-intro-text] p-[8px] rounded-lg h-min ${disable ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                >
                    <button className={`hover:bg-[--bg-intro] rounded-lg p-[8px] icon-btn disabled:opacity-50 disabled:cursor-not-allowed`} disabled={disable} onClick={handleDecrementQuantity}>
                        <RemoveCircleOutlineRoundedIcon className={'text-[--bg-intro] icon w-[40px] h-[40px]'} />
                    </button>
                    <p className={`text-[--bg-intro] font-bold text-[1.5rem] pl-[8px] pr-[8px] ${disable ? 'text-[grey]' : ''}`}>
                        {quantity}
                    </p>
                    <button className={'hover:bg-[--bg-intro] rounded-lg p-[8px]  icon-btn disabled:opacity-50 disabled:cursor-not-allowed'} disabled={disable} onClick={handleIncrementQuantity}>
                        <AddCircleOutlineRoundedIcon className={'text-[--bg-intro] icon w-[40px] h-[40px]'} />
                    </button>
                </div>
                <div className="tooltip tooltip-right" data-tip={isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}>
                    <div className="flex flex-row items-center justify-evenly w-min bg-[--bg-intro-text] p-[8px] rounded-lg h-min ml-2">
                        <button className={`${!isFavorite ? 'hover:bg-[#ec5353]' : 'hover:bg-[--bg-intro]'} rounded-lg p-[8px] icon-btn`} onClick={handleToggleFavorite}>
                            <FavoriteTwoToneIcon className={`icon w-[40px] h-[40px] ${isFavorite ? 'text-[#ec5353]' : 'text-[--bg-intro]'}`} />
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between">
            <div className={'my-3 p-1 rounded-lg bg-[--bg-intro-text] w-[40%]'}>
                <button
                    type={'button'}
                    className={`bg-[--bg-intro-text] hover:bg-[--bg-intro] text-[--bg-intro] hover:text-[--bg-intro-text] font-bold rounded-lg h-min p-[12px] flex justify-center items-center btn-product w-full disabled:opacity-50 disabled:cursor-not-allowed`}
                    disabled={disable}
                    onClick={handleAddToCart}
                >
                    <p className={'text-[1.5rem] font-bold'}>
                        Add to Cart
                    </p>
                    <LocalMallTwoToneIcon className={'text-[3rem] ml-[8px] w-[35px] h-[35px]'} />
                </button>
            </div>

            <div className={'my-3 p-1 rounded-lg bg-[--bg-intro-text] w-[58.5%]'}>
                <button
                    type={'button'}
                    className={`bg-[--bg-intro-text] hover:bg-[--bg-intro] text-[--bg-intro] hover:text-[--bg-intro-text] font-bold rounded-lg h-min p-[12px] flex justify-center items-center btn-product w-full disabled:opacity-50 disabled:cursor-not-allowed`}
                    disabled={disable}
                >
                    <p className={'text-[1.5rem] font-bold'}>
                        Buy Now
                    </p>
                    
                </button>
            </div>
            </div>
        </>
    )
}