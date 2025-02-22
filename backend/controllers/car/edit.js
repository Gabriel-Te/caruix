import carModel from "../../models/carModel.js";

const edit = async(req, res) => {
    try {
        const id = parseInt(req.params.id)
        const FormCar = await {id, ...req.body}  

        const editedCar = await carModel.edit(FormCar)
        return res.status(200).json({
            message: 'carro editado com sucesso', 
            editedCar
        })
    } catch (error) {
        console.error(error.detail)
        res.status(500).json({"message" : 'erro ao editar veículo', error : error.message})
    }
}

export default edit