import Router from 'express'
import { addS2F, deleteS2FS, deleteS2FF, getAllS2F, getS2FS, getS2FF,} from './controller.js';


const router = Router();

router.get('/', getAllS2F)

router.get('/staff/:staff_id', getS2FS)

router.get('/facility/:facility_id', getS2FF)

router.post('/add', addS2F)

router.delete('/delete/staff/:staff_id', deleteS2FS)

router.delete('/delete/facility/:facility_id', deleteS2FF)


export default router;