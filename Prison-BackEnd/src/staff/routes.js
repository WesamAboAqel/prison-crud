import Router from 'express'
import { addStaff, deleteStaff, getStaff, getAllStaff, updateStaff, forceEnd,initData} from './controller.js';


const router = Router();

router.get('/', getAllStaff)

router.get('/:id', initData,getStaff,forceEnd)

router.post('/add', addStaff, forceEnd)

router.delete('/delete/:id', deleteStaff)

router.put('/update/:id', updateStaff,forceEnd)

export default router;