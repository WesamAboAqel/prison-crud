import React from 'react'
import { useProviderContext } from '@/context/Provider'
import MainLayout from './layouts/MainLayout'
import {Route,
        createBrowserRouter,
        createRoutesFromElements,
        RouterProvider,
        useNavigate} from 'react-router-dom';
import Homepage from './pages/Homepage';
import AddManager from './components/AddManager';
import AddFacility from './components/AddFacility';
import AddStaff from './components/AddStaff';
import Managers from './pages/Managers'
import Prisoners from './pages/Prisoners'
import Staff from './pages/Staff'
import Visits from './pages/Visits'
import { Provider } from '@/context/Provider';
import AddPrisoner from './components/AddPrisoner';
import Manager from './pages/Manager';
import Prisoner from './pages/Prisoner';
import OneStaff from './pages/OneStaff';
import EditManager from './pages/EditManager';
import EditPrisoner from './pages/EditPrisoner';
import EditStaff from './pages/EditStaff';
import EditFacility from './pages/EditFacility';
import EditVisits from './pages/EditVisits';
import AddVisit from './components/AddVisit';






const App = () => {
  
  const ManagerLoader = async (id) => {
          const responseManager = await fetch(`/api/managers/${id}`)
          const managerData = await responseManager.json();

          return {manager: managerData.manager}
      }
  
      const FacilityLoader = async (id) =>{
          const responseFacility = await fetch(`/api/facilities/${id}`);
          const facilityData = await responseFacility.json();
  
          return {facility: facilityData.facility}
      }
  
      const OneStaffLoader = async (id) => {
        
          const responseStaff = await fetch(`/api/staff/${parseInt(id)}`)
          const staffData = await responseStaff.json();
          
          return {staff: staffData.staff}
      }
  
      const ShiftLoader = async (id) => {
          const responseShift = await fetch(`/api/utils/getShift/${id}`);
          const shiftData = await responseShift.json();
  
          return {shift: shiftData.shift}
      }
  
      const PrisonerLoader = async (id) => {
          const responsePrisoner = await fetch(`/api/prisoners/${id}`)
          const prisonerData = await responsePrisoner.json();
          
          return {prisoner: prisonerData.prisoner}
      }

      const VisitLoader = async ({params : {id}}) => {
          const responseVisit = await fetch(`/api/visits/${id}`)
          const visitData = await responseVisit.json();
          console.log(visitData)
          return {visit: visitData.visit}
      }
  
      const PrisonerCaseLoader = async (id) => {
          const responsePrisonerCase = await fetch(`/api/prisonercases/${id}`);
          const prisonerCaseData = await responsePrisonerCase.json();
  
          return {prisonerCase: prisonerCaseData.prisonercase}
      }
      
      const PrisonerPageLoader = async ({params}) => {
        console.log(params.id)
          const {prisoner} = await PrisonerLoader(parseInt(params.id))
          const {prisonerCase} = await PrisonerCaseLoader(prisoner.prisonercase)
  
          return {prisoner, prisonerCase};
      }
  
      const ManagerPageLoader = async ({params}) => {
          const newid = parseInt(params.id)
          const {manager} = await ManagerLoader(newid)
          const {facility} = await FacilityLoader(parseInt(manager.facility_id))
  
          return {manager,facility}
      }

      const FacilityPageLoader = async ({params}) => {
          const newid = parseInt(params.id)
          const {facility} = await FacilityLoader(newid)
          const {manager} = await ManagerLoader(parseInt(facility.manager_id))
          
  
          return {manager,facility}
      }
  
      const StaffPageLoader = async ({params}) => {
        console.log(params.id)
          const {staff} = await OneStaffLoader(parseInt(params.id))
          const {manager} = await ManagerLoader(staff.manager_id)
          const {facility} = await FacilityLoader(staff.facility_id)
          const {shift} = await ShiftLoader(staff.shift)
          
          return {staff,manager,facility,shift}
      }

      const updateManager = async (newManager) => {
        const response = await fetch(`/api/managers/update/${newManager.manager.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newManager)
      })
      }

      const updatePrisoner = async (newPrisoner) => {
        const responsePrisoner = await fetch(`/api/prisoners/update/${newPrisoner.prisoner.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPrisoner)
      })
        const responseCase = await fetch(`/api/prisonercases/update/${newPrisoner.prisonercase.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPrisoner)
      })

      }

      const updateStaff = async (newStaff) => {
        const response = await fetch(`/api/staff/update/${newStaff.staff.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newStaff)
      })
      }

      const updateVisit = async (newVisit) => {
        const response = await fetch(`/api/visits/update/${newVisit.visit.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newVisit)
      })
      }

      const updateFacility = async (newFacility) => {
        const response = await fetch(`/api/facilities/update/${newFacility.facility.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newFacility)
      })
      }
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      
      <Route path='/' element={<MainLayout />} >
      <Route index element={<Homepage />} />
      <Route path='/managers/add' element={<AddManager/>} />
      <Route path='/facilities/add' element={<AddFacility/>} />
      <Route path='/prisoners/add' element={<AddPrisoner/>} />
      <Route path='/staff/add' element={<AddStaff/>} />
      <Route path='/visits/add' element={<AddVisit/>} />
      <Route path='/managers' element={<Managers isManagers={true}/>} />
      <Route path='/prisoners' element={<Prisoners isPrisoners={true}/>} />
      <Route path='/staff' element={<Staff isStaff={true}/>} />
      <Route path='/visits' element={<Visits isVisits={true}/>} />
      <Route path='/managers/:id' element={<Manager />} loader={ManagerPageLoader} />
      <Route path='/managers/edit/:id' element={<EditManager updateManager={updateManager}/>} loader={ManagerPageLoader} />
      <Route path='/prisoners/:id' element={<Prisoner />} loader={PrisonerPageLoader} />
      <Route path='/prisoners/edit/:id' element={<EditPrisoner updatePrisoner={updatePrisoner} />} loader={PrisonerPageLoader} />
      <Route path='/staff/:id' element={<OneStaff />} loader={StaffPageLoader} />
      <Route path='/staff/edit/:id' element={<EditStaff updateStaff={updateStaff}/>} loader={StaffPageLoader} />
      <Route path='/facilities/edit/:id' element={<EditFacility updateFacility={updateFacility}/>} loader={FacilityPageLoader} />
      <Route path='/visits/edit/:id' element={<EditVisits updateVisit={updateVisit}/>} loader={VisitLoader} />
      
      
      </Route>
    )
  );

  return (
    
    <RouterProvider router ={router}/>
    
  )
}

export default App
