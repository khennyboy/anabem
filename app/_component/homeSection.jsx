import Link from 'next/link'
import React from 'react'

const HomeSection1 = () => {
    return (
        <>
            <h3 className='text-center mb-8 text-2xl tablet:text-lg'>At ANABEM Lifestyle Ltd., we pride ourselves on our three pillars of excellence</h3>

            <div className='grid grid-cols-3 tablet:grid-cols-2 android:grid-cols-1 gap-6  mb-12'>
                <div className='bg-white shadow-md rounded-[5px] px-4 py-12'>
                    <h4 className='text-center text-xl mb-6 font-[500] text-indigo-700'>MEP Services</h4>
                    <p className='text-lg leading-snug'>Professional installation and maintenance of essential systems to ensure your
                        building operates at peak efficiency</p>
                </div>
                <div className='bg-white shadow-md rounded-[5px] px-4 py-12'>
                    <h4 className='text-center text-xl  mb-6 font-[500] text-indigo-700'> Furniture Design & Manufacturing</h4>
                    <p className='text-lg leading-snug'>Unique, custom-built furniture that combines functionality
                        with aesthetic appeal</p>
                </div>
                <div className='bg-white shadow-md rounded-[5px] px-4 py-12'>
                    <h4 className='text-center text-xl mb-6 font-medium text-indigo-700'>Real Estate Development</h4>
                    <p className='text-lg leading-snug'> houghtful property development and consultancy services to help
                        you make informed investment decisionsy</p>
                </div>
            </div>
            <Link href='/services'
                className='bg-indigo-500 text-white w-1/2 transition-all duration-200 ease-linear mx-auto block
                     max-w-[200px] ring-indigo-600 focus:ring-1 rounded py-3 ring-offset-2 smallMobile:w-[45%] smallMobile:text-base
                      text-center text-xl hover:bg-indigo-600 dark:ring-offset-dark-grey_50 font-medium'>Learn more!</Link>
        </>
    )
}

export default HomeSection1