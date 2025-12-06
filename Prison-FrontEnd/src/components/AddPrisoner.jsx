import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useProviderContext } from '@/context/Provider'

const AddPrisoner = () => {
    const {prisoners,prisonerCases,addPrisoner} = useProviderContext()

    

    const [loading, setLoading] = useState(true)

    const navigate = useNavigate()

    const [prisonerName,setPrisonerName] = useState('')
    const [nationality,setNationality] = useState('Jordanian')
    const [location,setLocation] = useState('Irbid')
    const [gender,setGender] = useState('Male')
    const [dob,setDob] = useState('')
    const [caseId,setCaseId] = useState(2)
    const [caseDescription,setCaseDescription] =useState()

    const locations = ['Irbid','Amman','Al Karak','Aqaba']
    const countries = ['Jordanian', 'Syrian', 'American', 'Palestinian']
    const sex = ['Male','Female',]

    const submitForm = (e) => {
        e.preventDefault();
        console.log(caseId)
        const newPrisoner = {
            prisoner:{
                fullname: prisonerName,
                nationality: nationality,
                gender:gender,
                dob: dob,
                location: location
              },
            prisonercase: { 
                description:caseDescription
            }
    }

        addPrisoner(newPrisoner)

        return navigate('/prisoners');
    }
  return (
    <>
    <section className="bg-custom1-50">
      <div className="container m-auto max-w-2xl py-24">
        <div
          className="bg-custom1-25 px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
        >
          <form onSubmit={submitForm} >
            <h2 className="text-3xl text-center font-semibold mb-6">Add Prisoner</h2>
    <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2"
                >Prisoner Name</label
              >
              <input
                type="text"
                id="title"
                name="title"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Food Court"
                required
                value={prisonerName}
                onChange={(e)=>setPrisonerName(e.target.value)}
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
              <label htmlFor="type" className="block text-gray-700 font-bold mb-2"
                >Gender</label
              >
              <select
                id="salary"
                name="salary"
                className="border rounded w-full py-2 px-3"
                required
                value={gender}
                onChange={(e)=>setGender(e.target.value)}
              >

                {sex.map((gen)=> (
                    <option key={gen} value={gen}>{gen}</option>
                ))}
                
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="type" className="block text-gray-700 font-bold mb-2"
                >Nationality</label
              >
              <select
                id="salary"
                name="salary"
                className="border rounded w-full py-2 px-3"
                required
                value={nationality}
                onChange={(e)=>setNationality(e.target.value)}
              >

                {countries.map((country)=> (
                    <option key={country} value={country}>{country}</option>
                ))}
                
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="company" className="block text-gray-700 font-bold mb-2"
                >Date of Birth</label
              >
              <input
                type="text"
                id="company"
                name="company"
                className="border rounded w-full py-2 px-3"
                placeholder="eg. 100"
                value={dob}
                onChange={(e)=>setDob(e.target.value)}
              />
            </div>

            <div className="mb-4">
              
            <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-2"
                >Description</label
              >
              <textarea
                id="description"
                name="description"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="Add any job duties, expectations, requirements, etc"
                value={caseDescription}
                onChange={(e)=>setCaseDescription(e.target.value)}
              ></textarea>
              
            </div>

        
            <div>
              <button
                className="bg-custom1-500 hover:bg-custom1-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Prisoner
              </button>
            </div>
          </form>
        </div>
    </div>
</section>
            
    </>
  )
}

export default AddPrisoner