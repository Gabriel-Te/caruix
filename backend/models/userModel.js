import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const getAll = async() => {
    try {
        return await prisma.user.findMany()
    } catch (error) {
        throw error
    }
}

const create = async(userForm) => {
    try {
        console.log(userForm)
        return await prisma.user.create({
            data:{
                name: userForm.name,
                email: userForm.email,
                password: userForm.password
            }
        })
    } catch (error) {
        throw error
    }
}



export default {getAll,create}