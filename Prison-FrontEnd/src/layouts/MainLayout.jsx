import React from 'react'
import Navbar from '@/components/Navbar'
import { Provider } from '@/context/Provider'
import {Outlet} from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
    <Provider>
    <Navbar />
    <Outlet />
    </Provider>
    </>
  )
}

export default MainLayout