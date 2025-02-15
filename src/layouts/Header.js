import styles from "./Header.module.css"
import Caruix from '../img/carUIX.svg'
import useToolsStore from "../stores/useToolsStore.js"
import { RiSidebarFoldLine, RiSidebarUnfoldLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import imageprofile from '../img/profile.png'
import { useState, useEffect } from "react";

function Header() {

    const navIsHidden = useToolsStore((state) => state.navIsHidden)
    const hideNav = useToolsStore((state) => state.hideNav)
    const showNav = useToolsStore((state) => state.showNav)
    const [image, setImage] = useState(imageprofile)

    console.log(image)

        const getById = async () => {
            try {
                const result = await fetch(`http://localhost:3002/user/getById`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    credentials: 'include'
                })
                if (result.ok) {
                    const data = await result.json()
                    const user = data.userPerId
                    setImage(user.image)
                }
            } catch (error) {
                console.log('erro ao buscar as informações do perfil')
            }
        }
    
        useEffect(() => {
            getById()
        }, [])
    

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
                <NavLink className={styles.profileImg} to={'/profile'}>
                    <img
                    src={image}
                    alt="image"
                    onLoad={() => setImage(image)}
                    onError={() => setImage(imageprofile)}
                    />
                </NavLink>
            </div>
        </header>
    )
}

export default Header