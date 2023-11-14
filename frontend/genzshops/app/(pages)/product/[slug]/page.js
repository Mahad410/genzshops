'use client'
import {React, memo, useState, useEffect } from 'react';
import ProductCarousel from "@/app/components/productCarousel";
import ProductActionButtons from "@/app/components/productactionbuttons";
import { fetchProducts } from '@/utils/helper';
import { ProtectedRoutes } from '@/app/components/protectedRoutes';
import { getDiscountedPricePercentage } from '@/utils/helper';
import CheckCircleOutlineTwoToneIcon from '@mui/icons-material/CheckCircleOutlineTwoTone';
import RemoveCircleOutlineTwoToneIcon from '@mui/icons-material/RemoveCircleOutlineTwoTone';
import ReactMarkdown from 'react-markdown';
import Card from '@/app/components/card';


const MemoizedCard = memo(({ productData }) => (
    <Card productData={productData} key={productData?.id} />
));

export default function Product(props) {
    const [product, setProduct] = useState(null);
    // const categories = product?.data[0]?.attributes?.productCategories?.data?.map((cat) => cat?.attributes?.name);
    const [similarProducts, setSimilarProducts] = useState([]);
    const localtoken = localStorage.getItem('token');
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const productData = await fetchProducts(`filters[productSlug][$eqi]=${props.params.slug}&populate=*`);
                setProduct(productData);
                const similarData = await fetchProducts(`filters[productTitle][$nei]=${props.params.slug}&pagination[page]=1&pagination[pageSize]=4&sort[0]=productTitle:desc&populate=*`);
                setSimilarProducts(similarData.data)
            } catch (error) {
                console.error('An error occurred while fetching the product:', error);
            }
        };
        if (product === null) {
            fetchProduct();
        }
    }, [props.params.slug, localtoken, product]);
    return (
        <ProtectedRoutes>
            <div className={'w-auto min-h-min'}>
                <section className={'flex justify-around min-h-min py-10'}>
                    <section className={'w-min h-min shadow-lg'}>
                        <ProductCarousel productData={product} />
                    </section>
                    <section className={'w-[592px]'}>
                        {product && (
                            <>
                                <h1 className={'text-[--bg-intro-text] text-[2.5rem] font-bold'}>
                                    {product?.data[0]?.attributes?.productTitle}
                                </h1>
                                <p className={'text-[--bg-intro-text] text-[2rem] font-semibold'}>
                                    {product?.data[0]?.attributes?.productPrice} Pkr
                                    {getDiscountedPricePercentage(
                                        product?.data[0]?.attributes?.productOrginalPrice,
                                        product?.data[0]?.attributes?.productPrice
                                    ) > 0 && (
                                            <span className='font-bold badge-xl rounded-full px-4 badge-success mx-5'>
                                                Save {getDiscountedPricePercentage(
                                                    product?.data[0]?.attributes?.productOrginalPrice,
                                                    product?.data[0]?.attributes?.productPrice
                                                )}%
                                            </span>
                                        )}
                                    {
                                        product?.data[0]?.attributes?.productQuantity > 0 ? (
                                            <span className='text-[1.5rem] text-[#36D399] flex items-center'>
                                                <CheckCircleOutlineTwoToneIcon className='mr-2' />
                                                In Stock
                                            </span>
                                        ) :
                                            (
                                                <span className='text-[1.2rem] text-[#ec5353] flex items-center'>
                                                    <RemoveCircleOutlineTwoToneIcon className='mr-2' />
                                                    Out of Stock
                                                </span>
                                            )
                                    }
                                </p>

                                <p className={'text-[--bg-intro-text] text-[1.3rem] whitespace-wrap my-3'}>
                                    {product?.attributes?.productDescription}
                                </p>
                                <section className={'my-2'}>
                                    <ProductActionButtons data={product?.data[0]} />
                                </section>

                                <section className={'my-2'}>
                                    <div className="collapse collapse-arrow bg-[--bg-intro-text] text-[--bg-intro] mb-4 rounded-lg">
                                        <input type="radio" name="my-accordion-2" />
                                        <div className="collapse-title text-xl capitalize font-extrabold bg-[--bg-intro-text]">
                                            features
                                        </div>
                                        <div className="collapse-content text-lg font-bold ml-5">
                                            <ReactMarkdown >
                                                {product?.data[0]?.attributes?.features}
                                            </ReactMarkdown>
                                        </div>
                                    </div>

                                    <div className="collapse collapse-arrow bg-[--bg-intro-text] text-[--bg-intro] mb-4 rounded-lg">
                                        <input type="radio" name="my-accordion-2" />
                                        <div className="collapse-title text-xl capitalize font-extrabold bg-[--bg-intro-text]">
                                            Care
                                        </div>
                                        <div className="collapse-content text-lg font-bold ml-5">
                                            <ReactMarkdown >
                                                {product?.data[0]?.attributes?.care}
                                            </ReactMarkdown>
                                        </div>
                                    </div>

                                    <div className="collapse collapse-arrow bg-[--bg-intro-text] text-[--bg-intro] mb-4 rounded-lg">
                                        <input type="radio" name="my-accordion-2" />
                                        <div className="collapse-title text-xl capitalize font-extrabold bg-[--bg-intro-text]">
                                            Return
                                        </div>
                                        <div className="collapse-content text-lg font-bold ml-5">
                                            <ReactMarkdown >
                                                {product?.data[0]?.attributes?.return}
                                            </ReactMarkdown>
                                        </div>
                                    </div>
                                </section>
                            </>
                        )}
                    </section>
                </section>

                <section className={'bg-[--bg-intro] w-full h-max'}>
                    <h1 className={'font-bold text-[2.5rem] md:text-[5rem] text-[--bg-intro-text] w-full'}>
                        Similar&nbsp;Products
                    </h1>
                    <div className={'pl-[40px] pr-[40px] flex justify-center items-center flex-col overflow-hidden'}>
                        <div className="m-[auto] w-full pl-[0.5rem] pr-[0.5rem] md:pl-[1rem] md:pr-[1rem]">
                            <div className="grid grid-cols-1 gap-[1.5rem] md:grid-cols-2 xl:grid-cols-4 place-items-center">
                                {similarProducts?.map((product) => (
                                    <MemoizedCard productData={product} key={product?.id} />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </ProtectedRoutes>
    );
}