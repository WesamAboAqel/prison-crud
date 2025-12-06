import Router from 'express'
import { addVisitor, deleteVisitor, getVisitor, getVisitors, updateVisitor} from './controller.js';


const router = Router();

router.get('/', getVisitors)

router.get('/:id', getVisitor)

router.post('/add', addVisitor)

router.delete('/delete/:id', deleteVisitor)

router.put('/update/:id', updateVisitor)

export default router;