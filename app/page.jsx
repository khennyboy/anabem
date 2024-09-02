'use client'
import Link from 'next/link';
import HomeSection1 from './_component/homeSection';


const Page = () => {
  return (
    <div>
      <div className='bg-indigo-700 android:h-screen android:flex flex-col justify-center p-[12rem_4rem_6rem] tablet:px-8 android:px-4 android:py-0 text-white *:text-center'>
        <h1 className='font-[500] mb-8 text-4xl largeTablet:text-3xl tablet:text-2xl'>Crafting Excellence in MEP, Furniture, and Real Estate</h1>
        <p className='2xl:w-[70%] lg:w-[80%] android:w-full mx-auto text-xl mb-8 leading-snug tablet:text-lg android:text-base'>Welcome to ANABEM Lifestyle Ltd., where innovation meets craftsmanship. We specialize in
          delivering top-notch Mechanical, Electrical, and Plumbing (MEP) services, bespoke furniture
          design, and comprehensive real estate solutions. Explore our offerings and discover how we
          can bring your vision to life.</p>
        <div className='flex w-full gap-8 items-center justify-center'>
          <Link href='/services'
            className='bg-indigo-500 text-white w-1/2  transition-all duration-200 ease-linear tablet:text-lg android:font-normal
                     max-w-[140px] ring-indigo-200 ring-offset-indigo-600 focus:ring-1 rounded py-3 ring-offset-2 smallMobile:w-[45%] smallMobile:text-base
                      text-center text-xl hover:bg-indigo-600  font-[500]'>Learn More!</Link>
          <Link href='/contact'
            className='bg-indigo-500 text-white w-1/2  transition-all duration-200 ease-linear tablet:text-lg android:font-normal
                     max-w-[140px] ring-indigo-200 ring-offset-indigo-600 focus:ring-1 rounded py-3 ring-offset-2 smallMobile:w-[45%] smallMobile:text-base
                      text-center text-xl hover:bg-indigo-600  font-[500]'>Contact</Link>
        </div>
      </div>
      <section className='my-[6rem] bg-blue-50 p-16 tablet:p-8 android:p-4'>
        <HomeSection1 />
      </section>

    </div>
  );
}
export default Page