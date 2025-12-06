import Router from 'express'
import { addManager, deleteManager, forceEnd, getManager, getManagers, updateManager , initData} from './controller.js';

const router = Router();

router.get('/', getManagers)

router.get('/:id',initData, getManager, forceEnd)

router.post('/add', initData,addManager, forceEnd)

router.delete('/delete/:id', deleteManager)

router.put('/update/:id', updateManager,forceEnd)

export default router;