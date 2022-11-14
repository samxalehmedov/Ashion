import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import LogoImg from "../../../../assets/Logo/logo.png"
import { AiOutlineClose } from "react-icons/ai"

const MobileLinks = ({ open, setOpen }) => {
    return (
        <>
            <div className={`${open ? "block" : "hidden"} md:hidden block fixed w-full h-screen ease-in-out duration-500 bg-black/70 inset-0 z-10`} />
            <div className={`${open ? "left-0" : "-left-[100%]"} md:hidden block sm:w-[350px] w-full h-full fixed top-0 left-0 ease-in-out duration-500 bg-white z-10`}>
                <div className='relative flex justify-center py-10'>
                    <Link onClick={() => setOpen(false)} to={"/"}>
                        <img src={LogoImg} alt="logo" />
                    </Link>
                    <div onClick={() => setOpen(false)} className='absolute top-4 right-4 flex items-center justify-center cursor-pointer'>
                        <AiOutlineClose size={20} />
                    </div>
                </div>
                <nav>
                    <ul className='flex flex-col items-center gap-10'>
                        <li onClick={() => setOpen(false)}>
                            <NavLink to={"/"} exact="true" className={({isActive}) => isActive ? "text-secondary" : "hover:text-secondary transition-colors"}>
                                Home
                            </NavLink>
                        </li>
                        <li onClick={() => setOpen(false)}>
                            <NavLink to={"/shop"} className={({isActive}) => isActive ? "text-secondary" : "hover:text-secondary transition-colors"}>
                                Shop
                            </NavLink>
                        </li>
                        <li onClick={() => setOpen(false)}>
                            <NavLink to={"/about"} className={({isActive}) => isActive ? "text-secondary" : "hover:text-secondary transition-colors"}>
                                About
                            </NavLink>
                        </li>
                        <li onClick={() => setOpen(false)}>
                            <NavLink to={"/contact"} className={({isActive}) => isActive ? "text-secondary" : "hover:text-secondary transition-colors"}>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default MobileLinks