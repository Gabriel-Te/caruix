import styles from './Catalog.module.css'
import CardItem from '../components/CardItem.js'
import { useEffect, useState } from 'react';
import ErrorMessage from '../components/ErrorMessage.js';

function Catalog() {

    const [cars, setCars] = useState([])

    const getCars = async () => {
        try {
            const result =
                await fetch("http://localhost:3002/car/getAll", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
            if (result.ok) {
                const data = await result.json()
                setCars(data.cars)
            }
        } catch (error) {
            console.error('erro ao coletar os dados', error)
        }
    }

    useEffect(() => {
        getCars()
    }, [])


    return (
        <div className={styles.box}>
            {cars.length >= 0 ?
                cars.map((item) => (
                    <CardItem key={item.id}
                    image={item.image} id={item.id} 
                    brand={item.brand} 
                    model={item.model} 
                    price={item.price} 
                    status={item.status == true ? "à venda" : "vendido"} />
                ))
                : <ErrorMessage message='wait...'/>}
        </div>
    )
}

export default Catalog