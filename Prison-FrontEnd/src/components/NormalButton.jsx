import React from 'react'
import { NavLink } from 'react-router-dom'

const NormalButton = ({link, text}) => {
    
  const linkClass = ({isActive}) => isActive ? 'py-3 px-[18px] bg-custom1-700 hover:bg-custom1-400 text-custom1-50 rounded-md font-inter font-semibold text-[16px]' : 'py-3 px-[18px] bg-custom1-500 hover:bg-custom1-400 text-custom1-50 rounded-md font-inter font-semibold text-[16px]'

  return (
    <NavLink to={link} className={linkClass}>{text}</NavLink>
  )
}

export default NormalButton