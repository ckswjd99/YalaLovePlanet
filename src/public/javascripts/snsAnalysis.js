const chart_sizer = (chart_object) => {
    Object.entries(chart_object).map(a => {
        const canvas = a[1];
        var parentRect = canvas.parentNode.getBoundingClientRect();
        canvas.width = parentRect.width;
        canvas.height = parentRect.height;
    })
};

CHART_1_1 = document.getElementById("chart1_1")
CHART_1_2 = document.getElementById("chart1_2")

const CHARTS = {
    1_1: CHART_1_1,
    1_2: CHART_1_2
}

// chart_sizer(CHARTS);

const randBetween = (a, b) => Math.floor(Math.random() * (b - a) + a)

const DATA_COUNT = 7;
const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };

const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const data = {
    labels: labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map(_ => randBetween(0, 100)),
            backgroundColor: 'rgb(255, 99, 132, 0.5)',
            borderWidth: 2,
            borderColor: 'rgb(255, 99, 132)',
        },
        {
            label: 'Dataset 2',
            data: labels.map(_ => randBetween(50, 100)),
            backgroundColor: 'rgb(54, 162, 235, 0.5)',
            borderWidth: 2,
            borderColor: 'rgb(54, 162, 235)',
        },
    ]
};

const config11 = {
    type: 'line',
    data: data,
    options: {
        responsive: false,
        plugins: {
            title: {
                display: false,
                text: 'Chart.js Line Chart - Cubic interpolation mode'
            },
            legend: {
                display: false
            }
        },
        interaction: {
            intersect: false,
        },
        scales: {
            x: {
                display: true,
                title: {
                    display: false
                }
            },
            y: {
                display: true,
                title: {
                    display: false,
                    text: 'Value'
                },
                suggestedMin: -10,
                suggestedMax: 200
            }
        }
    },
};

const config12 = {
    type: 'pie',
    data: data,
    options: {
        plugins: {
            filler: {
                propagate: false
            },
            'samples-filler-analyser': {
                target: 'chart-analyser'
            },
            legend: {
                display: false
            }
        },
        interaction: {
            intersect: false
        }
    }
};

const myChart11 = new Chart(
    CHARTS['11'],
    config11
);

const myChart12 = new Chart(
    CHARTS['12'],
    config12
);