
const logout = async (req, res) => {
    try {
        res.clearCookie('token')
        return res.json({message: 'sucesso ao limpar o token'})
    } catch (error) {
        res.status(500).json('Erro ao remover o token')
    }
}

export default logout