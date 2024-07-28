// script.js
document.addEventListener("DOMContentLoaded", function() {
    const populationBtn = document.getElementById("populationBtn");
    const languagesBtn = document.getElementById("languagesBtn");
    const ctx = document.getElementById("chart").getContext("2d");
    const chartTitle = document.getElementById("chartTitle");
    let chart;

    const populationData = {
        labels: ["World", "China", "India", "USA", "Indonesia", "Brazil", "Pakistan", "Nigeria", "Bangladesh", "Russia", "Japan"],
        datasets: [{
            label: 'Population',
            data: [7633165599, 1377422166, 1295210000, 323947000, 258705000, 206135893, 194125062, 186988000, 161006790, 146599183, 126960000],
            backgroundColor: '#ff9800'
        }]
    };

    const languagesData = {
        labels: ["English", "French", "Arabic", "Spanish", "Portuguese", "Russian", "Dutch", "German", "Chinese", "Serbian"],
        datasets: [{
            label: 'Languages',
            data: [91, 45, 25, 24, 9, 9, 8, 7, 5, 4],
            backgroundColor: '#ff9800'
        }]
    };

    function createChart(data, title) {
        if (chart) {
            chart.destroy();
        }
        chart = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: {
                indexAxis: 'y',
                responsive: true,
                scales: {
                    x: {
                        beginAtZero: true
                    }
                }
            }
        });
        chartTitle.textContent = title;
    }

    populationBtn.addEventListener("click", function() {
        createChart(populationData, '10 Most Populated Countries in the World');
    });

    languagesBtn.addEventListener("click", function() {
        createChart(languagesData, '10 Most Spoken Languages in the World');
    });

    // Initialize with population data
    createChart(populationData, '10 Most Populated Countries in the World');
});
