import styles from './Nav.module.css'

function Nav() {
    return (
        <nav>
            <a class={styles.links} href="">início</a>
            <a class={styles.links} href="">catálogo</a>
            <a class={styles.links} href="">vendas</a>
            <a class={styles.links} href="">cadastrar veículo</a>
            <a class={styles.links} href="">configurar</a>
        </nav>
    )
}

export default Nav