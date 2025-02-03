import {NavLink, useLocation} from 'react-router-dom'
import styles from './Nav.module.css'

function Nav() {
    const location = useLocation()
    const activePath = location.pathname

    return (
        <nav>
            <NavLink className={activePath === "/" ? `${styles.links} ${styles.activePath}` : styles.links} to="/" >Início</NavLink>
            <NavLink className={activePath === "/catalog" ? `${styles.links} ${styles.activePath}` : styles.links} to="/catalog" >Catálogo</NavLink>
            <NavLink className={activePath === "/report" ? `${styles.links} ${styles.activePath}` : styles.links} to="/report" >Relatório</NavLink>
            <NavLink className={activePath === "/createvehicle" ? `${styles.links} ${styles.activePath}` : styles.links} to="/createvehicle" >Cadastrar Veículo</NavLink>
            <NavLink className={activePath === "/configs" ? `${styles.links} ${styles.activePath}` : styles.links} to="/configs" >Configurar</NavLink>
        </nav>
    )
}

export default Nav