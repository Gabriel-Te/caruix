import styles from './Configs.module.css'
import CardItem from '../components/CardItem.js'
import ErrorMessage from '../components/ErrorMessage.js';
import useCarStore from '../stores/useCarStore.js';
import { useEffect, useState } from 'react'
import useUserIsLogged from '../stores/useUserIsLogged.js';
import {useNavigate} from 'react-router-dom' 

function Configs() {

    const navigate = useNavigate()

    const logout = useUserIsLogged((state) => state.logout)

    const logoutToken = async() => { 
        try{
        const result = 
            await fetch('http://localhost:3002/user/logout', {
            method: 'GET',
            headers: {"Content-Type" : "Application/json"},
            credentials: 'include'
        });
        if(result.ok) {
            console.log('logout deu ok')
            logout()
            navigate('/register')
        }
        }catch(error) {
            console.error('erro ao deslogar,', error)
        }
}

    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.item}>
                    <p>Logout</p>
                    <button onClick={() => logoutToken()}>Deslogar</button>
                </div>
            </div>
        </div>
    );
};

export default Configs