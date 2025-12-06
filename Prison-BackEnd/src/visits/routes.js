import Router from 'express'
import { addVisit, deleteVisit, forceEnd, getVisit, getVisits, updateVisit, initData} from './controller.js';


const router = Router();

router.get('/', initData,getVisits)

router.get('/:id', initData,getVisit,forceEnd)

router.post('/add', addVisit,forceEnd)

router.delete('/delete/:id', deleteVisit)

router.put('/update/:id', updateVisit,forceEnd)

export default router;