import carModel from "../../models/carModel.js"


const create = async(req, res) => {
    try{
    const carForm = req.body
    const validateCar = carModel.validateCarCreate(carForm)
    if (!validateCar.success) {
        const errors = []
        validateCar.error.issues.forEach((issue) => errors.push(issue.message))
        return res.status(400).json({
            message : 'erro no formulario',
            errors: errors
        })
    }
    const newCar = await carModel.create(carForm)
    return res.status(200).json({message: 'veículo criado com sucesso', newCar})
    }catch(error) {
        return res.status(500).json({message :"erro ao criar o veículo", error : error}) 
    }
}


export default create