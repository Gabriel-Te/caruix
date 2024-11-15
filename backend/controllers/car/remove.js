import carModel from "../../models/carModel.js";

const remove = async(req, res) => {
    try {
        const id = parseInt(req.params.id)
        const removeCar = await carModel.remove(id)
        res.status(200).json({message: `car ${id} removed`})
    } catch (error) {
        res.status(500).json({message: "failed in remove car", error})
    }
}

export default remove