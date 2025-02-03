import express from 'express';
import dotenv from 'dotenv'
//const {PrismaClient} = require('@prisma/client')
//const prisma = new PrismaClient
import cookieParser from 'cookie-parser';
import carRouter from './routers/carRouter.js'
import userRouter from './routers/userRouter.js'


const app = express();
const PORT = process.env.PORT
dotenv.config()
import cors from 'cors'
app.use(cookieParser());
app.use(cors({origin: 'http://localhost:3000', credentials: true}));
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/car', carRouter)
app.use('/user',userRouter)

app.listen(PORT, () => {
    console.log(`executando servidor na rota ${process.env.BASE_BACKEND_URL}`)
})