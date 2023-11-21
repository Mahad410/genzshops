'use client'
import React,{useState} from 'react'
import Image from 'next/image'
import Link from 'next/link';
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import { getDiscountedPricePercentage } from "@/utils/helper";
import secureLocalStorage from 'react-secure-storage';
export default function card({ productData: { attributes: productData } }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <>
      <div className="card w-full md:w-96 bg-base-100 shadow-xl">
        <figure className='w-full min-h-[250px]'>
          <Image src={productData.productThumbnail.data.attributes.url} alt={productData.productTitle} className={'cursor-pointer'} width={500} height={500} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {productData.productTitle}
            {
              productData.new && <div className="badge badge-secondary">{'New'}</div>
            }
          </h2>
          <p>
            {productData.productPrice} Pkr
            {getDiscountedPricePercentage(
              productData.productOrginalPrice,
              productData.productPrice
            ) > 0 && (
                <span className='badge badge-success ml-2'>
                  {getDiscountedPricePercentage(
                    productData.productOrginalPrice,
                    productData.productPrice
                  )}% Off
                </span>
              )}
          </p>
          <div className="card-actions justify-end">
            {
              productData?.productCategories?.data?.map((category) => (
                <div key={category?.id} className="badge badge-outline">{category?.attributes?.name}</div>
              ))
            }
          </div>
        </div>
        <div className='join my-4 flex items-center justify-around'>
          
           <Link href={`/product/${productData?.productSlug}`} scroll={false} className='w-[80%]'>
            <button type='button' className='btn btn-neutral w-full' onClick={()=>{secureLocalStorage.setItem('redirectUrl',productData.productSlug)}}>
              View Product
            </button>
          </Link>
          <div className="flex flex-row items-center justify-evenly w-min p-[4px] rounded-lg h-min btn btn-neutral">
            <button className={`${!isFavorite ? 'hover:bg-[#ec5353]' : 'hover:bg-[--bg-intro]'} rounded-lg p-[8px] icon-btn`} onClick={handleToggleFavorite}>
              <FavoriteTwoToneIcon className={`icon w-[20px] h-[20px] ${isFavorite ? 'text-[#ec5353]' : 'text-[--bg-intro]'}`} />
            </button>
          </div>
         
        </div>
      </div>
    </>
  )
}


