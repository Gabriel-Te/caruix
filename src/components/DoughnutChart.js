import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, Tooltip, Legend, ArcElement, Title,} from 'chart.js'

ChartJS.register(Tooltip, Legend, ArcElement, Title);

function DoughnutChart(props) {

    const DoughnutChartData = {
        labels: props.labels,
        datasets: [{
            label: 'Veículos',
            data: props.data,
            borderColor: [
                "#FFF",
                "#FFF"
            ],
            backgroundColor: props.backgroundColor,
            hoverOffset: 2
        }]
    }

    const options = {
        maintainAspectRatio: true,
        responsive: true,
        animation: {
            duration: 0
        },
        plugins: {
            legend: {
                position: "bottom",
                labels : {
                    color: '#FFF',
                    font: {
                        size:18
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
        <Doughnut  data={DoughnutChartData} options={options} />
    )
}

export default DoughnutChart