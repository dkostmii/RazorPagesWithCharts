// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

async function showChartData() {
    const chartData = await getChartData();

    const canvas = document.getElementById('chart');

    if (!(canvas instanceof HTMLCanvasElement)) {
        throw new TypeError('Cannot load the chart.');
    }

    const data = {
        labels: chartData.xSeries,
        datasets: [{
            label: 'Chart data',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: chartData.ySeries
        }],
    };

    const chart = new Chart(canvas, {
        type: 'line',
        data: data,
        options: {
            responsive: false,
        },
    });
}

async function getChartData() {
    const response = await fetch('./InlineChart?handler=ChartData', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        }
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw Error('Failed to load chart data');
            }
        });

    return response;
}
