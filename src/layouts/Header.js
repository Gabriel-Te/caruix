import styles from "./Header.module.css"
import Caruix from '../img/carUIX.svg'

function Header() {
    return (
        <header>
            <img src={Caruix} className={styles.img} />
            <div className={styles.links}>
                <a href="#">not</a>
                <a href="#">box</a>
                <a href="#">profile</a>
            </div>
        </header>
    )
}

export default Header