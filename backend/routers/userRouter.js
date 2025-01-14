import express from 'express'
import create from '../controllers/user/create.js'
import getAll from '../controllers/user/getAll.js'
import getById from '../controllers/user/getById.js'
import edit from '../controllers/user/edit.js'
import remove from '../controllers/user/remove.js'

const router = express.Router()

router.get('/getAll', getAll)
router.get('/getById/:id', getById)
router.post('/create', create)
router.put('/edit/:id', edit)
router.delete('/remove/:id', remove)



export default router