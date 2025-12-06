import React from 'react'
import {createContext, useState, useContext, useEffect} from 'react'
import { useLocation } from 'react-router-dom'

const Context = createContext()

export const useProviderContext = () => useContext(Context)

export const Provider = ({children}) => {
    // const dir = useLocation()

    const [data, setData] = useState([])
    const [managers, setManagers] = useState([]);
    const [facilities, setFacilities] = useState([])
    const [staff, setStaff] = useState([])
    const [prisoners, setPrisoners] = useState([])
    const [visitors , setVisitors] = useState([])
    const [visits, setVisits] = useState([])
    const [prisonerCases, setPrisonerCases] = useState([])
    const [medicalRecords, setMedicalRecords] = useState([])
    const [inmateOffences, setInmateOffences] = useState([])   
    const [S2F, setS2F] = useState([])
    const [P2F, setP2F] = useState([])
    const [shifts,setShifts] = useState([])
    const [isManagers, setIsManagers] = useState()
    const [isPrisoners, setIsPrisoners] = useState()
    const [isStaff, setIsStaff] = useState()
    const [loading,setLoading] = useState(true)
    const [dir,setDir] = useState('')
    
    const addPrisoner = async (newPrisoner) => {
        const response = await fetch('/api/utils/addPC',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPrisoner)
        })
    }

    const addManager = async (newManager) => {
        const response = await fetch('/api/managers/add',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newManager)
        })
    }

    const addFacility = async (newFacility) => {
        const response = await fetch('/api/Facilities/add',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newFacility)
        })
    }

    const addVisit = async (newVisit) => {
        const response = await fetch('/api/Visits/add',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newVisit)
        })
    }

    const addStaff = async (newStaff) => {
        const response = await fetch('/api/staff/add',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newStaff)
        })
    }

    const getAllData = async () => {
        const response = await fetch('/api/utils/getAllData')
        const data = await response.json()
        return data
    }

    useEffect(() => {
        const fetchAllData = async () => {
            try{
                // console.log('Effect In Context')
                const data = await getAllData()
                setData(data)
                setManagers(data.managers || [])
                setFacilities(data.facilities || []);
                setStaff(data.staff || []);
                setPrisoners(data.prisoners || []);
                setVisitors(data.visitors || []);
                setVisits(data.visits || []);
                setPrisonerCases(data.prisonercases || []);
                setMedicalRecords(data.medicalrecords || []);
                setInmateOffences(data.offences || []);
                setS2F(data.s2fs || []);
                setP2F(data.p2fs || []);
                setShifts(data.shifts || []);
            } catch(error){
                console.log('Error Fetching Data', error)
            }
        }
        fetchAllData()
},[])
    
        
    

    const getProfile = async (accountId) => {
        const id = parseInt(accountId)
        const response = await fetch(`/api/profile/${id}`)
        const profile = await response.json()
        return profile;
    }



    const contextValue = {
    data,
    setData,
    managers,
    setManagers,
    facilities,
    setFacilities,
    staff,
    setStaff,
    prisoners,
    setPrisoners,
    visitors,
    setVisitors,
    visits,
    setVisits,
    prisonerCases,
    setPrisonerCases,
    medicalRecords,
    setMedicalRecords,
    inmateOffences,
    setInmateOffences,
    S2F,
    setS2F,
    P2F,
    setP2F,
    isManagers,
    isPrisoners,
    isStaff,
    setIsManagers,
    setIsPrisoners,
    setIsStaff,
    addManager,
    loading,
    setLoading,
    addFacility,
    addPrisoner,
    shifts,
    setShifts,
    addStaff,
    dir,
    setDir,
    getAllData,
    addVisit
    }
    
    

    return <Context.Provider value={contextValue}>
        {children}
    </Context.Provider>
}
