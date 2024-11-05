import styles from './Catalog.module.css'
import CardItem from '../components/CardItem'

function Catalog() {
    let cars = [{ brand: "Fiat", model: "500", idNum: "#g3j390", status: "for sale" }, { brand: "Fiat", model: "500", idNum: "#g3j390", status: "for sale" }, { brand: "Fiat", model: "500", idNum: "#g3j390", status: "for sale" }, { brand: "Fiat", model: "500", idNum: "#g3j390", status: "for sale" }]

    return (
        <div className={styles.box}>
            {cars.map((item, index) => (
                <CardItem key={index} brand={item.brand} model={item.model} idNum={item.idNum} status={item.status} />
            ))}
        </div>
    )
}

export default Catalog