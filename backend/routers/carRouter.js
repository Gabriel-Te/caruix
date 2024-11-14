import express from 'express'
import getAll from '../controllers/car/getAll.js'
import getById from '../controllers/car/getById.js'

const router = express.Router()

router.get('/getAll', getAll)
router.get('/getById/:id', getById)
export default router