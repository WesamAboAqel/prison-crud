import React from 'react'
import Spinner from './Spinner'
import Card from './Card'
import { useProviderContext } from '@/context/Provider'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import {NavLink} from 'react-router-dom'
import LargeButton from './LargeButton'

const Cards = ({isManagers = false,isPrisoners = false,isStaff = false, isVisits = false}) => {
    
    const {data,managers,prisoners,staff,facilities,prisonerCases,visits,visitors,setDir} = useProviderContext()
    

    const text = isManagers ? 'Add Manager' : isPrisoners ? 'Add Prisoner' : isStaff ? 'Add Staff' : isVisits ? 'Add Visit' : ''
                  
                  

    const link = `/${isManagers ? 'managers/add' : isPrisoners ? 'prisoners/add' : 
isStaff ? 'staff/add' : isVisits ? 'visits/add': ''}`

    const [loading,setLoading] = useState(false)

  return (
    <section className="bg-gray-200 px-4 py-10">
    <div className="container-xl lg:container m-auto">
      <h2 className="text-3xl font-bold text-custom1-900 mb-6 text-center">
        {isManagers && 'Browse Managers'}
        {isPrisoners && 'Browse Prisoners'}
        {isStaff && 'Browse Staff'}
        {isVisits && 'Browse Visits'}
      </h2>
      <div className="border border-custom1-900 mb-10"></div>
      <div className="flex space-x-2 mb-10 ">
            <div className="md:ml-auto">
              <LargeButton text={text} link={link} />
            </div>
          </div>
      
        { loading ? (<Spinner loading={loading} />) : (

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {isManagers &&  managers.map((manager) => (
            <Card key={manager.id} isManagers={true} manager={manager} facility={facilities.find(facility => facility.id === manager.facility_id) }/>
        ))}

        {isPrisoners &&  prisoners.map((prisoner) => (
            <Card key={prisoner.id} isPrisoners={true} prisoner={prisoner} prisonercase={prisonerCases.find(prisonercase => prisonercase.id === prisoner.prisonercase)}/>
        ))}

        {isStaff &&  staff.map((staff) => (
            <Card key={staff.id} isStaff={true} staff={staff} manager={managers.find(manager => manager.id === staff.manager_id)} facility={facilities.find(facility => facility.id === staff.facility_id)}/>
        ))}

        {isVisits &&  visits.map((visit) => (
            <Card key={visit.id} isVisits={true} visit={visit} staff={staff.find(staff => staff.id === visit.staff_id)} prisoner={prisoners.find(prisoner => prisoner.id === visit.prisoner_id)} visitor={visitors.find(visitor => visitor.id === visit.visitors_id)}/>
        ))}
        </div>
      )}
    </div>
  </section>
  )
}

export default Cards