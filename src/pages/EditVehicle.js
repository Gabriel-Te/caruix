import FormVehicle from '../components/FormVehicle.js'
import styles from './EditVehicle.module.css'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import useCarStore from '../stores/useCarStore.js'
import useUserIsLogged from '../stores/useUserIsLogged.js';

function EditVehicle() {
    const navigate = useNavigate()
    const { id } = useParams()
    const idInt = Number(id)

    const editCar = useCarStore((state) => state.editCar)
    const getByID = useCarStore((state) => state.getByID)
    const logout = useUserIsLogged((state) => state.logout)

    const values = getByID(idInt)

    const Edit = async (FormValues) => {
            try {
                const CarEdited = FormValues
                const result = await fetch(`http://localhost:3002/car/edit/${id}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(CarEdited),
                    credentials: 'include'
                })
                if (result.status === 401) {
                    console.log('Token Inválido ou expirado. Retornando a tela de registro');
                    navigate('/register')
                    logout()
                }
                if (result.ok) {
                    editCar(CarEdited, idInt)
                    const response = await result.json()
                    console.log('resposta do server', response)
                    //you can pass an value while navigate, receive this value using location.state.{objeto}
                    navigate(`/cardpressed/${id}`,{state: {message : 'veículo editado com sucesso'}})
                }
            } catch (error) {
                console.log('erro ao enviar o veiculo', error)
            }
    }


    return (
        <div className={styles.box}>
            <FormVehicle
                actionFunction={Edit}
                inicialValues={values}
            />
        </div>
    )
}

export default EditVehicle