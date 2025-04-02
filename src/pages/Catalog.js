import styles from './Catalog.module.css'
import CardItem from '../components/CardItem.js'
import ErrorMessage from '../components/ErrorMessage.js';
import useCarStore from '../stores/useCarStore.js';
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

function Catalog() {

    const cars = useCarStore((state) => state.cars);
    const [carItems, setCarItems] = useState([]);
    const filterByPrice = useCarStore((state) => state.filterByPrice);
    const separeByBrand = useCarStore((state) => state.separeByBrand);
    const [tabActive, setTabActive] = useState(false);


    const [filterValues, setFilterValues] = useState({
        minValue: null,
        maxValue: null
    });

    useEffect(() => {
        setCarItems(cars)
    }, [cars])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilterValues({
            ...filterValues,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const filtredCars = filterByPrice(
            filterValues.minValue,
            filterValues.maxValue
        );
        setCarItems(filtredCars);
        toast.success('Filtro aplicado')
    };

    console.log(carItems)


    return (
        <div className={styles.box}>
            <div className={tabActive === true ? `${styles.toolsArea} ${styles.active}` : `${styles.toolsArea}`}>
                <button onClick={tabActive === false ? () => { setTabActive(true) } : () => setTabActive(false)}>Filtrar por:</button>
                {tabActive && (
                    <div className={styles.tabArea}>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.tabAreaType}>
                                <p>Valor:</p>
                                <label>Valor mínimo</label>
                                <input
                                    type="number"
                                    value={filterValues.minValue}
                                    name="minValue"
                                    onChange={handleChange} />
                                <label>Valor máximo</label>
                                <input
                                    type="number"
                                    value={filterValues.maxValue}
                                    name="maxValue"
                                    onChange={handleChange}
                                />
                            </div>

                            <button type="submit">Filtrar</button>
                        </form>
                        <button onClick={() => {
                            const a = separeByBrand()
                            console.log(a)
                        }}></button>
                    </div>
                )}
            </div>

            <div className={styles.list}>
                {carItems.length > 0 ? (
                    carItems.map((item) => (
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
    );
};

export default Catalog