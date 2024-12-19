import styles from './Catalog.module.css'
import CardItem from '../components/CardItem.js'
import { useEffect } from 'react';
import ErrorMessage from '../components/ErrorMessage.js';
import useCarStore from '../stores/useCarStore.js';

function Catalog() {

    const setCars = useCarStore((state) => state.setCars)
    const cars = useCarStore((state) => state.cars)






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