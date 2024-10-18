import styles from './CardItem.module.css'
import img from "../img/exampleimage.webp"

function CardItem() {
  return (
    <div className={styles.card}>
        <img src={img} alt="image" />
        <h2></h2>
        <p>Omega</p>
        <p>#678950</p>
        <p>for sale</p>
    </div>
  )
}

export default CardItem;
