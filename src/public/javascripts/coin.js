const btcData = async () => {
    const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=BTC&tsym=USD&limit=119&api_key=0646cc7b8a4d4b54926c74e0b20253b57fd4ee406df79b3d57d5439874960146');
    const json = await response.json();
    const data = json.Data.Data
    const times = data.map(obj => obj.time)
    const prices = data.map(obj => obj.high)
    return {
      times,
      prices
    }
  }

  let createBtcChart

  async function printBtcChart() {
    let { times, prices } = await btcData()
    console.log(times, prices)
  
    let btcChart = document.getElementById('lovecoin_chart').getContext('2d');
  
    let gradient = btcChart.createLinearGradient(0, 0, 0, 400);
  
    gradient.addColorStop(0, 'rgba(247,147,26,.5)');
    gradient.addColorStop(0.7, 'rgba(255,193,119,0)');
  
    // Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
    // Chart.defaults.global.defaultFontSize = 12;
  
    createBtcChart = new Chart(btcChart, {
      type: 'line',
      data: {
        labels: times,
        datasets: [{
          label: '$',
          data: prices,
          backgroundColor: gradient,
          borderColor: 'rgba(247,147,26,1)',
          borderJoinStyle: 'round',
          borderCapStyle: 'round',
          borderWidth: 3,
          pointRadius: 0,
          pointHitRadius: 10,
          lineTension: .2,
          fill: true
        }]
      },
  
      options: {
        title: {
          display: false,
          text: 'Heckin Chart!',
          fontSize: 35
        },
  
        legend: {
          display: false
        },

        plugins: {
            legend: {
                display: false
            }
        },
  
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        },
  
        scales: {
            y: {
                grid: {
                    display: false,
                }
            },
            x: {
                grid: {
                    display: false,
                }
            },
          
        },
  
        tooltips: {
          callbacks: {
            //This removes the tooltip title
            title: function() {}
         },
          //this removes legend color
          displayColors: false,
          yPadding: 10,
          xPadding: 10,
          position: 'nearest',
          caretSize: 10,
          backgroundColor: 'rgba(255,255,255,.9)',
          bodyFontSize: 15,
          bodyFontColor: '#303030' 
        }
      }
    });
  }

  printBtcChart()