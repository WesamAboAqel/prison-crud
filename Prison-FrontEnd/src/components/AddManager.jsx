import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useProviderContext } from '@/context/Provider'
import Spinner from './Spinner';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaMapMarker } from 'react-icons/fa';


const AddManager = () => {
    const {facilities,setFacilities,addManager,data,setData} = useProviderContext()

    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const [managerName,setManagerName] = useState('')
    const [staffCount,setStaffCount] = useState('')
    const [facilityId, setFacilityId] = useState(2)
    const [address,setAddress] = useState('')
    const [phoneNumber,setPhoneNumber] = useState('')

    const submitForm = (e) => {
        e.preventDefault();

        const newManager = {
            manager:{
                name: managerName,
                staff_count:staffCount,
                facility_id: facilityId,
                address:address,
                phonenumber:phoneNumber
            }
          }

        addManager(newManager)

        return ;
    }

    
  return (
    <>
    <section>
      <div className="container m-auto py-6 px-6">
        <Link
          to="/managers"
          className="text-custom1-900 hover:text-custom1-700 flex items-center"
        >
          <FaArrowLeft className="mr-2"/> Back to Managers
        </Link>
      </div>
    </section>
    {loading ? (<Spinner loading={loading} />): (<section className="bg-custom1-50">
      <div className="container m-auto max-w-2xl py-24">
        <div
          className="bg-custom1-25 px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
        >
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6">Add Manager</h2>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2"
                >Manager Name</label
              >
              <input
                type="text"
                id="title"
                name="title"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. John Doe"
                required
                value={managerName}
                onChange={(e)=>setManagerName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2"
                >Manager Address</label
              >
              <input
                type="text"
                id="title"
                name="title"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Irbid-Yarmouk University"
                required
                value={address}
                onChange={(e)=>setAddress(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2"
                >Manager Phone Number</label
              >
              <input
                type="text"
                id="title"
                name="title"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. 0712345678"
                required
                value={phoneNumber}
                onChange={(e)=>setPhoneNumber(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2"
                >Staff Count</label
              >
              <input
                type="text"
                id="title"
                name="title"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. 100"
                required
                value={staffCount}
                onChange={(e)=>setStaffCount(e.target.value)}
              />
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
                    <option key= {facility.id} value={facility.id}>{facility.name}</option>
                ))}
                
              </select>
            </div>

            <div>
              <button
                className="bg-custom1-500 hover:bg-custom1-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Manager
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>)}
    </>
  )
}

export default AddManager