import { useEffect, useState } from 'react'
import styles from './Login.module.css'
import useUserIsLogged from '../stores/useUserIsLogged.js'
import { useNavigate, NavLink } from 'react-router-dom'

function Login() {
    const navigate = useNavigate()
    const login = useUserIsLogged((state) => state.login )
    const userIsLogged = useUserIsLogged((state) => state.userIsLogged);

    useEffect(() => {
        if(userIsLogged) {
            navigate('/')
        }
    }, [userIsLogged, navigate])

    const compareLogin = async (formUser) => {
        try {
            const response = await fetch('http://localhost:3002/user/getAll',{
                method: 'GET',
                headers: {
                    "Content-Type" : 'application/json'
                }
            })
            if(response.ok){
                const data = await response.json()
                const compare = data.users.find((user) => (
                    user.name === formUser.name && user.password === formUser.password))
                console.log(compare)
                if (compare) {
                    login()
                }else{console.log('Usuário ou senha incorretos')}
            }
        } catch (error) {
            console.log(error)
        }
    }
    
    const [formUser,setFormUser] = useState({
        name : '',
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
        compareLogin(formUser)
    }

    return (
        <div className={styles.container}>
            <div className={styles.contentArea}>
                <p className={styles.title}>Login</p>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.formInput}>
                        <label className={styles.inputText}>Nome de usuário</label>
                        <input autoComplete="username" onChange={handleInputChange} value={formUser.name} name='name' type="text" />
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