import React from 'react'
import { useParams, useLoaderData, useNavigate } from 'react-router-dom';
import {useState,useEffect} from 'react'
import Spinner from '@/components/Spinner';
import { useProviderContext } from '@/context/Provider'
import { FaArrowLeft, FaMapMarker } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { format } from 'date-fns'

const EditFacility = ({updateFacility, params}) => {

    const {facilities,setFacilities,managers, setManagers,addManager,data,setData, addFacility} = useProviderContext()
    
        const [loading, setLoading] = useState(false)
    
        const {manager, facility} = useLoaderData()
        
        const {id} = useParams()
    
        const navigate = useNavigate()
    
        const [facilityName,setFacilityName] = useState(facility.name)
        const [location,setLocation] = useState(facility.location)
        const [state,setState] = useState(facility.state)
        const [capacity,setCapacity] = useState(facility.capacity)
        const [managerId,setManagerId] = useState(facility.manager_id)
        const [type,setType] = useState(facility.type)
    
        const locations = ['Irbid','Amman','Al Karak','Aqaba']
        const conditions = ['Under Construction', 'Maintenance', 'Accepting', 'Full']
        
        const submitForm = (e) => {
            e.preventDefault();
    
            const newFacility = {
                facility:{
                    id:id,
                    name: facilityName,
                    location: location,
                    state:state,
                    capacity: capacity,
                    manager_id: managerId,
                    type:type
                }
            }
    
            updateFacility(newFacility)
    
            return navigate('/managers');
        }


  return (
    <>
    <section>
      <div className="container m-auto py-6 px-6">
        <Link
          to="/Staff"
          className="text-custom1-900 hover:text-custom1-700 flex items-center"
        >
          <FaArrowLeft className="mr-2"/> Back to Staff
        </Link>
      </div>
    </section>
    
    <section className="bg-custom1-900">
      <div className="container m-auto max-w-2xl py-24">
        <div
          className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
        >
          <form onSubmit={submitForm} >
            <h2 className="text-3xl text-center font-semibold mb-6">Edit Facility</h2>
    <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2"
                >Facility Name</label
              >
              <input
                type="text"
                id="title"
                name="title"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Food Court"
                required
                value={facilityName}
                onChange={(e)=>setFacilityName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="type" className="block text-gray-700 font-bold mb-2"
                >Location</label
              >
              <select
                id="salary"
                name="salary"
                className="border rounded w-full py-2 px-3"
                required
                value={location}
                onChange={(e)=>setLocation(e.target.value)}
              >

                {locations.map((location)=> (
                    <option key={location} value={location}>{location}</option>
                ))}
                
              </select>
            </div>
                
                <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2"
                >Facility Type</label
              >
              <input
                type="text"
                id="title"
                name="title"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Food Court"
                required
                value={type}
                onChange={(e)=>setType(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="type" className="block text-gray-700 font-bold mb-2"
                >Facility Condition</label
              >
              <select
                id="salary"
                name="salary"
                className="border rounded w-full py-2 px-3"
                required
                value={state}
                onChange={(e)=>setState(e.target.value)}
              >

                {conditions.map((condition)=> (
                    <option key={condition} value={condition}>{condition}</option>
                ))}
                
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="company" className="block text-gray-700 font-bold mb-2"
                >Capacity</label
              >
              <input
                type="text"
                id="company"
                name="company"
                className="border rounded w-full py-2 px-3"
                placeholder="eg. 100"
                value={capacity}
                onChange={(e)=>setCapacity(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="type" className="block text-gray-700 font-bold mb-2"
                >Manager</label
              >
              <select
                id="salary"
                name="salary"
                className="border rounded w-full py-2 px-3"
                required
                value={managerId}
                onChange={(e)=>setManagerId(e.target.value)}
              >

                {managers.map((manager)=> (
                    <option key= {manager.id} value={manager.id}>{manager.name}</option>
                ))}
                
              </select>
            </div>

        
            <div>
              <button
                className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Edit Facility
              </button>
            </div>
          </form>
        </div>
    </div>
</section>
            
    </>
  )
}

export default EditFacility