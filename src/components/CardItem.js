import styles from './CardItem.module.css'

function CardItem(props) {
      function formattedNumber(price) { return(
          new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price * 10))};
  
  return (
    <div className={styles.card}>

    <a href={`/cardpressed/${props.id}`}>
      <img src={props.image} alt="image" />
      <div className={styles.cardtext}>
        <h2><b>{props.brand}</b> {props.model}</h2>
        <p>{formattedNumber(props.price)}</p>
        <p>{props.status}</p>
      </div>
      </a>

    </div>
    
  )
}

export default CardItem;
