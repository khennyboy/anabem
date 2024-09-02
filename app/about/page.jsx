import React from 'react'
import PagesContainer from '../_component/pagesContainer'

export const metadata = {
    title: "About",
    description: `Luxurious cabin hotel, located in the heart of the
    Italian Dolomites, surrounded by beautiful mountains and dark forests`
}
const Page = () => {
    return (
        <PagesContainer>
            <>
                <p className="mb-12 text-lg leading-relaxed text-gray-700">
                    Though newly established, ANABEM Lifestyle Ltd. was born from a passion for quality
                    craftsmanship and a desire to meet the growing demand for reliable MEP services, innovative
                    furniture, and sustainable real estate solutions in Nigeria. Our founders bring years of
                    experience in the engineering and business sectors, ensuring that we deliver top-tier services
                    with every project.
                </p>

                <section className="mb-12 flex gap-12 tablet:flex-wrap">
                    <div className="bg-gray-100 rounded-[8px] px-4 py-10">
                        <h3 className="text-2xl font-semibold mb-4 text-indigo-700">Mission</h3>
                        <p className="text-lg leading-relaxed text-gray-700">
                            To deliver exceptional services in MEP, furniture design, and real estate that exceed
                            our clients&#39; expectations through innovation, quality, and integrity.
                        </p>
                    </div>
                    <div className='bg-indigo-100 rounded-[8px] px-4 py-10'>
                        <h3 className="text-2xl font-semibold mb-4 text-indigo-700">Vision</h3>
                        <p className="text-lg leading-relaxed text-gray-700">
                            To be a leading name in Nigeria’s MEP, furniture, and real estate sectors, known for our
                            commitment to excellence and customer satisfaction.
                        </p>
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4 text-indigo-700">Team</h3>
                    <p className="text-lg leading-relaxed text-gray-700">
                        Our team is composed of seasoned professionals dedicated to excellence in their respective
                        fields. As the Managing Partner, Adebola Idowu Wasiu leads with a vision to blend traditional
                        craftsmanship with modern innovation, ensuring that ANABEM Lifestyle Ltd. is always at the
                        forefront of industry standards.
                    </p>
                </section>
            </>
        </PagesContainer>

    )
}

export default Page