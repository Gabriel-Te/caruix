import express from 'express'
import create from '../controllers/user/create.js'
import getAll from '../controllers/user/getAll.js'
import getById from '../controllers/user/getById.js'
import edit from '../controllers/user/edit.js'
import remove from '../controllers/user/remove.js'
import login from '../controllers/user/login.js'
import logout from '../controllers/user/logout.js'
import cookieJwtAuth from '../middlewares/cookieJwtAuth.js'

const router = express.Router()

router.get('/logout', logout)
router.post('/login', login)
router.get('/getAll', getAll)
router.get('/getById', cookieJwtAuth, getById)
router.post('/create', create)
router.put('/edit/:id', cookieJwtAuth, edit)
router.delete('/remove/:id', remove)



export default router