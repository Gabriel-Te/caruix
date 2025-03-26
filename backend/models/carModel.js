import { PrismaClient } from '@prisma/client'
import { z } from 'zod'

const prisma = new PrismaClient()
const CarSchema = z.object({
    id : z.number({
        required_error: 'ID é obrigatório',
        invalid_type_error: 'ID deve ser um numero'
    }),
    brand: z.string({
        required_error: 'Marca é obrigatório',
        invalid_type_error: 'Marca deve ser uma string'
    })
    .max(50, {message : "Marca deve ter tamanho máximo de 50 caracteres"}),
    model: z.string({
        required_error: 'Modelo é obrigatório',
        invalid_type_error: 'Modelo deve ser uma string'
    })
    .max(100, {message: "Modelo deve ter tamanho máximo de 100 caracteres"}),
    price: z.number({
        required_error: 'Preço é obrigatório',
        invalid_type_error: 'Preço deve ser um número'
    })
    .min(4, {message: "Preço deve ter tamanho mínimo de 4 caracteres"})
    .max(99999999999, {message : "Preço deve ter tamanho máximo de 11 caracteres"}),
    status: z.boolean({
        required_error: "Status é obrigatório",
        invalid_type_error : "Status precisa ser booleano"
    }),
    image: z.string({
        required_error: "Imagem é obrigatório",
        invalid_type_error: "imagem tem que ser String"
    })
    .min(3, {message : "Imagem deve ter tamanho mínimo de 3 caracteres"})
    .url("Imagem deve ter uma URL válida")
});

const validateCarCreate = (carForm) => {
    const partialCarCreate = CarSchema.partial({id: true})
    return partialCarCreate.safeParse(carForm)
}

const validateCarEdit = (carForm) => {
    return CarSchema.safeParse(carForm)
}



const getAll = async () => {
    try {
        return await prisma.car.findMany()
    } catch (error) {
        console.log(error)
    }
};

const getById = async (id) => {
    try {
        return await prisma.car.findUnique({
            where: {
                id: id
            }
        })
    } catch (error) {
        console.error("Erro no Prisma:", error);
        throw error;
    }
};

const create = async (carForm) => {
    try {
        return await prisma.car.create({
            data: {
                brand: carForm.brand,
                model: carForm.model,
                price: carForm.price,
                status: carForm.status,
                image: carForm.image
            }
        })
    } catch (error) {
        throw error,
        console.log('erro ao executar isso', carForm, error)
    }
};

const remove = async (id) => {
    try {
        return await prisma.car.delete({
            where: {
                id: id
            }
        })
    } catch (error) {
        throw error
    }
};

const edit = async (editedCar) => {
    try {
        return await prisma.car.update({
            where: {
                id: editedCar.id
            },
            data: {
                brand: editedCar.brand,
                model: editedCar.model,
                price: editedCar.price,
                status: editedCar.status
            }
        }),
            console.log(editedCar.status)
    } catch (error) {
        throw error
    }
};

export default { getAll, getById, create, remove, edit, validateCarCreate, validateCarEdit };