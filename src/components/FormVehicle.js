import styles from './FormVehicle.module.css'
import { useState } from 'react';

function FormVehicle({ actionFunction, eraseData, inicialValues }) {


    const [FormValues, setFormValues] = useState(
        inicialValues,
        inicialValues.status === false ?
            (inicialValues.status = "0") :
            (inicialValues.status = "1"))

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...FormValues,
            [name]: name === "price" ? (parseInt(value)) : (value)
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(FormValues)
        if (FormValues.status === "1") {
            FormValues.status = true
        } else { FormValues.status = false }
        actionFunction(FormValues)
        if (eraseData) {
            setFormValues({
                brand: "",
                model: "",
                price: 0,
                status: "1",
                image: ""
            })
        }//eraseData is boolean
    }

    return (
        <div className={styles.formArea}>
            <form onSubmit={handleSubmit}>
                <p>Marca</p>
                <input
                    type="text"
                    name="brand"
                    value={FormValues.brand}
                    placeholder='Marca'
                    onChange={handleInputChange}
                />
                <p>Modelo</p>
                <input
                    type="text"
                    name="model"
                    value={FormValues.model}
                    placeholder='Modelo'
                    onChange={handleInputChange}
                />
                <p>Preço</p>
                <input
                    type="number"
                    name='price'
                    value={FormValues.price}
                    onChange={handleInputChange}
                />
                <p>Status: </p>
                <div className={styles.statusArea}>
                    <p>Vendido</p>
                    <input
                        type="radio"
                        name='status'
                        value="0"
                        checked={FormValues.status === "0"}
                        onChange={handleInputChange}
                    />
                </div>

                <div className={styles.statusArea}>
                    <p>À venda</p>
                    <input
                        type="radio"
                        name='status'
                        value="1"
                        checked={FormValues.status === "1"}
                        onChange={handleInputChange}
                    />
                </div>


                <p>Imagem</p>
                <input
                    type="text"
                    name='image'
                    value={FormValues.image}
                    placeholder='Image (only links)'
                    onChange={handleInputChange}
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default FormVehicle