import React from 'react'
import { Link } from 'react-router-dom'
import LogoImg from "../../../../assets/Logo/logo.png"

const Logo = () => {
  return (
    <Link to={"/"}>
      <img src={LogoImg} alt="logo" />
    </Link>
  )
}

export default Logo