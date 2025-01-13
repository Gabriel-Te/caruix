import express from 'express'
import create from '../controllers/user/create.js'
import getAll from '../controllers/user/getAll.js'

const router = express.Router()

router.get('/getAll', getAll)
router.post('/create', create)




export default router