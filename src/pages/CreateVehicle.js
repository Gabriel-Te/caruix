import styles from './CreateVehicle.module.css'
import { useState } from 'react'

function CreateVehicle() {

    const [FormValues, setFormValues] = useState({
        brand: "",
        model: "",
        price: 0,
    })

    const [submittedValues, SetSubmittedValues] = useState(null)

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...FormValues,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        SetSubmittedValues(FormValues);
        setFormValues({
            brand: "",
            model: "",
            price: 0,
        })
        console.log(submittedValues)
    }



    return (
        <div className={styles.box}>
            <form onSubmit={handleSubmit} action="">
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

                <input type="submit" value="enviar" />
            </form>
        </div>
    )
}

export default CreateVehicle