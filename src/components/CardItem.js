import styles from './CardItem.module.css'
import img from "../img/exampleimage.webp"

function CardItem(props) {
  return (
    <div className={styles.card}>
      <a href="">
      <img src={img} alt="image" />
      <div className={styles.cardtext}>
        <h2>{props.brand}</h2>
        <p>{props.model}</p>
        <p>{props.idNum}</p>
        <p>{props.status}</p>
      </div>
      </a>
    </div>
  )
}

export default CardItem;
