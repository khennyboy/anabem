'use client'
import React from 'react'
import { RiMenu4Line } from "react-icons/ri";
import { MdClose } from "react-icons/md";

const MenuIcon = ({ info }) => {
    const { nav, setNav } = info
    return (
        <div className='hidden tablet:block cursor-pointer text-3xl'
            onClick={(e) => {
                e.stopPropagation()
                setNav(prev => !prev)
            }}>
            {nav ? (<MdClose />) : (<RiMenu4Line />)}
        </div>
    )
}

export default MenuIcon