let barChart;
let lineChart;
let radarChart;

function setChartDimensions(chart, containerId) {
    const canvas = document.getElementById(containerId);
    const maxWidth = canvas.parentElement.clientWidth;
    const maxHeight = 1000; 

    canvas.style.width = `${maxWidth}px`;
    canvas.style.height = `${maxHeight}px`; 
    canvas.style.maxHeight = `${maxHeight}px`; 

    chart.resize(); 
}
function reuseChartContent(data) {

    const incidentCountsByYear = data.reduce((acc, incident) => {
        const year = incident.iyear;
        if (!acc[year]) {
            acc[year] = 0;
        }
        acc[year]++;
        return acc;
    }, {});

    const years = Object.keys(incidentCountsByYear).sort();
    const incidentCounts = years.map(year => incidentCountsByYear[year]);


    return {
        years,
        incidentCounts
    };
}

export function getBarChart(data, containerId) {
    if (barChart) {
        barChart.destroy();
    }

    const { years, incidentCounts } = reuseChartContent(data);
    

    barChart = new Chart(document.getElementById(containerId), {
        type: 'bar',
        data: {
            labels: years,
            datasets: [{
                label: '# of Incidents per Year',
                data: incidentCounts,
                borderWidth: 1,
                backgroundColor: 'rgba(75, 192, 192, 1)',
                borderColor: 'rgba(75, 192, 192, 1)'
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    setChartDimensions(barChart, containerId);
}

export function getLineChart(data, containerId) {
    if (lineChart) {
        lineChart.destroy();
    }

    const { years, incidentCounts } = reuseChartContent(data);

    lineChart = new Chart(document.getElementById(containerId), {
        type: 'line',
        data: {
            labels: years,
            datasets: [{
                label: '# of Incidents per Year',
                data: incidentCounts,
                borderWidth: 1,
                backgroundColor: '#83B4FF',
                borderColor: '#83B4FF'
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    setChartDimensions(lineChart, containerId);
}

export function getRadarChart(data, containerId) {
    if (radarChart) {
        radarChart.destroy();
    }

    const { years, incidentCounts } = reuseChartContent(data);

    radarChart = new Chart(document.getElementById(containerId), {
        type: 'radar',
        data: {
            labels: years,
            datasets: [{
                label: '# of Incidents per Year',
                data: incidentCounts,
                fill: true,
                backgroundColor: 'rgba(111, 220, 227, 0.5)',
                borderColor: '#FFFDB5',
                pointBackgroundColor: '#5C88C4',
                pointBorderColor: '#5C88C4',
                pointHoverBackgroundColor: '#5C88C4',
                pointHoverBorderColor: '#5C88C4'
            }]
        },
        options: {
            elements: {
                line: {
                    borderWidth: 3
                }
            }
        }
    });
    setChartDimensions(radarChart, containerId);
}