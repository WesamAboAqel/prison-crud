import React from 'react'
import { useParams, useLoaderData, useNavigate } from 'react-router-dom';
import {useState,useEffect} from 'react'
import Spinner from '@/components/Spinner';
import { useProviderContext } from '@/context/Provider'
import { FaArrowLeft, FaMapMarker } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { format } from 'date-fns'

const EditStaff = ({updateStaff, params}) => {

    const {id} = useParams()

    const {facilities, managers,shifts,addStaff,data} = useProviderContext()
    
        const {staff, manager, facility,shift} = useLoaderData()

        const navigate = useNavigate()
    
        const [staffName,setStaffName] = useState(staff.fullname)
        const [rank,setRank] = useState(staff.rank)
        const [shiftId,setShiftId] = useState(staff.shift)
        const [managerId,setManagerId] = useState(staff.manager_id)
        const [facilityId, setFacilityId] = useState(staff.facility_id)
        const [loading,setLoading] = useState(false)
    
            const submitForm = (e) => {
            e.preventDefault();
    
            const newStaff = {
                staff:{
                    id: id,
                    fullname: staffName,
                    rank:rank,
                    shift:shiftId,
                    facility_id:facilityId,
                    manager_id:managerId
                }
            }
            updateStaff(newStaff)
    
            return;
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
    <section>
      <div className="container m-auto py-6 px-6">
        <Link
          to="/staff"
          className="text-custom1-900 hover:text-custom1-700 flex items-center"
        >
          <FaArrowLeft className="mr-2"/> Back to Staff
        </Link>
      </div>
    </section>
    <section className="bg-custom1-50">
      <div className="container m-auto max-w-2xl py-24">
        <div
          className="bg-custom1-25 px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
        >
          <form onSubmit={submitForm} >
            <h2 className="text-3xl text-center font-semibold mb-6">Edit Staff</h2>
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
                className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
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

export default EditStaff