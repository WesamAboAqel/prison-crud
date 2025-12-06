import Router from 'express'
import { addFacility, deleteFacility, getFacility, getFacilities, updateFacility, forceEnd,initData} from './controller.js';


const router = Router();

router.get('/', getFacilities,forceEnd)

router.get('/:id', initData,getFacility,forceEnd)

router.post('/add', addFacility,forceEnd)

router.delete('/delete/:id', deleteFacility)

router.put('/update/:id', updateFacility,forceEnd)

export default router;