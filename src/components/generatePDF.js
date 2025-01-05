import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image, PDFViewer } from '@react-pdf/renderer';
import logo from '../img/logopdf.png'
import DoughnutChart from './DoughnutChart.js';


const styles = StyleSheet.create({
    pageControl: {
        margin: 0,
        padding: 0
    },
    content: {
        marginHorizontal: 50,
        marginVertical: 50
    },
    logo: {
        width: 100,
        marginHorizontal: 20
    },
    header: {
        display: "flex",
        justifyContent: "center",
        width: "100%",
        backgroundColor: '#535353'
    },
    h1: {
        fontSize: 35,
        fontWeight: "bold",
        fontWeight: 600,
    },
    h2: {
        fontSize: 20,
    },
    h3: {
        fontSize: 30,
        marginTop: 20,     
    },
    article: {
        gap: 10,
    },
    h4 : {
        marginLeft: 15
    }


})



const ReportPdf = ({data, currentDate}) => { 

        const formattedDate = currentDate ?
        `${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()} às ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`
        : `data não disponível`

        function formattedNumber(price) {
            return (
                new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                }).format(price))
        };

    return (
        <Document>
            <Page size='A4' style={styles.pageControl}>
                    <View style={styles.header}>
                        <Image style={styles.logo} source={logo} />
                    </View>
                    <View style={styles.content}>
                    <Text style={styles.h1}>Relatório de Estoque</Text>
                    <Text style={styles.h2}>data de emissão: {formattedDate}</Text>
                    <View style={styles.article}>
                        <Text style={styles.h3}>Vendas</Text>
                        <Text style={styles.h4}>Veículos vendidos: {data.soldCars}</Text>
                        <Text style={styles.h4}>Veículos à venda: {data.sellCars}</Text>
                        <Text style={styles.h4}>Total: {data.totalCars}</Text>
                        <Text style={styles.h4}>Receita dos veículos: {formattedNumber(data.soldValue)}</Text>
                        <Text style={styles.h4}>Valor Total dos veículos à venda: {formattedNumber( data.sellValue)}</Text>
                    </View>
                </View>
            </Page>
        </Document>
    )
}

const PDFViewerComponent = (props) => {
    return (
            <PDFViewer style={{ width: '100vh', height: '100vh' }}>
                <ReportPdf data={props.data}/>
            </PDFViewer>
    );
};


export {PDFViewerComponent, ReportPdf}