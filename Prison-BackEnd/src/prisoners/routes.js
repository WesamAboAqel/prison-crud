import Router from 'express'
import { addPrisoner, deletePrisoner, forceEnd, getPrisoner, getPrisoners, updatePrisoner, initData} from './controller.js';


const router = Router();

router.get('/', getPrisoners)

router.get('/:id', initData,getPrisoner,forceEnd)

router.post('/add', addPrisoner, forceEnd)

router.delete('/delete/:id', deletePrisoner)

router.put('/update/:id', updatePrisoner,forceEnd)

export default router;