'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import useOutSideClick from './handleOutsideClick';

const navLinks = [
    {
        name: "About",
        href: "/about",
    },
    {
        name: "Services",
        href: "/services",
    },
    {
        name: "Contact",
        href: "/contact",
    },
];


export const Nav = ({ info }) => {
    const { nav, setNav } = info
    const closeNav = function () {
        setNav(false)
    }

    const navRef = useOutSideClick(closeNav)
    const pathname = usePathname()
    return (
        <nav ref={navRef} className={`${nav ? 'show_nav' : ''} flex-1 nav_links tablet:shadow-md`}>
            <ul className={`flex tablet:flex-col tablet:gap-4 tablet:pt-8 tablet:pb-16 tablet:pl-6 justify-between tablet:justify-normal`}>
                {navLinks.map((link) => (
                    <li key={link.name}>
                        <Link
                            className={`py-2 px-4 tablet:py-1 duration-200 ease-linear  transition-all  hover:bg-black rounded-[5px] tablet:hover:text-white block tablet:text-xl tablet:w-fit tablet:font-medium
                                ${pathname === link.href ? 'bg-black rounded-[5px] block tablet:text-white' : ''}`}
                            href={link.href}
                            onClick={() => setNav(false)}
                        >
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul >
        </nav >
    )
}
