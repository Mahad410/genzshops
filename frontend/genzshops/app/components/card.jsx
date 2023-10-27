import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import Favouritebtn from "@/app/components/favouritebtn";
import { getDiscountedPricePercentage } from "@/utils/helper";
export default function card({ productData: { attributes: productData, productId } }) {
  return (
    <>
      <div className="card w-full md:w-96 bg-base-100 shadow-xl">
        <figure className='w-full min-h-[250px]'>
          <Image src={productData.productThumbnail.data.attributes.url} alt={productData.productTitle} className={'cursor-pointer'} width={500} height={500} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {productData.productTitle}
            <div className="badge badge-secondary">NEW</div>
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
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
        <div className='join my-4 flex items-center justify-around'>
          <button type='button' className='btn btn-neutral w-1/3'>Add to Cart</button>
          <Link href={`/${productData.productSlug}`} className='w-1/2'>
            <button type='button' className='btn btn-neutral w-full'>
              View Product
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}


