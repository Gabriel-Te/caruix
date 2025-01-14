import userModel from "../../models/userModel.js";

const edit = async(req, res) => {

    try {
        const id = parseInt(req.params.id)
        const FormUser = await {id, ...req.body.FormValues}
        const editUser = await userModel.edit(FormUser)
        res.status(200).json({
            message: `usuário ${id} editado com sucesso`,
            editUser
        })
    } catch (error) {
        console.log('erro ao editar o usuário', error)
    }
}

export default edit