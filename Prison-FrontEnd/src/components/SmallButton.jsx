import React from 'react'
import { NavLink } from 'react-router-dom'

const SmallButton = ({link, text}) => {

    const linkClass = ({isActive}) => isActive ? 'py-2 px-4 bg-custom1-700 hover:bg-custom1-400 text-custom1-50 rounded-md font-inter font-semibold text-[14px]' : 'py-2 px-4 bg-custom1-500 hover:bg-custom1-400 text-custom1-50 rounded-md font-inter font-semibold text-[14px]'

  return (
    <NavLink to={link} className={linkClass}>{text}</NavLink>
  )
}

export default SmallButton