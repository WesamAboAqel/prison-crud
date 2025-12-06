import Router from 'express'
import { addOffence, deleteOffence, getOffence, getOffences, updateOffence} from './controller.js';


const router = Router();

router.get('/', getOffences)

router.get('/:id', getOffence)

router.post('/add', addOffence)

router.delete('/delete/:id', deleteOffence)

router.put('/update/:id', updateOffence)

export default router;