import FormVehicle from '../components/FormVehicle.js';
import styles from './CreateVehicle.module.css'
import useCarStore from '../stores/useCarStore.js';
import useUserIsLogged from '../stores/useUserIsLogged.js';

function CreateVehicle() {
    const addNewCar = useCarStore((state) => state.addNewCar)
    const logout = useUserIsLogged((state) => state.logout)

    const values = {
        brand: "",
        model: "",
        price: 0,
        status: "1",
        image: ""
    }

    const sendForm = async (FormValues) => {
        try {
            const response = await fetch('http://localhost:3002/car/create', {
                method: "POST",
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(FormValues)
            })
            if (response.ok) {
                const data = await response.json()
                const newCar = data.newCar
                addNewCar(newCar)
                console.log("resposta do server", data)
            }
        }catch (error) {
            console.log('erro ao passar os dados', error)
        }
    };
    
    return (
        <div className={styles.box}>
            <button onClick={() => logout()}>logout</button>
            <FormVehicle actionFunction={sendForm} inicialValues={values} />
        </div>
    )
}

export default CreateVehicle