import carModel from '../../models/carModel.js'

const getAll = async(req, res) => {
    try{
        const cars = await carModel.getAll()
        return res.json({
            success: "cars have send successfully",
            cars
        })
    }catch(error){
        res.status(500).json({error: 'erro ao buscar os carros'})
    }
};

export default getAll