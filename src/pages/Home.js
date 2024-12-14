import { useEffect, useState } from 'react';
import styles from './Home.module.css';
import DoughnutChart from '../components/DoughnutChart.js';

function Home() {
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
      <div className={styles.customArea}>
        <div style={{ width: "47.5%", height: "400px", background: "#242424", margin: "0 0 20px 0", padding: "10px" }}>
          <DoughnutChart labels={["À venda:", "Vendidos:",]} data={[sell, sold]} backgroundColor={["#343F66", "#AEBAE6"]} />
        </div>
        <div style={{ width: "47.5%", height: "400px", background: "#242424", margin: "0 0 20px 0", padding: "10px" }}>
          <DoughnutChart labels={["À venda:", "Vendidos:",]} data={[sell, sold]} backgroundColor={["#343F66", "#AEBAE6"]} />
        </div>
      </div>
    </div>
  );
}

export default Home;