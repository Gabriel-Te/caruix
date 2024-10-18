import styles from './MainPage.module.css'
import CardItem from '../components/CardItem';

function MainPage() {
  return (
    <div className={styles.box}>
      <CardItem/>
      <CardItem/>
      <CardItem/>
    </div>
  )
}

export default MainPage;
