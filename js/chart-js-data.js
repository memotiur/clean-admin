
//Bar Chart start
var ctx = document.getElementById('chart1').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: {}
});

//Bar Chart end
var ctx = document.getElementById('barChart').getContext('2d');
var barChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

//Pie Chart end
var ctx = document.getElementById("pieChart").getContext('2d');
var pieChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["Green", "Blue", "Purple", "Yellow", "Red", "Black"],
        datasets: [{
            backgroundColor: [
                "#2ecc71",
                "#3498db",
                "#9b59b6",
                "#f1c40f",
                "#e74c3c",
                "#34495e"
            ],
            data: [12, 19, 17, 28, 24, 7]
        }]
    }
});

//Donut Chart end
var ctx = document.getElementById("donutPieChart").getContext('2d');
var donutPieChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Green", "Blue", "Purple", "Yellow", "Red", "Black"],
        datasets: [{
            backgroundColor: [
                "#2ecc71",
                "#3498db",
                "#9b59b6",
                "#f1c40f",
                "#e74c3c",
                "#34495e"
            ],
            data: [12, 19, 17, 28, 24, 7]
        }]
    }
});

//Radar Chart start
var data = {
    labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
    datasets: [
        {
            label: "My First dataset",
            backgroundColor: "rgba(179,181,198,0.2)",
            borderColor: "rgba(179,181,198,1)",
            pointBackgroundColor: "rgba(179,181,198,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(179,181,198,1)",
            data: [65, 59, 90, 81, 56, 55, 40]
        },
        {
            label: "My Second dataset",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            pointBackgroundColor: "rgba(255,99,132,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(255,99,132,1)",
            data: [28, 48, 40, 19, 96, 27, 100]
        }
    ]
};
var ctx = document.getElementById("radarChart");
var options = {
    tooltips: {
        mode: 'label'
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    }
};
var myRadarChart = new Chart(ctx, {
    type: 'radar',
    data: data,
    options: options
});


//Polar Chart
var data = {
    datasets: [{
        data: [
            11,
            16,
            7,
            3,
            14
        ],
        backgroundColor: [
            "#FF6384",
            "#4BC0C0",
            "#FFCE56",
            "#E7E9ED",
            "#36A2EB"
        ],
        label: 'My dataset' // for legend
    }],
    labels: [
        "Red",
        "Green",
        "Yellow",
        "Grey",
        "Blue"
    ]
};
var ctx = $("#polarChart");
new Chart(ctx, {
    data: data,
    type: 'polarArea'
});

