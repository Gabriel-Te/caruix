import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ErrorMessage from "../components/ErrorMessage.js"
import styles from './CardPressed.module.css'
import img from '../img/exampleimage.webp'


function CardPressed () {
    const {id} = useParams()
    const [car, setCar] = useState(null)

    const getByID = async() => {
        try {
            const result = await fetch(`http://localhost:3002/car/getById/${id}`,{
                method: "GET",
                headers: { "Content-Type": "application/json" }
            })
            if(result.ok) {
                const data = await result.json()
                setCar(data.carPerID)
            }
        } catch (error) {
            console.log('erro ao buscar o carro', error)
        }
    }

    useEffect(
        () => {
            getByID()
        },[])

    return(
        <div className={styles.container}> 
        {car !== null ?(
            <>
            <img src={car.image} alt="" />
            <h1><b>{car.brand} </b>{car.model}</h1>
            <h2>preço: {car.price}</h2>
            <h3>status: {car.status == true ? "à venda" : "vendido"}</h3>
            </>
        ): <ErrorMessage message='erro ao guardar o carro'/>}
        </div>
    )
}

export default CardPressed