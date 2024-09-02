import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '@/public/ANABEMBL.png'

const Logo = () => {
    return (
        <div className='flex-1'>
            <Link href='/' className='relative flex gap-1 items-center'>
                <Image
                    className='object-cover rounded-[50%] w-[70px] aspect-square android:w-[50px]'
                    src={logo}
                    alt='company logo'
                />
                <span className='font-bold'>Anabem Lifestyle Limited</span>
            </Link>
        </div>
    )
}

export default Logo