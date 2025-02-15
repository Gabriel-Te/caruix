import jwt from 'jsonwebtoken'

const cookieJwtAuth = (req, res, next) => {
    const token = req.cookies.token
    try {
        const decoded = jwt.verify(token, process.env.SECRET)
        req.id = decoded.id
        next()
    } catch (error) {
        console.error("Erro de autenticação:", error.message);
        res.clearCookie("token")
        return res.status(401).json({tokenExpired : 'Token Inválido ou expirado',})
    }
}

export default cookieJwtAuth