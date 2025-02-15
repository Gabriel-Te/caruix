import styles from './Profile.module.css'
import imageprofile from '../img/profile.png'
import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import useUserIsLogged from '../stores/useUserIsLogged.js'
import { toast } from 'react-toastify'

function Profile() {
    const logout = useUserIsLogged((state) => state.logout)
    const navigate = useNavigate()

    const [imgIsValid, setImgIsValid] = useState(true)

    const [user, setUser] = useState({
        name: '',
        email: '',
        image: imageprofile
    })

    const getById = async () => {
        try {
            const result = await fetch(`http://localhost:3002/user/getById`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            })
            if (result.status === 401) {
                navigate('/register')
                logout()
                toast.error('Sem autorização, retornando a página de registro')
            }
            else if (result.ok) {
                const data = await result.json()
                const user = data.userPerId
                if (user.image === null) {
                    user.image = ''
                }
                setUser(user)
            }
        } catch (error) {
            console.log('erro ao buscar as informações do perfil')
        }
    }

    useEffect(() => {
        getById()
    }, [])


    useEffect(() => {
        setFormValues(user)
    }, [user])

    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        image: ''
    })

    console.log(formValues)

    const HandleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        })
    }

    const Submit = async (e) => {
        e.preventDefault()
        console.log('dados enviados:', formValues)
        try {
            const result = await fetch(`http://localhost:3002/user/edit/${user.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify(formValues)
            })
            if (result.status === 401) {
                console.error('Sem autorização, retornando a página de registro')
                navigate('/register')
                logout()
                toast.error('Sem autorização, retornando a página de registro')
            }
            if (result.ok) {
                const response = await result.json()
                toast.success('Usuário editado com sucesso', response)
            }
        } catch (error) {
            console.error('erro ao editar o perfil')
            toast.error('erro ao editar o perfil')
        }
    }


    return (
        <div className={styles.container}>
            <div className={styles.profileBox}>
                <h2 className={styles.title}>Seu Perfil</h2>
                <div className={styles.flexArea}>
                    <div>
                        <img
                        src={imgIsValid === true? (user.image) : (imageprofile)}
                        onError={() => setImgIsValid(false)}
                        />
                    </div>
                    <div className={styles.textArea}>
                        <h3>{user.name}</h3>
                        <p>Email: {user.email}</p>
                        <p>Id: {user.id}</p>
                    </div>
                </div>

            </div>


            <div className={styles.formBox}>
                <h2 className={styles.title}>Editar Perfil</h2>
                <div className={styles.formArea}>
                    <form onSubmit={Submit}>
                        <p>Nome</p>
                        <input
                            type="text"
                            name="name"
                            value={formValues.name}
                            placeholder='Nome de usuário'
                            onChange={HandleChange}
                        />
                        <p>Email</p>
                        <input
                            type="text"
                            name="email"
                            value={formValues.email}
                            placeholder='email'
                            onChange={HandleChange}
                        />

                        <p>Imagem</p>
                        <input
                            type="text"
                            name='image'
                            value={formValues.image}
                            placeholder='Image (only links)'
                            onChange={HandleChange}
                        />
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Profile