import Link from "next/link"

export const Footer = () => {
    return (
        <footer className="p-16 tablet:px-8 bg-indigo-700 text-white">
            <div className="mb-8 text-center text-3xl opacity-90 tablet:text-2xl android:text-lg" >
                <h3 className="text-2xl font-semibold mb-2 tablet:text-xl android:text-lg">
                    Let&#39;s Make Your Building Vision A Reality
                </h3>
                <h3 className="font-medium italic">
                    Call Now <span className="font-bold">+234 817 5032 115</span>
                </h3>
            </div>
            <div className="grid grid-cols-3 gap-8 justify-between mb-8 tablet:grid-cols-2 android:grid-cols-1 android:justify-normal">
                <div >
                    <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
                    <p className="mb-4 opacity-80 text-lg leading-snug">
                        Hybie Consults Limited.
                        <br />
                        29, Old Ewu Road, Off Airport Road
                        <br />
                        Mafoluku-Oshodi, Lagos Nigeria.
                    </p>
                    <p className="opacity-80 text-lg">
                        Email: <a href="mailto:anabemgroup@gmail.com">anabemgroup@gmail.com</a>
                    </p>
                    <p className="opacity-80 text-lg">
                        Phone: <a href="tel:+2348175032115" >+234 817 5032 115</a>
                    </p>
                </div>

                <div >
                    <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
                    <ul className="grid grid-cols-2 gap-2">
                        <li><Link href="/" className="footer_links">Home</Link></li>
                        <li><Link href="#" className="footer_links">About Us</Link></li>
                        <li><Link href="#" className="footer_links">Our Blog</Link></li>
                        <li><Link href="#" className="footer_links">Testimonials</Link></li>
                        <li><Link href="#" className="footer_links">Contact Us</Link></li>
                        <li><Link href="/contact" className="footer_links">Services</Link></li>
                        <li><Link href="/services" className="footer_links">Faq&#39;s</Link></li>
                        <li><Link href="#" className="footer_links">Careers</Link></li>
                        <li><Link href="#" className="footer_links">Schedule an Appointment</Link></li>
                    </ul>
                </div>


                <h3 className="text-xl font-semibold mb-4 largeTablet:text-lg tablet:col-span-2 tablet:text-lg android:text-base android:col-span-1">
                    We will deliver high quality sustainable design, and business consulting services.
                </h3>
            </div>
            <p className="text-center text-lg mt-8 android:text-base">
                Copyright © Anabem Lifestyle Limited 2024. All rights reserved.
            </p>
        </footer>

    )
}
