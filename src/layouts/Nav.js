import {NavLink, useLocation} from 'react-router-dom'
import styles from './Nav.module.css'

function Nav() {
    const location = useLocation()
    const activePath = location.pathname

    return (
        <nav>
            <NavLink className={activePath === "/" ? `${styles.links} ${styles.activePath}` : styles.links} to="/" >início</NavLink>
            <NavLink className={activePath === "/catalog" ? `${styles.links} ${styles.activePath}` : styles.links} to="/catalog" >catálogo</NavLink>
            <NavLink className={activePath === "/vendas" ? `${styles.links} ${styles.activePath}` : styles.links} to="/vendas" >vendas</NavLink>
            <NavLink className={activePath === "/createvehicle" ? `${styles.links} ${styles.activePath}` : styles.links} to="/createvehicle" >cadastrar veículo</NavLink>
            <NavLink className={activePath === "/configurar" ? `${styles.links} ${styles.activePath}` : styles.links} to="/configurar" >configurar</NavLink>
        </nav>
    )
}

export default Nav