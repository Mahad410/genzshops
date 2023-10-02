import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import Favouritebtn from "@/app/components/favouritebtn";
import { getDiscountedPricePercentage } from "@/utils/helper";
export default function card({ productData: { attributes: productData, productId } }) {
  return (
    <>
      <div className="card w-full md:w-96 bg-[--bg-sidebar] shadow-xl relative overflow-hidden">
        <Favouritebtn />
        <Link href={productData.productSlug}>
          <figure className='w-full min-h-[250px]'>
            <Image src={productData.productThumbnail.data.attributes.url} alt={productData.productTitle} className={'cursor-pointer invert-[100%]'} width={500} height={500} />
          </figure>
        </Link>
        <div className="card-body text-[--bg-intro]">
          <h2 className="card-title text-[1.8rem]">{productData.productTitle}</h2>
          <div className='w-full flex items-center justify-between'>
            <p className='text-base font-medium'>{productData.productPrice} Pkr</p>
            {productData.productOrginalPrice && (
              <div>
                <p className="text-base font-medium line-through text-red-500">
                  {productData.productOrginalPrice} Pkr
                </p>
                <p className="text-base font-medium text-green-500">
                  {getDiscountedPricePercentage(
                    productData.productOrginalPrice,
                    productData.productPrice
                  )}
                  % off
                </p>
              </div>
            )}

          </div>
        </div>
      </div>
    </>
  )
}


