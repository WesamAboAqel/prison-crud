import React from 'react'
import { NavLink } from 'react-router-dom'


const LargeButton = ({link, text}) => {

  const linkClass =  'py-[14px] px-5 bg-custom1-500 active:bg-custom1-700 hover:bg-custom1-400 text-custom1-50 rounded-md font-inter font-semibold text-[18px]'

  return (
    <NavLink to={link} className={linkClass}>{text}</NavLink>
  )
}

export default LargeButton