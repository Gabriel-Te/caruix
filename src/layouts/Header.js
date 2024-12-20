import styles from "./Header.module.css"
import Caruix from '../img/carUIX.svg'
import useToolsStore from "../stores/useToolsStore.js"
import { RiSidebarFoldLine, RiSidebarUnfoldLine } from "react-icons/ri";


function Header() {

    const navIsHidden = useToolsStore((state) => state.navIsHidden)
    const hideNav = useToolsStore((state) => state.hideNav)
    const showNav = useToolsStore((state) => state.showNav)

    return (
        <header>
            <div className={styles.buttonArea}>
                <button
                    type="button"
                    onClick={() => navIsHidden === true ?
                        showNav() : hideNav()}
                    >{navIsHidden === true ? <RiSidebarUnfoldLine /> : <RiSidebarFoldLine />}
                </button>
            </div>
            <img alt="CarUIX" src={Caruix} className={styles.imgLogo} />
            <div className={styles.links}>
                <a href="#">not</a>
                <a href="#">box</a>
                <a href="#">profile</a>
            </div>
        </header>
    )
}

export default Header