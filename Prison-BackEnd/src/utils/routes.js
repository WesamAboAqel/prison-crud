import Router from 'express'
import { outputResponse, dataLog, bodyLog, initData, forceEnd, getShifts, getShift} from './controller.js';
import { addVisit, deleteVisit, getVisit, getVisits, updateVisit} from '../visits/controller.js';
import { addVisitor, deleteVisitor, getVisitor, getVisitors, updateVisitor} from '../visitors/controller.js';
import { addStaff, deleteStaff, getStaff, getAllStaff, updateStaff} from '../staff/controller.js';
import { addS2F, deleteS2FS, deleteS2FF, getAllS2F, getS2FS, getS2FF} from '../S2F/controller.js';
import { addRecord, deleteRecord, getRecord, getRecords, updateRecord} from '../records/controller.js';
import { addPrisoner, deletePrisoner, getPrisoner, getPrisoners, updatePrisoner} from '../prisoners/controller.js';
import { addCase, deleteCase, getCase, getCases, updateCase} from '../PrisonerCases/controller.js';
import { addP2F, deleteP2FP, deleteP2FF, getAllP2F, getP2FP, getP2FF,} from '../P2F/controller.js';
import { addOffence, deleteOffence, getOffence, getOffences, updateOffence} from '../offences/controller.js';
import { addManager, deleteManager, getManager, getManagers, updateManager } from '../managers/controller.js';
import { addFacility, deleteFacility, getFacility, getFacilities, updateFacility} from '../facilities/controller.js';


const router = Router();

router.post('/AddMF',addFacility, addManager, updateFacility, updateManager)

router.get('/getAllData', initData, getVisits,  getVisitors,  getAllStaff,  getAllS2F,  getRecords,  getPrisoners,  getCases,  getAllP2F,  getOffences,  getManagers,  getFacilities, getShifts, outputResponse)

router.get('getShifts', getShifts, forceEnd)

router.get('/getShift/:id', initData, getShift, forceEnd)


router.post('/addPC', initData,  addPrisoner, addCase,  updatePrisoner, forceEnd)
export default router;