import { useEffect, useState } from 'react'
import styles from './Login.module.css'
import useUserIsLogged from '../stores/useUserIsLogged.js'
import { useNavigate, NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'

function Login() {
    const navigate = useNavigate()
    const login = useUserIsLogged((state)=> state.login)


    const compareLogin = async (formUser) => {
        try {
            const response = await fetch('http://localhost:3002/user/login',{
                method: 'POST',
                headers: {
                    "Content-Type" : 'application/json'
                },
                body: JSON.stringify(formUser),
                credentials: 'include'
            })
            if(response.status === 401){
                toast.error('Email ou senha inválidos')
            }
            else if(response.ok){
                console.log('deu certo')
                login()
                navigate('/')
            }
        } catch (error) {
            console.log(error)
        }
    }
    
    const [formUser,setFormUser] = useState({
        email : '',
        password: ''
    })

    const handleInputChange = (e) => {
        const {name, value} = e.target
        setFormUser({
            ...formUser,
            [name] : value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(formUser.email != '' || formUser.password != ''){
            compareLogin(formUser)
        }else{
            toast.error('Email ou senha estão vazios')
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.contentArea}>
                <p className={styles.title}>Login</p>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.formInput}>
                        <label className={styles.inputText}>Email</label>
                        <input autoComplete="email" onChange={handleInputChange} value={formUser.email} name='email' type="email" />
                    </div>
                    <div className={styles.formInput}>
                        <label className={styles.inputText}>Senha</label>
                        <input autoComplete='new-password' name='password' value={formUser.password} onChange={handleInputChange} type="password" />
                    </div>
                    <div className={styles.submit}>
                        <input type="submit" value="Logar" />
                        <NavLink to="/register">Registrar</NavLink>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login