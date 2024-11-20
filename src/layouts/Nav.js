import { useState } from 'react'
import {NavLink} from 'react-router-dom'
import styles from './Nav.module.css'

function Nav() {
    const [active, setActive] = useState("")
    const handleClick = (item) => {
        setActive(item)
    }

    return (
        <nav>
            <NavLink className={active === "/" ? `${styles.links} ${styles.active}` : styles.links} to="/" onClick={() => handleClick("/")}>início</NavLink>
            <NavLink className={active === "/catalog" ? `${styles.links} ${styles.active}` : styles.links} to="/catalog" onClick={() => handleClick("/catalog")}>catálogo</NavLink>
            <NavLink className={active === "/vendas" ? `${styles.links} ${styles.active}` : styles.links} to="/vendas" onClick={() => handleClick("/vendas")}>vendas</NavLink>
            <NavLink className={active === "/createvehicle" ? `${styles.links} ${styles.active}` : styles.links} to="/createvehicle" onClick={() => handleClick("/createvehicle")}>cadastrar veículo</NavLink>
            <NavLink className={active === "/configurar" ? `${styles.links} ${styles.active}` : styles.links} to="/configurar" onClick={() => handleClick("/configurar")}>configurar</NavLink>
        </nav>
    )
}

export default Nav