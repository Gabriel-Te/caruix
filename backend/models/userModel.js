import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


const login = async(userLoginForm) => {
    try {
        return await prisma.user.findUnique({
            where: {
                email : userLoginForm.email,
                password : userLoginForm.password
            }
        })
    } catch (error) {
        throw error
    }
}

const getAll = async() => {
    try {
        return await prisma.user.findMany()
    } catch (error) {
        throw error
    }
}

const getById = async(id) => {
    try {
        return await prisma.user.findUnique({
            where: {
                id: id
            }
        })
    } catch (error) {
        throw error
    }
}

const create = async(userForm) => {
    try {
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

const edit = async(userForm) => {
    try {
        return await prisma.user.update({
            where: {
                id: userForm.id
            },
            data: {
                name: userForm.name,
                email: userForm.email,
                password: userForm.password,
                image: userForm.image
            }
        })
    } catch (error) {
        throw error
    }
}

const remove = async(id) => {
    try {
        return await prisma.user.delete({
            where: {
                id: id
            }
        })
    } catch (error) {
        throw error
    }
}






export default {getAll,getById,create,edit,remove, login}