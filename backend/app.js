import express from 'express';
import dotenv from 'dotenv'
//const {PrismaClient} = require('@prisma/client')
//const prisma = new PrismaClient
import carRouter from './routers/carRouter.js'

const app = express();
dotenv.config()
import cors from 'cors'
app.use(cors({origin: '*'}));

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/car', carRouter)

app.listen(3002, () => {
    console.log(`executando servidor na porta ${process.env.PORT}`)
})