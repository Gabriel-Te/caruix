import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

const getAll = async() => {
    try{
    return await prisma.cars.findMany()
    }catch(error){
        console.log(error)
    }
}

const getById = async(id) => {
    try {
        return await prisma.cars.findUnique({
            where:{
                id : id
            }
        })
    } catch (error) {
        console.error("Erro no Prisma:", error);
        throw error;
    }
}

export default {getAll, getById}