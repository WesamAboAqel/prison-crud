import React from 'react'
import { useParams, useLoaderData, useNavigate } from 'react-router-dom';
import {useState,useEffect} from 'react'
import Spinner from '@/components/Spinner';
import { useProviderContext } from '@/context/Provider'
import { FaArrowLeft, FaMapMarker } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { format } from 'date-fns'

const EditVisits = ({updateVisit, params}) => {

    const { prisoners,staff,visitors, addVisit} = useProviderContext()

    const {id} = useParams()

    const {visit} = useLoaderData()

    const navigate = useNavigate()

    console.log(visit)

    const [staffId,setStaffId] = useState(visit.staff_id)
    const [prisonerId,setPrisonerId] = useState(visit.prisoner_id)
    const [visitor,setVisitor] = useState(visit.visitor)
    const [room,setRoom] = useState(visit.room)
    const [date,setDate] = useState(visit.date)

    const submitForm = (e) => {
        e.preventDefault();

        const newVisit = {
            visit:{
                id:id,
                staff_id:staffId,
                prisoner_id:prisonerId,
                visitor:visitor,
                room:room,
                date:date
            }  
        }

        
        updateVisit(newVisit)

        return navigate('/visits');
    }
  return (
    <section className="bg-gray-200">
      <div className="container m-auto max-w-2xl py-24">
        <div
          className="bg-custom1-25 px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
        >
          <form onSubmit={submitForm} >
            <h2 className="text-3xl text-center font-semibold mb-6">Edit Visit</h2>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2"
                >Visitor Name</label
              >
              <input
                type="text"
                id="title"
                name="title"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. John Doe"
                required
                value={visitor}
                onChange={(e)=>setVisitor(e.target.value)}
              />
            </div>
    <div className="mb-4">
              <label htmlFor="type" className="block text-gray-700 font-bold mb-2"
                >Prisoner</label
              >
              <select
                id="salary"
                name="salary"
                className="border rounded w-full py-2 px-3"
                required
                value={prisonerId}
                onChange={(e)=>setPrisonerId(e.target.value)}
              >

                {prisoners.map((prisoner)=> (
                    <option key={prisoner.id} value={prisoner.id}>{prisoner.fullname}</option>
                ))}
                
              </select>
              </div>

            <div className="mb-4">
              
            </div>

            <div className="mb-4">
              <label htmlFor="type" className="block text-gray-700 font-bold mb-2"
                >Staff</label
              >
              <select
                id="salary"
                name="salary"
                className="border rounded w-full py-2 px-3"
                required
                value={staffId}
                onChange={(e)=>setStaffId(e.target.value)}
              >

                {staff.map((staff)=> (
                    <option key={staff.id} value={staff.id}>{staff.fullname}</option>
                ))}
                
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2"
                >Room</label
              >
              <input
                type="text"
                id="title"
                name="title"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. John Doe"
                required
                value={room}
                onChange={(e)=>setRoom(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2"
                >Date</label
              >
              <input
                type="text"
                id="title"
                name="title"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. John Doe"
                required
                value={date}
                onChange={(e)=>setDate(e.target.value)}
              />
            </div>

            
        
            <div>
              <button
                className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Edit Visit
              </button>
            </div>
          </form>
        </div>
    </div>
</section>
  )
}

export default EditVisits