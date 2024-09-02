import React from 'react'
import PagesContainer from '../_component/pagesContainer'
import contactImage from '@/public/contactImage.png'
import Image from 'next/image'

export const metadata = {
    title: "Contact Us",
    description: `Get in touch with ANABEM Lifestyle Ltd. for inquiries about our Mechanical, Electrical, and Plumbing (MEP) services, bespoke furniture design, or real estate solutions. We're here to assist you with any questions or project needs.`
}

const Page = () => {
    return (
        <PagesContainer>
            <>
                <h3 className="text-2xl font-semibold mb-4 text-indigo-700 tablet:text-xl">
                    Get in touch with us today!
                </h3>
                <p className="mb-8 text-lg leading-relaxed text-gray-700">
                    Whether you&#39;re interested in our MEP services, looking for custom furniture, or need real estate
                    advice, we’re here to help. Fill out the form below, and we&#39;ll get back to you as soon as possible.
                </p>

                <h3 className="text-2xl font-semibold mb-4 text-indigo-700 tablet:text-xl">
                    Let&#39;s Make Your Building Vision a Reality
                </h3>

                <div className='grid grid-cols-2 justify-between items-center android:grid-cols-1  tablet:justify-center'>
                    <div className='justify-self-start'>
                        <div className="mb-8">
                            <p className="text-lg leading-relaxed text-gray-700">Email us today at:</p>
                            <a href="mailto:anabemgroup@gmail.com" className="text-xl text-indigo-700 italic">
                                anabemgroup@gmail.com
                            </a>
                        </div>
                        <div>
                            <p className="text-lg leading-relaxed text-gray-700">You can also contact us at:</p>
                            <a href="tel:+2348175032115" className="text-xl text-indigo-700  italic">
                                +234 817 5032 115
                            </a>
                        </div>
                    </div>
                    <Image
                        alt='projecticon'
                        src={contactImage}
                        className='object-cover w-[17rem] aspect-square mx-auto' />
                </div>
            </>
        </PagesContainer>

    )
}

export default Page