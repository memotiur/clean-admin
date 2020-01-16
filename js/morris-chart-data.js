new Morris.Line({
    // ID of the element in which to draw the chart.
    element: 'lineChart',
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
    data: [
        {year: '2008', value: 20},
        {year: '2009', value: 10},
        {year: '2010', value: 5},
        {year: '2011', value: 5},
        {year: '2012', value: 20}
    ],
    // The name of the data record attribute that contains x-values.
    xkey: 'year',
    // A list of names of data record attributes that contain y-values.
    ykeys: ['value'],
    // Labels for the ykeys -- will be displayed when you hover over the
    // chart.
    labels: ['Value']
});


//Barchart
Morris.Bar({
    element: 'barChart',
    data: [
        {y: '2008', a: 100},
        {y: '2007', a: 275},
        {y: '2009', a: 150},
        {y: '2009', a: 70},
        {y: '2009', a: 250},
    ],
    xkey: 'y',
    ykeys: ['a'],
    labels: ['Series A']
});

//Area Chart
var data = [
        {y: '2014', a: 50, b: 90},
        {y: '2015', a: 65, b: 75},
        {y: '2016', a: 50, b: 50},
        {y: '2017', a: 75, b: 60},
        {y: '2018', a: 80, b: 65},
        {y: '2019', a: 90, b: 70},
        {y: '2020', a: 100, b: 75},
        {y: '2021', a: 115, b: 75},
        {y: '2022', a: 120, b: 85},
        {y: '2023', a: 145, b: 85},
        {y: '2024', a: 160, b: 95}
    ],
    config = {
        data: data,
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Total Income', 'Total Outcome'],
        fillOpacity: 0.6,
        hideHover: 'auto',
        behaveLikeLine: true,
        resize: true,
        pointFillColors: ['#ffffff'],
        pointStrokeColors: ['black'],
        lineColors: ['gray', 'red']
    };
config.element = 'areaChart';
Morris.Area(config);
config.element = 'lineCharts';
Morris.Line(config);

Morris.Donut({
    element: 'pieChart',
    data: [
        {label: "Friends", value: 30},
        {label: "Allies", value: 15},
        {label: "Enemies", value: 45},
        {label: "Neutral", value: 10}
    ]
});