'use client';

import { useEffect, useState } from 'react';
import Logo from './Logo';
import MenuIcon from './menuIcon';
import { Nav } from './nav';

export const Header = () => {
    const [showNav, setShowNav] = useState(false)

    useEffect(() => {
        window.addEventListener('resize', function () {
            if (showNav) {
                setShowNav(false)
            }
        })
    }, [showNav])

    return (
        <header className='fixed top-0 py-3  left-0 right-0 mx-auto flex items-center w-full px-16 tablet:px-8 android:px-4 text-white  z-50 border-b border-indigo-500 bg-indigo-700 '>
            <Logo />
            <Nav info={{ nav: showNav, setNav: setShowNav }} />
            <MenuIcon info={{ nav: showNav, setNav: setShowNav }} />
        </header>
    );
};
