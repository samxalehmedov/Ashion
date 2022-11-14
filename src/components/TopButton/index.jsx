import React, { useEffect, useState } from 'react'
import { AiOutlineArrowUp } from "react-icons/ai"

const TopButton = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const toggleButton = () => {
            const scrolled = document.documentElement.scrollTop;
            if (scrolled > 300) {
                setShow(true)
            }
            else if (scrolled <= 300) {
                setShow(false)
            }
        }

        window.addEventListener("scroll", toggleButton)
        return () => {
            window.removeEventListener('scroll', toggleButton)
        }
    }, [])

    const clickHandle = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <div onClick={clickHandle} className={`${show ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0"} fixed bottom-6 right-6 w-12 h-12 bg-secondary text-white flex items-center justify-center rounded-full ease-in-out duration-500 cursor-pointer z-50'`}>
            <AiOutlineArrowUp size={30} />
        </div>
    )
}

export default TopButton