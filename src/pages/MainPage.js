import { useEffect, useState } from 'react';
import styles from './MainPage.module.css';

function MainPage() {
  const [cars, setCars] = useState([]);
  const [sell, setSell] = useState(0);
  const [sold, setSold] = useState(0);

  const getCars = async () => {
    try {
      const result = await fetch('http://localhost:3002/car/getAll', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (result.ok) {
        const data = await result.json();
        setCars(data.cars);

        let sellCount = 0;
        let soldCount = 0;

        data.cars.forEach((car) => {
          if (car.status === true) {
            sellCount++;
          } else {
            soldCount++;
          }
        });

        setSell(sellCount);
        setSold(soldCount);

        console.log(data.cars);
      }
    } catch (error) {
      console.error('Erro ao pegar os dados dos veículos:', error);
    }
  };

  useEffect(() => {
    getCars();
  }, []);

  return (
    <div className={styles.box}>
      <p>À venda: {sell}</p>
      <p>Vendidos: {sold}</p>
    </div>
  );
}

export default MainPage;