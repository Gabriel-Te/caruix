import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, Tooltip, Legend, ArcElement, Title } from 'chart.js'

ChartJS.register(Tooltip, Legend, ArcElement, Title);

function PieChart(props) {

    const pieChartData = {
        labels: ["À venda", "Vendidos"],
        datasets: [{
            label: 'Veículos',
            data: props.data,
            borderColor: [
                "#FFF",
                "#FFF"
            ],
            backgroundColor: [
                "#343F66",
                "#AEBAE6"
            ],
            hoverOffset: 2
        }]
    }

    const options = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                position: "bottom",
                labels : {
                    color: '#FFF',
                    font: {
                        size: 15
                    }
                },
            },
            title: {
                display: true,
                text: "Veículos Disponíveis vs Vendidos",
                color: "#FFF",
                font:{
                    size: 18
                }
            }
        }
    }

    return (

        <Doughnut  data={pieChartData} options={options} />

    )
}

export default PieChart