'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import './globals.css'
import Footer from './components/footer';
import Loading from './loader';
import IntroSingleButton from './components/IntroSingleButton';
import Faq from './components/faq'
import Link from 'next/link';
import { useRouter } from 'next/navigation'
export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!loading) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [loading]);

  const handleImageLoad = () => {
    setLoading(false);
  };
  const router = useRouter();
  const toProducts= () => {
router.push('/products');
}
  return (
    <main className="h-screen w-full hide-scrollbar box-border">
      <div className='relative'>
        {loading && (<div className='fixed z-30 left-0 right-0 top-0'><Loading /></div>)}
        {/* hero section */}
        <section className="h-screen bg-[--bg-intro] w-full">
          <div className='min-h-screen relative'>
            <div className='glitch'>
              <h1 className='text-[3.7rem] md:text-[8rem] xl:text-[14rem] font-luckiest text-[--bg-intro-text]'>G3NZSH0P&apos;S</h1>
              <span className='text-[3.7rem] md:text-[8rem] xl:text-[14rem] font-luckiest text-[--bg-intro-text]'>G3NZSH0P&apos;S</span>
              <h1 className='text-[3.7rem] md:text-[8rem] xl:text-[14rem] font-luckiest text-[--bg-intro-text]'>G3NZSH0P&apos;S</h1>
            </div>
            <div className='m-[auto] text-sm xl:text-xl font-semibold xl:font-bold leading-loose absolute  bottom-[17%] md:bottom-[18%] left-[50%] translate-x-[-50%] h-min w-[85%] md:w-[70%] lg:w-[80%]'>
              <p>
                Genz Shops brings you the latest and coolest products in an eCommerce store with the most remarkable UI and color scheme! Experience the thrill of shopping as our modern interface induxles your eyes and your wallet.
              </p>
              <div>
              <button className="btn bg-[#ffffff] hover:bg-[--bg-li] border-[4px] border-[#000000] hover:border-[#ffffff] rounded-full font-bold text-[#000000] hover:text-[--sidebar-text] mt-[30px] h-min"><Link href={'/products'}>Shop Now</Link></button>
              </div>
            </div>
          </div>
        </section>

        <section className="h-screen relative w-full">
          <Image src="/img/intro-img.webp" alt="GenZ Cart" layout="fill" objectFit="cover" className='filter grayscale' onLoadingComplete={handleImageLoad} />
          <div className='m-[auto] w-screen absolute top-[50%] translate-y-[-50%]'>
            <h1 className='w-[90%] md:w-[50%] m-[auto] text-center text-[4rem] md:text-[8rem] xl:text-[10rem] font-luckiest text-[#ffC400] outline-text leading-[2.5rem] md:leading-[5.5rem]'>Dare to Stand Out?</h1>
            <p className='w-[90%] md:w-[60%] xl:w-[40%] m-[auto] text-center text-[1.5rem] font-extrabold outline-text-white mt-[2rem]'>It&apos;s time to unleash your inner rebel ✨.Explore our latest products and express your identify in a whole new way.</p>
          </div>
        </section>

        <section className="bg-[--bg-intro] min-h-screen w-full">
          <div className='flex flex-wrap justify-center items-center content-center gap-5 container m-[auto] w-auto max-w-[1000px] min-h-screen font-luckiest'>
            <div className='md:w-[660px] w-[320px] h-[320px] flex justify-center items-center flex-col bg-[--bg-sidebar] rounded-[40px] text-[--bg-li] text-[1.5rem] md:text-[3rem] text-center'>
              <p>1000+</p>
              <p>Superb Products Waiting for you.</p>
            </div>
            <div className='w-[320px] h-[320px] flex flex-col justify-center items-center  content-center flex-nowrap  bg-[--bg-sidebar] rounded-[40px]'>
              <p className='text-[5rem]'>😎</p>

            </div>
            <div className='w-[320px] h-[320px] flex flex-col justify-center items-center  content-center flex-nowrap  bg-[--bg-sidebar] rounded-[40px]'>
              <p className='text-[5rem]'>🚀</p>
            </div>
            <div className='w-[320px] md:w-[660px] flex justify-center items-center flex-col h-[320px]  bg-[--bg-sidebar] rounded-[40px] text-[--bg-li] text-[1.5rem] md:text-[3rem] text-center'>
              <p>1000+</p>
              <p>Superb Products Waiting for you.</p>
            </div>
          </div>
        </section>
        <section className="min-h-min bg-[--bg-sidebar] md:p-[40px] relative">
        <Faq/>
        </section>
        <Footer/>
      </div>
    </main>
  )
}