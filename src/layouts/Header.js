import styles from "./Header.module.css"

function Header() {
    return (
        <header>
            <p>CarUIX</p>
            <div className={styles.links}>
                <a href="#">not</a>
                <a href="#">box</a>
                <a href="#">profile</a>
            </div>
        </header>
    )
}

export default Header