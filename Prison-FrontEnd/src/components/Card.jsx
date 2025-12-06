import React from 'react'
import {Link} from 'react-router-dom'
import { useProviderContext } from '@/context/Provider'
import { useEffect,useState } from 'react'
import { format } from 'date-fns'
import Spinner from '../components/Spinner';
import { useLocation } from 'react-router-dom'
import SmallButton from './SmallButton'
import { NavLink } from 'react-router-dom'

const Card = ({ manager ,facility, prisoner, prisonercase, staff ,visit ,visitor ,isManagers = false,isPrisoners = false,isStaff = false, isVisits = false}) => {
  
  const {setManagers, setPrisoners, setStaff,setData, setDir} = useProviderContext()
  
  const linkClass = 'py-2 px-4 bg-custom1-500 hover:bg-custom1-400 text-custom1-50 rounded-md font-inter font-semibold text-[14px]'
  
  // console.log(facility)

  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    const load = async () => {
      try{

        await new Promise(resolve => setTimeout(resolve, 250));
      }catch(error){
        console.log(error)
      }finally{
        setLoading(false)
      }
    }
    load()
  },[])
  
  const deleteVisit = async (id) => {
    const response = await fetch(`/api/visits/delete/${id}`, {
      method: 'DELETE'
    })
    return 
  }
      
  const onVisitDeleteClick = (visitId) => {
          const confirm = window.confirm('Are you are you want to delete this listing?')
  
          if(!confirm)return;
  
          deleteVisit(visitId)
  
          return navigate('/visits')
      }

  
  if (isPrisoners) {const DOB = format(new Date(prisoner.dob), 'dd-MM-yyyy')}

  return (
<>
    {  isManagers && <div className="bg-white rounded-xl shadow-md relative">
  <div className="p-4">
    <div className="mb-6">
      
      <h3 className="text-xl font-bold">
       {manager.name}
      </h3>
    </div>
    <div className="text-indigo-500 mb-5 text-l">{facility.name}</div>
    <div className="border border-gray-100 mb-5"></div>
    <div className="flex flex-col lg:flex-row justify-between mb-4">
      <div className="text-orange-700 mb-3">
        Staff Count: {manager.staff_count}
      </div>
      <SmallButton text={'Read More'} link={`/managers/${manager.id}`} />
    </div>
  </div>
</div>
}


        {loading ? (<Spinner loading={loading} />) : isPrisoners && 
          <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
              <div className="mb-6">
                <h3 className="text-xl font-bold">{prisoner.fullname}</h3>
              </div>
  
              <div className="mb-5 white">
               {prisonercase.description}
              </div>
  
              <h3 className="text-green-900 mb-2">{prisoner.nationality}</h3>
  
              <div className="border border-gray-100 mb-5"></div>
  
              <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="text-orange-700 mb-3">
                  {/* <FaMapMarker className='inline text-lg mb-1 mr-1'></FaMapMarker> */}
                  {format(new Date(prisoner.dob), 'dd-MM-yyyy')}
                </div>
                <SmallButton text={'Read More'} link={`/prisoners/${prisoner.id}`} />
                
              </div>
            </div>
          </div>
        }



        {loading ? (<Spinner loading={loading} />) : isStaff && <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
              <div className="mb-6">
                <div className="text-gray-600 my-2">{manager.name}</div>
                <h3 className="text-xl font-bold">{staff.fullname}</h3>
              </div>
  
              <div className="mb-5">
               {facility.name}
              </div>
  
              <h3 className="text-indigo-500 mb-2">{staff.rank}</h3>
  
              <div className="border border-gray-100 mb-5"></div>
  
              <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="text-orange-700 mb-3">
                  
                  {staff.shift}
                </div>
                <SmallButton text={'Read More'} link={`/staff/${staff.id}`} />
              </div>
            </div>
          </div>}




          {loading ? (<Spinner loading={loading} />) : isVisits && <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
              <div className="mb-6">
                <div className="text-gray-600 my-2">Staff: {staff.fullname}</div>
                <h3 className="text-xl mb-3 font-bold">Prisoner: {prisoner.fullname}</h3>
                <h3 className="text-xl ">Visitor: {visit.visitor}</h3>
              </div>
  
              
  
              <h3 className="text-indigo-500 mb-2">Date: {visit.date}</h3>
  
              <div className="border border-gray-100 mb-5"></div>
  
              <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="text-orange-700 mb-3">
                  
                  Room: {visit.room}
                </div >
                <div className="flex space-x-2">
                <SmallButton text={'Edit'} link={`/visits/edit/${visit.id}`} />
                <NavLink to="/visits" onClick={(e) => {
                                                        e.preventDefault(); 
                                                        onVisitDeleteClick(visit.id); 
                                                        }} className={linkClass}>Delete</NavLink>
                </div>
              </div>
            </div>
          </div>}
</>
  )
}

export default Card