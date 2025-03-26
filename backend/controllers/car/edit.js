import carModel from "../../models/carModel.js";

const edit = async(req, res) => {
    try {
        const id = parseInt(req.params.id)
        const FormCar = await {id, ...req.body}
        const validateCar = carModel.validateCarEdit(FormCar)
        if (!validateCar.success) {
            const errors = []
            validateCar.error.issues.forEach((issue) => errors.push(issue.message))
            return res.status(400).json({
                message : 'erro no formulario',
                errors: errors
            })
        }
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