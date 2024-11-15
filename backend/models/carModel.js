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

const create = async(carForm) => {
    try{
        return await prisma.cars.create({
            data : {
                brand: carForm.brand,
                model : carForm.model,
                price: carForm.price,
                status: carForm.status
            }
        })
    }catch(error){
        throw error
    }
}

const remove = async(id) => {
    try {
        return await prisma.cars.delete({
            where : {
                id : id
            }
        })
    } catch (error) {
        throw error
    }
}

export default {getAll, getById, create, remove}