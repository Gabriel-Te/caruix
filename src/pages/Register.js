import { useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom';
import styles from './Register.module.css'


function Register() {
    const navigate = useNavigate()

    const sendForm = async (formUser) => {
        try {
            const response = await fetch('http://localhost:3002/user/create',{
                method: 'POST',
                headers: {
                    "Content-Type" : 'application/json'
                },
                body : JSON.stringify(formUser)
            });
            if(response.ok){
                const data = await response.json()
                console.log(data)
                navigate('/login')
            }
        } catch (error) {
            console.log(error)
        }
    }
    
    const [formUser,setFormUser] = useState({
        name : '',
        email: '',
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
        sendForm(formUser)
    }

    return (
        <div className={styles.container}>
            <div className={styles.contentArea}>
                <p className={styles.title}>Registrar</p>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.formInput}>
                        <label className={styles.inputText}>Nome de usuário</label>
                        <input autoComplete="username" onChange={handleInputChange} value={formUser.name} name='name' type="text" />
                    </div>
                    <div className={styles.formInput}>
                        <label className={styles.inputText}>Email</label>
                        <input autoComplete="email" name='email' value={formUser.email} onChange={handleInputChange} type="email" />
                    </div>
                    <div className={styles.formInput}>
                        <label className={styles.inputText}>Senha</label>
                        <input autoComplete='new-password' name='password' value={formUser.password} onChange={handleInputChange} type="password" />
                    </div>
                    <div className={styles.submit}>
                        <input type="submit" value="Registrar" />
                        <NavLink to='/login'>Login</NavLink>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}

export default Register