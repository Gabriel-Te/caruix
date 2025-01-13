import userModel from "../../models/userModel.js";

const create = async(req, res) => {
    try {
        const userForm = req.body
        const newUser = await userModel.create(userForm)
        res.status(200).json({message: 'usuário criado com sucesso', newUser})
    } catch (error) {
        console.log(error)
    }
}

export default create