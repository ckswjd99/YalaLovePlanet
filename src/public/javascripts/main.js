const lovecoin_chart = document.getElementById('lovecoin_chart');
const lovecoin_chart_sizer = () => {
    var parentRect = lovecoin_chart.parentNode.getBoundingClientRect();
    lovecoin_chart.width = parentRect.width;
    lovecoin_chart.height = parentRect.height;
};
lovecoin_chart_sizer();

const randBetween = (a, b) => Math.floor(Math.random() * (b-a) + a)

const DATA_COUNT = 7;
const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };

const labels = [1, 2, 3, 4, 5, 6, 7];
const data = {
    labels: labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [[-50, -30], [-90, -20], [-70, 20], [10, 70], [-50, 80], [20, 50], [50, 120]],
            backgroundColor: 'rgb(255, 99, 132, 0.5)',
            borderWidth: 2,
            borderColor: 'rgb(255, 99, 132)',
        },
        {
            label: 'Dataset 2',
            data: [[-40, -20], [-130, -35], [-10, 30], [20, 50], [-30, 100], [20, 50], [50, 120]],
            backgroundColor: 'rgb(54, 162, 235, 0.5)',
            borderWidth: 2,
            borderColor: 'rgb(54, 162, 235)',
        },
    ]
};

const config = {
    type: 'bar',
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
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

// const actions = [
//     {
//         name: 'Randomize',
//         handler(chart) {
//             chart.data.datasets.forEach(dataset => {
//                 dataset.data = chart.data.labels.map(() => {
//                     return [Utils.rand(-100, 100), Utils.rand(-100, 100)];
//                 });
//             });
//             chart.update();
//         }
//     },
// ];
const myChart = new Chart(
    lovecoin_chart,
    config
);

const toggleSelf = (self) => {
    const visible = self.getAttribute("visible");
    if (visible == "false" || !visible) {
        self.setAttribute("visible", "true");
        self.setAttribute("style", "opacity: 1;");
    }
    else {
        self.setAttribute("visible", "false");
        self.setAttribute("style", "opacity: 0; display: none");
    }

}

const overlayOn = () => {
    const overlay = document.getElementById('overlay');
    overlay.setAttribute("visible", "true");
    overlay.setAttribute("style", "opacity: 1;");
}