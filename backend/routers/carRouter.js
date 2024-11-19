import express from 'express'
import getAll from '../controllers/car/getAll.js'
import getById from '../controllers/car/getById.js'
import create from '../controllers/car/create.js'
import remove from '../controllers/car/remove.js'
import edit from  '../controllers/car/edit.js'


const router = express.Router()

router.get('/getAll', getAll)
router.get('/getById/:id', getById)
router.post('/create', create)
router.delete('/remove/:id', remove)
router.put('/edit/:id', edit)

export default router