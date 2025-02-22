import { useState } from "react";
import { PDFViewerComponent, ReportPdf } from "../components/generatePDF.js"
import { PDFDownloadLink } from "@react-pdf/renderer";
import useCarStore from "../stores/useCarStore.js"
import styles from './Report.module.css'

function Report() {
    const cars = useCarStore((state) => state.cars)
    const separePerStatus = useCarStore((state) => state.separePerStatus)

    const [currentDate, setCurrentDate] = useState(null)
    const [buttonIsClicked, setButtonIsClicked] = useState(false)

    const sellValue = separePerStatus().sellCars.reduce((total, car) => total + car.price, 0)
    const soldValue = separePerStatus().soldCars.reduce((total, car) => total + car.price, 0)
    const sellCars = separePerStatus().sellCars.length
    const soldCars = separePerStatus().soldCars.length

    const generateDate = () => {
        const newDate = new Date()
        setCurrentDate(newDate)
        setButtonIsClicked(true)
        console.log(newDate)
        console.log(currentDate)
    }

    console.log("Button Is Clicked:", buttonIsClicked);
    console.log("Current Date:", currentDate);



    let data = {
        totalCars: cars.length,
        soldCars,
        sellCars,
        sellValue,
        soldValue,
    }
    console.log(data)


    console.log(buttonIsClicked)

    return (
        <div className={styles.container}>
            <div className={styles.control}>
                <div className={styles.buttonArea}>
                    {buttonIsClicked ? (
                        <PDFDownloadLink
                            onClick={generateDate}
                            document={<ReportPdf data={data} currentDate={currentDate}/>}
                            fileName="relatorio.pdf"
                            className={styles.downloadButton}
                        
                        >baixar pdf</PDFDownloadLink>
                    ) : (<button className={styles.prepareButton} onClick={generateDate}>Carregar PDF</button>)}

                </div>
                {/* <div className={styles.pdfviewer}> */}
                {/* <PDFViewerComponent data={data} /> */}
                {/* </div> */}
            </div>
        </div>
    )
}

export default Report