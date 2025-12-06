import React from 'react'
import {useState,useEffect} from 'react'
import { useParams, useLoaderData, useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { FaArrowLeft, FaMapMarker } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';






const OneStaff = () => {

    const {id} = useParams();

    const {staff, manager, facility,shift} = useLoaderData()

    const [loading,setLoading] = useState(true)
    // const [manager,setManager] = useState({})
    // const [facility,setFacility] = useState({})
    // const [staff,setStaff] = useState({})
    // const [shift,setShift] = useState({})

    const navigate = useNavigate();

    useEffect(()=>{
        const load = async () =>{
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

    const deleteManager = async (id) => {
    const response = await fetch(`/api/managers/delete/${id}`, {
      method: 'DELETE'
    })
    return 
  }

    const deleteFacility = async (id) => {
        const response = await fetch(`/api/facilities/delete/${id}`, {
        method: 'DELETE'
        })
        return 
  }

  const deleteStaff = async (id) => {
    const response = await fetch(`/api/staff/delete/${id}`, {
        method: 'DELETE'})
    return
  }

    const onManagerDeleteClick = (managerId) => {
        const confirm = window.confirm('Are you are you want to delete this listing?')

        if(!confirm)return;

        deleteManager(managerId)

        toast.success('Manager deleted successfully')
        return navigate('/staff')
    }

    const onFacilityDeleteClick = (facilityId) => {
        const confirm = window.confirm('Are you are you want to delete this listing?')

        if(!confirm)return;

        deleteFacility(facilityId)

        toast.success('Facility deleted successfully')
        return navigate('/staff')
    }

    const onStaffDeleteClick = (staffId) => {
        const confirm = window.confirm('Are you are you want to delete this listing?')

        if(!confirm)return;

        deleteStaff(staffId)

        toast.success('Staff deleted successfully')
        return navigate('/staff')
    }
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
    { loading ? (<Spinner loading={loading} />) : (
    <section className="bg-gray-200">
      <div className="container m-auto py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-6">
          
            <div
              className="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
            >
              
              <h1 className="text-3xl font-bold mb-8">
                {manager.name}
              </h1>
              <div
                className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
              >
                <FaMapMarker className='text-orange-700 mr-1'/>
                <p className="text-orange-700 mb-5">{manager.location}</p>
              </div>

              <h3 className="text-indigo-800 text-lg font-bold mb-6">
                Staff Count: {manager.staff_count}
              </h3>
<hr className="my-10" />

            <h3 className="text-xl font-bold mb-6">Manage Manager</h3>
              <Link
                to={`/staff/edit/${staff.id}`}
                className="bg-green-700 hover:bg-green-800 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >Edit Staff</Link
              >
              <button
                className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block" onClick={() => onStaffDeleteClick(staff.id)}
              >
                Delete Manager
              </button>
            </div>
            
            <div
              className="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
            >
              
              <h1 className="text-3xl font-bold mb-8">
                {staff.fullname}
              </h1>
              <div
                className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
              >
                <FaMapMarker className='text-orange-700 mr-1'/>
                <p className="text-orange-700 mb-5">{facility.location}</p>
              </div>

              <h3 className="text-indigo-800 text-lg font-bold mb-6">
                Manager Name: {manager.name}
              </h3>

              <p className="mb-4">
               
              </p>

<hr className="my-10" />
            <h3 className="text-xl font-bold mb-6">Manage Staff</h3>
              <Link
                to={`/managers/edit/${manager.id}`}
                className="bg-green-700 hover:bg-green-800 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >Edit Staff</Link
              >
              <button
                className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block" onClick={() => onManagerDeleteClick(manager.id)}
              >
                Delete Staff
              </button>


            </div>

            
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6">Facility Info</h3>

              <h2 className="text-2xl">{facility.name}</h2>

              <p className="my-2">
                {facility.location}
              </p>

              <hr className="my-4" />

              <h3 className="text-xl">Manager Name:</h3>

              <p className="my-2 bg-custom1-100 p-2 font-bold">
                {manager.name}
              </p>

              <h3 className="text-xl">Facility State:</h3>

              <p className="my-2 bg-custom1-100 p-2 font-bold">{facility.state}</p>

              <h3 className="text-xl font-bold mb-6">Manage Facility</h3>
              <Link
                to={`/facilities/edit/${facility.id}`}
                className="bg-green-700 hover:bg-green-800 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >Edit Facility</Link
              >
              <button
                className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block" onClick={() => onFacilityDeleteClick(facility.id)}
              >
                Delete Facility
              </button>


            </div>

            
            
          
        </div>
      </div>
    </section>
    )}
     </>
  )
}

export default OneStaff