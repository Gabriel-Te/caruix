import express from 'express'
import getAll from '../controllers/car/getAll.js'
import getById from '../controllers/car/getById.js'
import create from '../controllers/car/create.js'

const router = express.Router()

router.get('/getAll', getAll)
router.get('/getById/:id', getById)
router.post('/create', create)

export default router