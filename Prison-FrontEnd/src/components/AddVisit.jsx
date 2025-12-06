import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useProviderContext } from '@/context/Provider'


const AddVisit = () => {

    const { prisoners, staff,visitors, addVisit} = useProviderContext()

    const navigate = useNavigate()

    const [staffId,setStaffId] = useState(14)
    const [prisonerId,setPrisonerId] = useState(2)
    const [visitor,setVisitor] = useState('')
    const [room,setRoom] = useState('')
    const [date,setDate] = useState('')

    const submitForm = (e) => {
        e.preventDefault();

        const newVisit = {
            visit:{
                staff_id:staffId,
                prisoner_id:prisonerId,
                visitor:visitor,
                room:room,
                date:date
            },
            
                
        }
        addVisit(newVisit)

        return navigate('/visits');
    }

  return (

    <section className="bg-gray-200">
      <div className="container m-auto max-w-2xl py-24">
        <div
          className="bg-custom1-25 px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
        >
          <form onSubmit={submitForm} >
            <h2 className="text-3xl text-center font-semibold mb-6">Add Visit</h2>
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
                >Prisoner Name</label
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
              <label htmlFor="type" className="block text-gray-700 font-bold mb-2"
                >Staff Name</label
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
                className="bg-custom1-500 hover:bg-custom1-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Visit
              </button>
            </div>
          </form>
        </div>
    </div>
</section>
  )
}

export default AddVisit