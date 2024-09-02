'use client'
import { useEffect, useRef } from 'react'

function useOutSideClick(handler) {

    const navRef = useRef()
    useEffect(() => {
        function handleClick(e) {
            if (navRef.current && !navRef.current.contains(e.target)) {
                handler()
            }
        }
        document.addEventListener("click", handleClick)

        return () => document.removeEventListener("click", handleClick)
    }, [handler]);
    return navRef;
}

export default useOutSideClick