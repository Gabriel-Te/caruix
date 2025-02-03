import FormVehicle from '../components/FormVehicle.js';
import styles from './CreateVehicle.module.css'
import useCarStore from '../stores/useCarStore.js';
import useUserIsLogged from '../stores/useUserIsLogged.js';
import { useNavigate } from "react-router-dom"

function CreateVehicle() {
    const addNewCar = useCarStore((state) => state.addNewCar)
    const logout = useUserIsLogged((state) => state.logout)
    const navigate = useNavigate()
    const userIslogged = useUserIsLogged((state) => state.userIslogged)

    const values = {
        brand: "",
        model: "",
        price: 0,
        status: "1",
        image: ""
    }

    const sendForm = async (FormValues) => {
        if (userIslogged === true) {
            try {
                const result = await fetch('http://localhost:3002/car/create', {
                    method: "POST",
                    headers: {
                        "Content-Type": 'application/json'
                    },
                    body: JSON.stringify(FormValues),
                    credentials: 'include'
                })
                if (result.status === 401) {
                    console.log('Token Inválido ou expirado. Retornando a tela de registro');
                    navigate('/register')
                    logout()
                }
                if (result.ok) {
                    const data = await result.json()
                    const newCar = data.newCar
                    addNewCar(newCar)
                    console.log("resposta do server", data)
                }
            } catch (error) {
                console.log('erro ao passar os dados', error)
            }
        }else{
            console.log('Usuário não logado, retonando a pagina de registro');
            logout()
            navigate('/register')
        }
    };

    return (
        <div className={styles.box}>
            <FormVehicle actionFunction={sendForm} inicialValues={values} />
        </div>
    )
}

export default CreateVehicle