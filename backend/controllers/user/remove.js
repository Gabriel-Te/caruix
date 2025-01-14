import userModel from "../../models/userModel.js";

const remove = async(req,res) => {
    try {
        const id = parseInt(req.params.id)
        const removeUser = await userModel.remove(id)
        res.status(200).json({message : `usuário ${id} removido`, removeUser})
    } catch (error) {
        res.status(500).json({message : `usuário ${5} não encontrado`, error})
    }
}

export default remove