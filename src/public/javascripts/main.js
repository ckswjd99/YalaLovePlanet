const lovecoin_chart = document.getElementById('lovecoin_chart');
const lovecoin_chart_sizer = () => {
    var parentRect = lovecoin_chart.parentNode.getBoundingClientRect();
    lovecoin_chart.width = parentRect.width;
    lovecoin_chart.height = parentRect.height;
};
lovecoin_chart_sizer();

const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
];
const data = {
    labels: labels,
    datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [10, 15, 0, 35, 20, 30, 45],
        tension: 0.3
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {
        plugins: {
            title: {
                display: false
            },
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                ticks: {
                    color: 'white',
                    font: {
                        family: 'Nanum Gothic Coding',
                    }
                },
                grid: {
                    display: false,
                    color: 'white',
                    width: 3
                },
            },
            x: {
                ticks: {
                    color: 'white',
                    font: {
                        family: 'Nanum Gothic Coding',
                    }
                },
                grid: {
                    display: false,
                    color: 'white'
                },
            },
            
        }
    }
};

const myChart = new Chart(
    lovecoin_chart,
    config
);