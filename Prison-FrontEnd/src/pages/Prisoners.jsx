import React from 'react'
import Cards from '@/components/Cards'
const Prisoners = ({isManagers = false,isPrisoners = false,isStaff = false}) => {
  return (
    <Cards isPrisoners={isPrisoners}/>
  )
}

export default Prisoners