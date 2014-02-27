$(function () {
    $('#container').highcharts({
        chart: {
            type: 'column',
            margin: 75,
            is3d: true,
            options3d: {
                alpha: 15,
                beta: 15,
                depth: 50,
                frame: {
                    bottom: {
                        size: 10,
                        color: '#C0C0C0'
                    },
                    side: {
                        size: 5,
                        color: '#C0C0C0'
                    },
                    back: {
                        size: 5,
                        color: '#D0D0D0'
                    }
                }
            }
        },
        plotOptions: {
            column: {
                depth: 25,
                groupZPadding: 15
            }
        },
        series: [{
            data: [2, 3, null, 4, 0, 5]          
        }]
    });
});