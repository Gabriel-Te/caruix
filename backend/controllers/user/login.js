import userModel from "../../models/userModel.js";
import jwt from 'jsonwebtoken'

const login = async (req, res) => {
    try {
        const userLoginForm = req.body
        const userLogged = await userModel.login(userLoginForm)
        console.log(userLogged, userLoginForm)
        if (userLogged) {
            const id = userLogged.id
            const token = jwt.sign({ id }, process.env.SECRET, {
                expiresIn: "1h"
            })
            res.cookie('token', token, {
                httpOnly: true,
            })
            console.log(token)
            return res.status(200).json({ message: 'confirmado'})
        }else{
            return res.status(401).json({ message: 'Credenciais inválidas'})
        }
    } catch (error) {
        console.error('Erro no login:',error)
        return res.status(500).json({ message : 'Erro interno do servidor'})
    }
}

export default login