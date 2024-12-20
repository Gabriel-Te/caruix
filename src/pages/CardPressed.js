import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import ErrorMessage from "../components/ErrorMessage.js"
import styles from './CardPressed.module.css'
import AdviceMessage from "../components/AdviceMessage.js"
import useCarStore from "../stores/useCarStore.js"

function CardPressed() {
    const cars = useCarStore((state) => state.cars)
    const navigate = useNavigate()
    const { id } = useParams()
    const idInt = Number(id)
    const [car, setCar] = useState(null)
    const [sureQuestion, setSureQuestion] = useState(false)
    const getByID = useCarStore((state) => state.getByID)

    const getCar = async () => {
        const [car] = getByID(idInt)
        setCar(car)
        console.log(car)
    }

    const remove = async () => {
        try {
            const result = await fetch(`http://localhost:3002/car/remove/${id}`, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" }
            })
            if (result.ok) {
                console.log(`veículo ${id} removido`)
                navigate('/catalog');
            }
        } catch (error) {
            console.log(`erro ao remover o veículo ${id}`)
        }
    }

    useEffect(
        () => {
            if (cars.length === 0) {
                navigate('/catalog')
            }else{
            getCar()
            }
        }, [])


    function formattedNumber(price) {
        return (
            new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
            }).format(price))
    };


    return (
        <div className={styles.container}>
            {car !== null ? (
                <div className={styles.carInfoArea}>
                    <img src={car.image} alt={`foto de um ${car.model}`} />
                    <h1><b>{car.brand} </b>{car.model}</h1>
                    <h2>{formattedNumber(car.price)}</h2>
                    <h3>status: {car.status === true ? "à venda" : "vendido"}</h3>
                    <button onClick={() => setSureQuestion(true)}>Remover</button>
                </div>
            ) : (<ErrorMessage message='erro ao guardar o carro' />)
            }
            {
                sureQuestion && (
                    <AdviceMessage
                        message="Certeza que deseja excluir o veículo?"
                        buttontext1="sim"
                        buttontext2="não"
                        onConfirm={remove}
                        onCancel={() => setSureQuestion(false)}
                    />
                )
            }
        </div>
    )
}

export default CardPressed