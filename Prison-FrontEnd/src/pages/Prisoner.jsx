import React from 'react'
import {useState,useEffect} from 'react'
import { useParams, useLoaderData, useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { FaArrowLeft, FaMapMarker } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { format } from 'date-fns'



const Prisoner = () => {

    const {id} = useParams();

    const {prisoner, prisonerCase} = useLoaderData()

    
    // const [prisoner,setPrisoner] = useState({})
    // const [prisonerCase,setPrisonerCase] = useState({})

    const navigate = useNavigate();

    const [loading,setLoading] = useState(true)

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
    // console.log(prisoner)
    
    const deletePrisoner = async (id) => {
    const response = await fetch(`/api/prisoners/delete/${id}`, {
      method: 'DELETE'
    })
    return 
  }

    const deleteCase = async (id) => {
    const response = await fetch(`/api/prisonercases/delete/${id}`, {
      method: 'DELETE'
    })
    return 
  }
    
    

    const onPrisonerDeleteClick = (PrisonerId) => {
        const confirm = window.confirm('Are you are you want to delete this listing?')

        if(!confirm)return;

        deletePrisoner(PrisonerId)

        toast.success('Prisoner deleted successfully')
        return navigate('/Prisoners')
    }

    const onCaseDeleteClick = (CaseId) => {
        const confirm = window.confirm('Are you are you want to delete this listing?')

        if(!confirm)return;

        deleteCase(CaseId)

        toast.success('Facility deleted successfully')
        return navigate('/Prisoners')
    }
    
    
  return (
    <>
     <section>
      <div className="container m-auto py-6 px-6">
        <Link
          to="/Prisoners"
          className="text-custom1-900 hover:text-custom1-700 flex items-center"
        >
          <FaArrowLeft className="mr-2"/> Back to Prisoners
        </Link>
      </div>
    </section>
    { loading ? (<Spinner loading={loading} />) : (
    <section className="bg-gray-200">
      <div className="container m-auto py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6">
          <main>
            <div
              className="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
            >
             <div className="text-gray-500 mb-4">{prisoner.gender}</div> 
              <h1 className="text-3xl font-bold mb-8">
                {prisoner.fullname}
              </h1>
              <div
                className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
              >
                <FaMapMarker className='text-orange-700 mr-1'/>
                <p className="text-orange-700 mb-5">{prisoner.location}</p>
              </div>

              <h3 className="text-indigo-800 text-lg font-bold mb-6">
                Date of Birth: {format(new Date(prisoner.dob), 'dd-MM-yyyy')}
              
              </h3>

              <hr className="my-4" />

              <h3 className="text-xl font-bold mb-6">Manage Prisoner</h3>
              <Link
                to={`/Prisoners/edit/${prisoner.id}`}
                className="bg-green-700 hover:bg-green-800 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >Edit Prisoner</Link
              >
              <button
                className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block" onClick={() => onPrisonerDeleteClick(prisoner.id)}
              >
                Delete Prisoner
              </button>

            </div>

            

            
          </main>

          
          <aside>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6">Criminal Record Description</h3>

              <p className="text-2xl whitespace-pre-line">{prisonerCase.description}</p>

              
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mt-5">
              <h3 className="text-xl font-bold mb-6">Medical Records</h3>

              <p className="text-2xl text-red-500 whitespace-pre-line">to be implemented later...</p>

              
            </div>

            
            
          </aside>
        </div>
      </div>
    </section>
    )}
     </>
  )
}

export default Prisoner