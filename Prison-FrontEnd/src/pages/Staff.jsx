import React from 'react'
import Cards from '@/components/Cards'

const Staff = ({isManagers = false, isPrisoners = false, isStaff = false}) => {
  return (
    <Cards isStaff={isStaff}/>
  )
}

export default Staff