$(document).ready(function(){

    $("span.pie").peity("pie");
    $('.donut').peity('donut');
    $(".line").peity("line");
    $(".bar").peity("bar");


    $(".bar-colours-1").peity("bar", {
        fill: ["red", "green", "blue"]
    })

    $(".bar-colours-2").peity("bar", {
        fill: function(value) {
            return value > 0 ? "green" : "red"
        }
    })

    $(".bar-colours-3").peity("bar", {
        fill: function(_, i, all) {
            var g = parseInt((i / all.length) * 255)
            return "rgb(255, " + g + ", 0)"
        }
    })

    $(".pie-colours-1").peity("pie", {
        fill: ["cyan", "magenta", "yellow", "black"]
    })

    $(".pie-colours-2").peity("pie", {
        fill: function(_, i, all) {
            var g = parseInt((i / all.length) * 255)
            return "rgb(255, " + g + ", 0)"
        }
    })

//
    var updatingChart = $(".updating-chart").peity("line", { width: 64 })

    setInterval(function() {
        var random = Math.round(Math.random() * 10)
        var values = updatingChart.text().split(",")
        values.shift()
        values.push(random)

        updatingChart
            .text(values.join(","))
            .change()
    }, 1000)
});

