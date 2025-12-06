import Router from 'express'
import { addP2F, deleteP2FP, deleteP2FF, getAllP2F, getP2FP, getP2FF,} from './controller.js';


const router = Router();

router.get('/', getAllP2F)

router.get('/prisoner/:prisoner_id', getP2FP)

router.get('/facility/:facility_id', getP2FF)

router.post('/add', addP2F)

router.delete('/delete/prisoner/:prisoner_id', deleteP2FP)

router.delete('/delete/facility/:facility_id', deleteP2FF)


export default router;