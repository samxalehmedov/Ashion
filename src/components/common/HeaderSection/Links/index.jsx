import React from 'react'
import { NavLink } from 'react-router-dom'

const Links = () => {
  return (
    <nav className='md:block hidden'>
      <ul className='flex items-center gap-10'>
        <li>
          <NavLink to={"/"} exact="true" className={({isActive}) => isActive ? "text-secondary" : "hover:text-secondary transition-colors"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/shop"} className={({isActive}) => isActive ? "text-secondary" : "hover:text-secondary transition-colors"}>
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink to={"/about"} className={({isActive}) => isActive ? "text-secondary" : "hover:text-secondary transition-colors"}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to={"/contact"} className={({isActive}) => isActive ? "text-secondary" : "hover:text-secondary transition-colors"}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Links