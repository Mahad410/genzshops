import { useState, useEffect, memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { fetchCategories } from '@/utils/helper';

const IntroSingleButton = memo(({ category }) => (
  <div className='row flex flex-1 gap-[10px] overflow-hidden relative'>
    <Image
      src={category?.attributes?.image?.data?.attributes?.url}
      alt={category?.attributes?.name}
      objectFit='cover'
      sizes={'100%'}
      width={300}
      height={300}
    />
    <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
      <Link href=''>
        <button
          type='button'
          className='btn bg-[#ffffff] hover:bg-[--bg-li] border-[4px] border-[#000000] hover:border-[#ffffff]  font-bold text-[#000000] hover:text-[--sidebar-text] mt-[30px] h-min'
        >
          {category?.attributes?.name}
        </button>
      </Link>
    </div>
  </div>
));

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const categoriesData = await fetchCategories();
      setCategories(categoriesData.data);
    }
    if (categories.length === 0) {
      fetchData();
    }
  }, [categories]);

  return (
    <>
      <h1 className='font-luckiest text-[3rem] md:text-[6rem] text-[--bg-intro-text] w-full bg-[--bg-intro] z-10'>
        Categories
      </h1>
      <div className='categories max-h-max md:max-h-[75vh] w-full p-[40px] pt-[0] pb-[0] flex gap-[10px] flex-col sm:flex-row'>
        <div className='col flex flex-col flex-1 gap-[10px]'>
          {categories.slice(0, 2).map((category) => (
            <IntroSingleButton key={category.id} category={category} />
          ))}
        </div>
        <div className='col flex flex-col flex-1 gap-[10px]'>
          {categories.slice(2, 4).map((category) => (
            <IntroSingleButton key={category.id} category={category} />
          ))}
        </div>
        <div className='col flex flex-col flex-1 gap-[10px]'>
          {categories.slice(6, 7).map((category) => (
            <IntroSingleButton key={category.id} category={category} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Categories;