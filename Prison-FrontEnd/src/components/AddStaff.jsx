import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useProviderContext } from '@/context/Provider'


const AddStaff = () => {
    const {facilities, managers,shifts,addStaff,data} = useProviderContext()


    const navigate = useNavigate()

    const [staffName,setStaffName] = useState('')
    const [rank,setRank] = useState('Junior Officer')
    const [shiftId,setShiftId] = useState('A')
    const [managerId,setManagerId] = useState(5)
    const [facilityId, setFacilityId] = useState(2)
    const [loading,setLoading] = useState(false)

        const submitForm = (e) => {
        e.preventDefault();

        const newStaff = {
            staff:{
                fullname: staffName,
                rank:rank,
                shift:shiftId
            },
            facility: {
                id:facilityId
            },
            manager:{
                id:managerId
            }
        }
        addStaff(newStaff)

        return navigate('/staff');
    }
const jobRanks = [
  "Junior Officer", 
  "Officer",        
  "Senior Officer", 
  "Supervisor",     
  "Director"        
];             

  return (
    <>
    <section className="bg-gray-200">
      <div className="container m-auto max-w-2xl py-24">
        <div
          className="bg-custom1-25 px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
        >
          <form onSubmit={submitForm} >
            <h2 className="text-3xl text-center font-semibold mb-6">Add Staff</h2>
    <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2"
                >Staff Name</label
              >
              <input
                type="text"
                id="title"
                name="title"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Food Court"
                required
                value={staffName}
                onChange={(e)=>setStaffName(e.target.value)}
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
                    <option key={manager.id} value={manager.id}>{manager.name}</option>
                ))}
                
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="type" className="block text-gray-700 font-bold mb-2"
                >Facility</label
              >
              <select
                id="salary"
                name="salary"
                className="border rounded w-full py-2 px-3"
                required
                value={facilityId}
                onChange={(e)=>setFacilityId(e.target.value)}
              >

                {facilities.map((facility)=> (
                    <option key={facility.id} value={facility.id}>{facility.name}</option>
                ))}
                
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="type" className="block text-gray-700 font-bold mb-2"
                >Shift</label
              >
              <select
                id="salary"
                name="salary"
                className="border rounded w-full py-2 px-3"
                required
                value={shiftId}
                onChange={(e)=>setShiftId(e.target.value)}
              >

                {shifts.map((shift)=> (
                    <option key={shift.id} value={shift.id}>{shift.id}</option>
                ))}
                
              </select>
            </div>


             <div className="mb-4">
              <label htmlFor="type" className="block text-gray-700 font-bold mb-2"
                >Rank</label
              >
              <select
                id="salary"
                name="salary"
                className="border rounded w-full py-2 px-3"
                required
                value={rank}
                onChange={(e)=>setRank(e.target.value)}
              >

                {jobRanks.map((rank)=> (
                    <option key={rank} value={rank}>{rank}</option>
                ))}
                
              </select>
            </div>
        
            <div>
              <button
                className="bg-custom1-500 hover:bg-custom1-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Staff
              </button>
            </div>
          </form>
        </div>
    </div>
</section>
            
    </>
  )
}

export default AddStaff