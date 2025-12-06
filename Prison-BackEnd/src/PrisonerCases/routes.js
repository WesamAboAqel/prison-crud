import Router from 'express'
import { addCase, deleteCase, getCase, getCases, updateCase,initData,forceEnd} from './controller.js';


const router = Router();

router.get('/', getCases)

router.get('/:id', initData,getCase,forceEnd)

router.post('/add', addCase)

router.delete('/delete/:id', deleteCase)

router.put('/update/:id', updateCase,forceEnd)

export default router;