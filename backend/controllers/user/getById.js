import userModel from "../../models/userModel.js";

const getById = async(req, res) => {
    try {
        const id = parseInt(req.params.id)
        const userPerId = await userModel.getById(id)
        return res.json({
            success: `usuário ${id} encontrado com sucesso`,
            userPerId
        })
    } catch (error) {
        throw error
    }
}

export default getById
