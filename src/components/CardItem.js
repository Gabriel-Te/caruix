import styles from './CardItem.module.css'
import { NavLink } from 'react-router-dom';

function CardItem(props) {

  function formattedNumber(price) {
    return (
      new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price)
    )
  };

  return (
    <NavLink className={styles.link} to={`/cardpressed/${props.id}`}>
      <div className={styles.card}>
          <img src={props.image} alt="image" />
        <div className={styles.cardtext}>
          <h2><b>{props.brand}</b> {props.model}</h2>
          <p>{formattedNumber(props.price)}</p>
          <p>{props.status}</p>
        </div>
      </div>
    </NavLink>

  )
}

export default CardItem;
