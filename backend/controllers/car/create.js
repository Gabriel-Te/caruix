import carModel from "../../models/carModel.js"


const create = async(req, res) => {
    try{
    const carForm = req.body
    const newCar = await carModel.create(carForm)
    res.status(200).json({message: 'veículo criado com sucesso', newCar})
    }catch(error) {
        res.status(500).json({message :"erro ao criar o veículo", error : error.message}) 
    }
}


export default create