import React from 'react'
import logo from '../assets/images/2.png'
import {NavLink} from 'react-router-dom'
import SmallButton from './SmallButton'


const Navbar = () => {

  const linkClass = ({isActive}) => isActive ? 'bg-neon-carrot-500 text-black hover:bg-gray-300 hover:text-black rounded-md px-3 py-2' : 'text-black hover:bg-gray-300 hover:text-black rounded-md px-3 py-2'

  return (
    <nav className="bg-custom1-25 border-b border-custom1-50">
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="flex h-20 items-center justify-between">
        <div
          className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
        >
          {/* <!-- Logo --> */}
          <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
            <img
              className="h-20 w-auto"
              src={logo}
              alt="React Jobs"
            />
            <span className="hidden md:block text-custom1-900 text-2xl font-bold ml-2"
              >Prison Break</span
            >
          </NavLink>
          <div className="md:ml-auto mt-5">
            <div className="flex space-x-2">
              <SmallButton link={'/'} text={'Home'}/>
              <SmallButton link={'/prisoners'} text={'Prisoners'}/>
              <SmallButton link={'/staff'} text={'Staff'}/>
              <SmallButton link={'/managers'} text={'Managers'}/>
              <SmallButton link={'/visits'} text={'Visits'}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar