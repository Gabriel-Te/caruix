import express from 'express'
import getAll from '../controllers/car/getAll.js'
import getById from '../controllers/car/getById.js'
import create from '../controllers/car/create.js'
import remove from '../controllers/car/remove.js'
import edit from  '../controllers/car/edit.js'
import cookieJwtAuth from '../middlewares/cookieJwtAuth.js'


const router = express.Router()

router.get('/getAll', cookieJwtAuth, getAll)
router.get('/getById/:id', cookieJwtAuth, getById)
router.post('/create', cookieJwtAuth, create)
router.delete('/remove/:id', cookieJwtAuth, remove)
router.put('/edit/:id', cookieJwtAuth, edit)

export default router