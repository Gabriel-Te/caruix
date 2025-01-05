import { useEffect, useState } from 'react';
import styles from './Home.module.css';
import { PDFDownloadLink } from '@react-pdf/renderer'
import DoughnutChart from '../components/DoughnutChart.js';
import Report from '../components/generatePDF.js';

import useCarStore from '../stores/useCarStore.js';

function Home() {
  const cars = useCarStore((state) => state.cars)
  const separePerStatus = useCarStore((state) => state.separePerStatus)
  const [sell, setSell] = useState(0);
  const [sold, setSold] = useState(0);

  const count = () => {
    setSell(separePerStatus().sellCars.length)
    setSold(separePerStatus().soldCars.length)
  }

  useState(() => {
    count()
  }, [cars]) 
return (

  <div className={styles.box}>
    <div className={styles.customArea}>

      <div className={styles.item50}>
        <DoughnutChart labels={["À venda:", "Vendidos:",]} data={[sell, sold]} backgroundColor={["#343F66", "#AEBAE6"]} />
      </div>
      <div className={styles.item50}>
        <DoughnutChart labels={["À venda:", "Vendidos:",]} data={[sell, sold]} backgroundColor={["#343F66", "#AEBAE6"]} />
      </div>
      <div className={styles.item100}>
      </div>
    </div>
  </div>
);
}

export default Home;