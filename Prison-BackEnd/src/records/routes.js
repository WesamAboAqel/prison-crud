import Router from 'express'
import { addRecord, deleteRecord, getRecord, getRecords, updateRecord} from './controller.js';


const router = Router();

router.get('/', getRecords)

router.get('/:id', getRecord)

router.post('/add', addRecord)

router.delete('/delete/:id', deleteRecord)

router.put('/update/:id', updateRecord)

export default router;