import userModel from "../../models/userModel.js";

const getAll = async(req, res) => {
try {
    const users = await userModel.getAll()
    return res.json({
        success: "usuários encontrados com sucesso",
        users
    })

} catch (error) {
    throw error
}
}

export default getAll