import styles from './CreateVehicle.module.css'
import { useState } from 'react'

function CreateVehicle() {

    const [FormValues, setFormValues] = useState({
        brand: "",
        model: "",
        price: 0,
        status: ""
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...FormValues,
            [name]: name ==="price" ? parseInt(value) : value ,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormValues({
            brand: "",
            model: "",
            price: 0,
            status: ""
        })
        console.log(FormValues)
        sendForm(FormValues)
    }

    const sendForm = async(FormValues) => {
    try {
    const response = await fetch('http://localhost:3002/car/create', {
        method: "POST",
        headers: {
            "Content-Type" :'application/json'
        },
        body: JSON.stringify(FormValues)
    })
    if (response.ok) {
        const data = await response.json()
        console.log("resposta do server",data)
    }
} 
    catch (error) {
        console.log('erro ao passar os dados', error)
    }};



    return (
        <div className={styles.box}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="brand"
                    value={FormValues.brand}
                    placeholder='Marca'
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="model"
                    value={FormValues.model}
                    placeholder='Modelo'
                    onChange={handleInputChange}
                />
                <input
                    type="number"
                    name='price'
                    value={FormValues.price}
                    placeholder='Preço'
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name='status'
                    value={FormValues.status}
                    placeholder='Status'
                    onChange={handleInputChange}
                />

                <input type="submit" value="enviar" />
            </form>
        </div>
    )
}

export default CreateVehicle