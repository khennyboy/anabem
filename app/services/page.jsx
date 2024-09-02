import React from 'react'
import PagesContainer from '../_component/pagesContainer'

export const metadata = {
    title: "Our Services",
    description: `Explore the range of services offered by ANABEM Lifestyle Ltd., including Mechanical, Electrical, and Plumbing (MEP) solutions, bespoke furniture design, and comprehensive real estate services. Discover how we can meet your unique needs with our expertise and innovation.`
}

const Page = () => {
    return (
        <PagesContainer>
            <>
                <div className="mb-12">
                    <h2 className="text-3xl font-bold mb-4 text-indigo-700 tablet:text-xl largeTablet:text-2xl">
                        MEP Services
                    </h2>
                    <p className="text-lg leading-relaxed text-gray-700">
                        We offer comprehensive Mechanical, Electrical, and Plumbing (MEP) services tailored to meet
                        the specific needs of residential and commercial projects. Our team of certified professionals
                        ensures that every installation is executed to the highest standards, guaranteeing safety,
                        efficiency, and reliability.
                    </p>
                </div>

                <div className="mb-12">
                    <h2 className="text-3xl font-bold mb-4 text-indigo-700 tablet:text-xl largeTablet:text-2xl">
                        Furniture Design & Manufacturing
                    </h2>
                    <p className="text-lg leading-relaxed text-gray-700">
                        At ANABEM Lifestyle Ltd., we believe that furniture should be more than just functional—it
                        should be a reflection of your style and personality. We create custom-designed pieces that are
                        not only practical but also aesthetically pleasing, adding a unique touch to any space.
                    </p>
                </div>

                <div>
                    <h2 className="text-3xl font-bold mb-4 text-indigo-700 tablet:text-xl largeTablet:text-2xl">
                        Real Estate Development
                    </h2>
                    <p className="text-lg leading-relaxed text-gray-700">
                        Our real estate services encompass everything from property development to consultancy. We
                        work closely with clients to understand their needs and provide them with tailored solutions that
                        maximize their investments and enhance the value of their properties.
                    </p>
                </div>
            </>
        </PagesContainer>

    )
}

export default Page