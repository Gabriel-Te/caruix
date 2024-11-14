import carModel from "../../models/carModel.js";

const getById = async(req, res) => {
    try {
        const id = parseInt(req.params.id)
        console.log(id)
        const carPerID = await carModel.getById(id)
        return res.json({
            success: `car number ${id} found succesfully`,
            carPerID
    })
    } catch (error) {
        res.status(500).json({message: 'erro ao encontrar o carro', error})
    }
}

export default getById