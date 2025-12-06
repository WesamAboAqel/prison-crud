import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState ,useEffect } from 'react'
import { useProviderContext } from '@/context/Provider'


const AddFacility = () => {

    const {facilities,setFacilities,managers, setManagers,addManager,data,setData, addFacility} = useProviderContext()

    const [loading, setLoading] = useState(false)

        
    
    

    const navigate = useNavigate()

    const [facilityName,setFacilityName] = useState('')
    const [location,setLocation] = useState('Irbid')
    const [state,setState] = useState('Under Construction')
    const [capacity,setCapacity] = useState('')
    const [managerId,setManagerId] = useState(5)
    const [type,setType] = useState('')

    const locations = ['Irbid','Amman','Al Karak','Aqaba']
    const conditions = ['Under Construction', 'Maintenance', 'Accepting', 'Full']
    
    const submitForm = (e) => {
        e.preventDefault();

        const newFacility = {
            facility:{
                name: facilityName,
                location: location,
                state:state,
                capacity: capacity,
                manager_id:managerId,
                type:type
            }  
    }

        addFacility(newFacility)

        return ;
    }

  return (
    <>
    <section className="bg-gray-200">
      <div className="container m-auto max-w-2xl py-24">
        <div
          className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
        >
          <form onSubmit={submitForm} >
            <h2 className="text-3xl text-center font-semibold mb-6">Add Facility</h2>
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
                className="bg-custom1-500 hover:bg-custom1-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Facility
              </button>
            </div>
          </form>
        </div>
    </div>
</section>
            
    </>
  )
}

export default AddFacility