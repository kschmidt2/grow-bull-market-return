// adds social class to get social chart
// let element = document.getElementsByClassName("chart-area");
// for(var i = 0; i < element.length; i++)
// {
//     element[i].className += " social";
// }\

// adds social-square class to get square social chart
// let element = document.getElementsByClassName("chart-area");
// for(var i = 0; i < element.length; i++)
// {
//     element[i].className += " social-square";
// }

// bolds the subhead if there is no headline
let subhead = document.getElementsByClassName("chart-subhead"),
    headline = document.getElementById("chart-head");
    if (!headline) {
        for(var i = 0; i < subhead.length; i++) {
            subhead[i].style.fontWeight = "600";
        }       
     }

Highcharts.setOptions({
    lang: {
      thousandsSep: ','
    }
});

let chartIdBullReturn = document.getElementById("chart-container-bull-return");

// checks for the chart ID and displays a backup image if the browser can't find it
setTimeout(function() {
    if(chartIdBullReturn.innerHTML === "") {
        // console.log('noId');
        let chartArea = document.getElementsByClassName("chart-area-bull-return");
        for(var i = 0; i < chartArea.length; i++) {
            chartArea[i].style.display = "none";
        } 
        // insert chart screenshot here
        document.getElementById("chart-fallback").innerHTML += '<img src="https://fm-static.cnbc.com/awsmedia/chart/2019/10/08/chart-error_wide.1570569331252.png" style="width: 100%;max-width:660px">';
    } else {
        // console.log('yesId')
    }
},500);

function drawHighcharts() {
    Highcharts.chart(chartIdBullReturn, {
        chart: {
            type: 'area',
            styledMode: true,
            spacingBottom: 25,
            spacingRight: 100,
            spacingLeft: 2
        }, 
        title: {
            text: null
        },
        data: {
            googleSpreadsheetKey: '1Jv-5Y6hj-fSXSjCq6sH1aNKLY3ZhmjtpYDE7eVcK6Ds'
        },
        // for bar charts only
        plotOptions: {
            series: {
                groupPadding: 0.1
            } 
        },
        // for line charts only
        // plotOptions: {
        //     series: {
        //         lineWidth: 1,
        //         // clip: false,
        //         marker: {
        //             enabled: false,
        //             symbol: 'circle',
        //             fillColor: '#ffffff',
        //             states: {
        //                 hover: {
        //                     fillColor: '#ffffff'
        //                 }
        //             }
        //         }
        //     }
        // },
        legend: {
            enabled: false
        },
        xAxis: {
            labels: {
                style: {
                    whiteSpace: 'nowrap'
                }
            },
            tickLength: 5
        },
        yAxis: {
            title: false,
            labels: {
                useHTML: true,
                overflow: 'allow',
                formatter: function () {
                    return Highcharts.numberFormat(this.value,0,'.',',');
                },
            },
            max: 3500,
            min: 0,
            tickAmount: 8
        },
        credits: {
            enabled: false
        },
        tooltip: {
            shadow: false,
            padding: 10
        },
        annotations: [{
            labels: [{
                point: {
                    x: 1581704965000, // timestamp
                    y: 0, // value
                    xAxis: 0, // yAxis INDEX
                    yAxis: 0 // xAxis INDEX
                },
                align: 'right',
                text: 'Bull market<br><b>400.5% gain</b>',
                y: 0,
                x: 0,
                allowOverlap: true
            }, {
                point: {
                    x: 1236364165000, // timestamp
                    y: 3495, // value
                    xAxis: 0, // yAxis INDEX
                    yAxis: 0 // xAxis INDEX
                },
                align: 'left',
                text: 'March 9, 2009',
                y: 0,
                x: 0,
                allowOverlap: true 
            }, {
                point: {
                    x: 1581704965000, // timestamp
                    y: 3495, // value
                    xAxis: 0, // yAxis INDEX
                    yAxis: 0 // xAxis INDEX
                },
                align: 'right',
                text: 'February 19, 2020',
                y: 0,
                x: -5,
                allowOverlap: true 
            }],
        }],
        responsive: {
            rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                chart: {
                spacingRight: 10
                },
                legend: {
                    align: 'left',
                    x: -18
                },
                tooltip: {
                    enabled: false
                }
            }
            }]
        }
    })
}

if (document.readyState === 'complete' || document.readyState === 'interactive') {
    drawHighcharts();
} else {
    document.addEventListener("DOMContentLoaded", drawHighcharts);
}