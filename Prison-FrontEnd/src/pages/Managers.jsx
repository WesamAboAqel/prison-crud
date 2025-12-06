import React from 'react'
import { useEffect, useState } from 'react'
import { useProviderContext } from '@/context/Provider'
import Cards from '@/components/Cards'
import { useLocation } from 'react-router-dom';


const Managers = ({isManagers = false,isPrisoners = false,isStaff = false}) => {
    const {setIsManagers, setIsPrisoners, setIsStaff,loading, setLoading,getAllData} = useProviderContext()
    const directory = useLocation();
    // window.location.reload();

    useEffect(()=>{
      const load = async () => {
          try{
            await getAllData()
            
            await new Promise(resolve => setTimeout(resolve, 1000));
        }catch(error){
            console.log(error)
        }
      } 
      load()
    },[])
    

  return (
    <>
<Cards isManagers={true}/>
    </>
  )
}

export default Managers