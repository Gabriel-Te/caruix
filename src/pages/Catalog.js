import styles from './Catalog.module.css'
import CardItem from '../components/CardItem.js'
import { useEffect, useState } from 'react';
import ErrorMessage from '../components/ErrorMessage.js';
import useCarStore from '../stores/useCarStore.js';

function Catalog() {

    const setCars = useCarStore((state) => state.setCars)
    const cars = useCarStore((state) => state.cars)

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

    console.log(cars)


    return (
        <div className={styles.box}>
            <div className={styles.list}>
                {cars.length > 0 ? (
                    cars.map((item) => (
                        <CardItem key={item.id}
                            image={item.image} id={item.id}
                            brand={item.brand}
                            model={item.model}
                            price={item.price}
                            status={item.status === true ? "à venda" : "vendido"} />
                    ))) : (
                    <ErrorMessage message='erro ao encontrar os carros, tente novamente mais tarde.' />
                )}
            </div>
        </div>
    )
}

export default Catalog