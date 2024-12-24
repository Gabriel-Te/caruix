import FormVehicle from '../components/FormVehicle.js'
import styles from './EditVehicle.module.css'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import useCarStore from '../stores/useCarStore.js'

function EditVehicle() {
    const navigate = useNavigate()
    const { id } = useParams()
    const idInt = Number(id)
    const editCar = useCarStore((state) => state.editCar)
    const getByID = useCarStore((state) => state.getByID)
    const values = getByID(idInt)

    const Edit = async (FormValues) => {
        try {
            const CarEdited = FormValues
            const result = await fetch(`http://localhost:3002/car/edit/${id}`, {
                method: "PUT",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify(CarEdited)
            })
            if (result.ok) {
                editCar(CarEdited, idInt)
                const response = await result.json()
                console.log('resposta do server', response)
                navigate(`/cardpressed/${id}`)
            }
        }catch(error) {
            console.log('erro ao enviar o veiculo', error)
        }
    }


    return (
        <div className={styles.box}>
            <FormVehicle actionFunction={Edit} inicialValues={values}/>
        </div>
    )
}

export default EditVehicle