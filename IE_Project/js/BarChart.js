// JavaScript + jQuiry 1.12.1        
$(function () {
    var UNDF;
    // Create the chart
    $('#container').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Do you know the types of endangered animals on the grassland\?'
        },
        subtitle: {
            text: 'There are 47 endangered animals living in the Victorian grasslands'
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'The number of animal species'
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                //pointWidth: 88
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormatter: function () {
                if (this.series.chart.drilldownLevels !== UNDF && this.series.chart.drilldownLevels.length > 0) {
                    return '<span style="color:' + this.color + '">' + this.series.name + '</span>: <b>' + this.y + '</b> out of <b>' + this.total + '</b> live in ' + this.name + '<br/>';
                } else {
                    return '<span style="color:' + this.color + '">' + this.name + '</span>: <b>' + this.y + '</b> out of <b>' + this.total + '</b> in total<br/>';
                }
            },
            positioner: function (labelWidth, labelHeight, point) {
                var tooltipX = point.plotX - 25;
                var tooltipY = point.plotY - 35;
                return {
                    x: tooltipX,
                    y: tooltipY
                };
            }
        },

        series: [
            {
                name: "Type",
                colorByPoint: true,
                data: [
                    {
                        name: "Amphibians",
                        y: 5,
                        percentage: 10.6,
                        total: 47,
                        dataLabels: {
                            align: 'center',
                            enabled: true,
                            useHTML: true,
                            formatter: function () {
                                return '<div style="text-align:center"><div>' + '<img style="width:40px; height:40px;" src="https://github.com/shluberoi/EVERGREEN/blob/Kun-visualisation/IE_Project/img/025-frog-1.png?raw=true"><img>' + '</div></div>';
                            }
                        },
                        drilldown: "Amphibians"
                    },
                    {
                        name: "Bats",
                        y: 2,
                        percentage: 4.3,
                        total: 47,
                        dataLabels: {
                            align: 'center',
                            enabled: true,
                            useHTML: true,
                            formatter: function () {
                                return '<img style="width:40px; height:40px;" src="https://github.com/shluberoi/EVERGREEN/blob/Kun-visualisation/IE_Project/img/026-bat-2.png?raw=true"><img>';
                            }
                        },
                        drilldown: "Bats"
                    },
                    {
                        name: "Birds",
                        y: 17,
                        percentage: 36.2,
                        total: 47,
                        dataLabels: {
                            align: 'center',
                            enabled: true,
                            useHTML: true,
                            formatter: function () {
                                return '<img style="width:40px; height:40px;" src="https://github.com/shluberoi/EVERGREEN/blob/Kun-visualisation/IE_Project/img/027-bird-1.png?raw=true"><img>';
                            }
                        },
                        drilldown: "Birds"
                    },
                    {
                        name: "Invertebrates",
                        y: 3,
                        percentage: 6.4,
                        total: 47,
                        dataLabels: {
                            align: 'center',
                            enabled: true,
                            useHTML: true,
                            formatter: function () {
                                return '<img style="width:40px; height:40px;" src="https://github.com/shluberoi/EVERGREEN/blob/Kun-visualisation/IE_Project/img/029-moth-1.png?raw=true"><img>';
                            }
                        },
                        drilldown: "Invertebrates"
                    },
                    {
                        name: "Mammals",
                        y: 10,
                        percentage: 21.3,
                        total: 47,
                        dataLabels: {
                            align: 'center',
                            enabled: true,
                            useHTML: true,
                            formatter: function () {
                                return '<img style="width:60px; height:60px;" src="https://github.com/shluberoi/EVERGREEN/blob/Kun-visualisation/IE_Project/img/030-ferret.png?raw=true"><img>';
                            },
                            y: 15
                        },
                        drilldown: "Mammals"
                    },
                    {
                        name: "Reptiles",
                        y: 6,
                        percentage: 12.8,
                        total: 47,
                        dataLabels: {
                            align: 'center',
                            enabled: true,
                            useHTML: true,
                            formatter: function () {
                                return '<img style="width:55px; height:55px;" src="https://github.com/shluberoi/EVERGREEN/blob/Kun-visualisation/IE_Project/img/032-lizard-1.png?raw=true"><img>';
                            },
                            y: 10
                        },
                        drilldown: "Reptiles"
                    },
                    {
                        name: "Waders",
                        y: 4,
                        percentage: 8.5,
                        total: 47,
                        dataLabels: {
                            align: 'center',
                            enabled: true,
                            useHTML: true,
                            formatter: function () {
                                return '<img style="width:50px; height:50px;" src="https://github.com/shluberoi/EVERGREEN/blob/Kun-visualisation/IE_Project/img/031-heron-1.png?raw=true"><img>';
                            }
                        },
                        drilldown: "Waders"
                    }
                ]
            }
        ],
        drilldown: {
            series: [
                {
                    name: "Amphibians",
                    id: "Amphibians",
                    data: [
                        {
                            name: "Grassland",
                            y: 1,
                            total: 5,
                            dataLabels: {
                                align: 'center',
                                enabled: true,
                                useHTML: true,
                                formatter: function () {
                                    return '<img style="width:87px; height:70px;" src="https://github.com/shluberoi/EVERGREEN/blob/Kun-visualisation/IE_Project/img/033-grassland.png?raw=true"><img>';
                                },
                                y: 300
                            },
                        },
                        {
                            name: "Wetland",
                            y: 3,
                            total: 5,
                            dataLabels: {
                                align: 'center',
                                enabled: true,
                                useHTML: true,
                                formatter: function () {
                                    return '<img style="width:87px; height:70px;" src="https://github.com/shluberoi/EVERGREEN/blob/Kun-visualisation/IE_Project/img/034-swamp.png?raw=true"><img>';
                                },
                                y: 300
                            },
                        },
                        {
                            name: "Woodland",
                            y: 1,
                            total: 5,
                            dataLabels: {
                                align: 'center',
                                enabled: true,
                                useHTML: true,
                                formatter: function () {
                                    return '<img style="width:87px; height:70px;" src="https://github.com/shluberoi/EVERGREEN/blob/Kun-visualisation/IE_Project/img/035-trees.png?raw=true"><img>';
                                },
                                y: 300
                            },
                        },
                        {
                            name: "Stony Rise",
                            y: 0,
                            total: 5
                        }
                    ]
                },
                {
                    name: "Bats",
                    id: "Bats",
                    data: [
                        {
                            name: "Grassland",
                            y: 0,
                            total: 2
                        },
                        {
                            name: "Wetland",
                            y: 1,
                            total: 2,
                            dataLabels: {
                                align: 'center',
                                enabled: true,
                                useHTML: true,
                                formatter: function () {
                                    return '<img style="width:87px; height:70px;" src="https://github.com/shluberoi/EVERGREEN/blob/Kun-visualisation/IE_Project/img/034-swamp.png?raw=true"><img>';
                                },
                                y: 300
                            },
                        },
                        {
                            name: "Woodland",
                            y: 1,
                            total: 2,
                            dataLabels: {
                                align: 'center',
                                enabled: true,
                                useHTML: true,
                                formatter: function () {
                                    return '<img style="width:87px; height:70px;" src="https://github.com/shluberoi/EVERGREEN/blob/Kun-visualisation/IE_Project/img/035-trees.png?raw=true"><img>';
                                },
                                y: 300
                            },
                        },
                        {
                            name: "Stony Rise",
                            y: 0,
                            total: 2
                        }
                    ]
                },
                {
                    name: "Birds",
                    id: "Birds",
                    data: [
                        {
                            name: "Grassland",
                            y: 2,
                            total: 17,
                            dataLabels: {
                                align: 'center',
                                enabled: true,
                                useHTML: true,
                                formatter: function () {
                                    return '<img style="width:88px; height:70px;" src="https://github.com/shluberoi/EVERGREEN/blob/Kun-visualisation/IE_Project/img/033-grassland.png?raw=true"><img>';
                                },
                                y: 300
                            },
                        },
                        {
                            name: "Wetland",
                            y: 5,
                            total: 17,
                            dataLabels: {
                                align: 'center',
                                enabled: true,
                                useHTML: true,
                                formatter: function () {
                                    return '<img style="width:88px; height:70px;" src="https://github.com/shluberoi/EVERGREEN/blob/Kun-visualisation/IE_Project/img/034-swamp.png?raw=true"><img>';
                                },
                                y: 300
                            },
                        },
                        {
                            name: "Woodland",
                            y: 8,
                            total: 17,
                            dataLabels: {
                                align: 'center',
                                enabled: true,
                                useHTML: true,
                                formatter: function () {
                                    return '<img style="width:88px; height:70px;" src="https://github.com/shluberoi/EVERGREEN/blob/Kun-visualisation/IE_Project/img/035-trees.png?raw=true"><img>';
                                },
                                y: 300
                            },
                        },
                        {
                            name: "Stony Rise",
                            y: 2,
                            total: 17,
                            dataLabels: {
                                align: 'center',
                                enabled: true,
                                useHTML: true,
                                formatter: function () {
                                    return '<img style="width:88px; height:70px;" src="https://github.com/shluberoi/EVERGREEN/blob/Kun-visualisation/IE_Project/img/036-stone.png?raw=true"><img>';
                                },
                                y: 300
                            },
                        }
                    ]
                },
                {
                    name: "Invertebrates",
                    id: "Invertebrates",
                    data: [
                        {
                            name: "Grassland",
                            y: 2,
                            total: 3,
                            dataLabels: {
                                align: 'center',
                                enabled: true,
                                useHTML: true,
                                formatter: function () {
                                    return '<img style="width:87px; height:90px;" src="https://github.com/shluberoi/EVERGREEN/blob/Kun-visualisation/IE_Project/img/033-grassland.png?raw=true"><img>';
                                },
                                y: 300
                            },
                        },
                        {
                            name: "Wetland",
                            y: 0,
                            total: 3
                        },
                        {
                            name: "Woodland",
                            y: 1,
                            total: 3,
                            dataLabels: {
                                align: 'center',
                                enabled: true,
                                useHTML: true,
                                formatter: function () {
                                    return '<img style="width:87px; height:90px;" src="https://github.com/shluberoi/EVERGREEN/blob/Kun-visualisation/IE_Project/img/035-trees.png?raw=true"><img>';
                                },
                                y: 300
                            },
                        },
                        {
                            name: "Stony Rise",
                            y: 0,
                            total: 3
                        }
                    ]
                },
                {
                    name: "Mammals",
                    id: "Mammals",
                    data: [
                        {
                            name: "Grassland",
                            y: 2,
                            total: 10,
                            dataLabels: {
                                align: 'center',
                                enabled: true,
                                useHTML: true,
                                formatter: function () {
                                    return '<img style="width:87px; height:90px;" src="https://github.com/shluberoi/EVERGREEN/blob/Kun-visualisation/IE_Project/img/033-grassland.png?raw=true"><img>';
                                },
                                y: 300
                            },
                        },
                        {
                            name: "Wetland",
                            y: 2,
                            total: 10,
                            dataLabels: {
                                align: 'center',
                                enabled: true,
                                useHTML: true,
                                formatter: function () {
                                    return '<img style="width:87px; height:90px;" src="https://github.com/shluberoi/EVERGREEN/blob/Kun-visualisation/IE_Project/img/034-swamp.png?raw=true"><img>';
                                },
                                y: 300
                            },
                        },
                        {
                            name: "Woodland",
                            y: 6,
                            total: 10,
                            dataLabels: {
                                align: 'center',
                                enabled: true,
                                useHTML: true,
                                formatter: function () {
                                    return '<img style="width:87px; height:90px;" src="https://github.com/shluberoi/EVERGREEN/blob/Kun-visualisation/IE_Project/img/035-trees.png?raw=true"><img>';
                                },
                                y: 300
                            },
                        },
                        {
                            name: "Stony Rise",
                            y: 0,
                            total: 10
                        }
                    ]
                },
                {
                    name: "Reptiles",
                    id: "Reptiles",
                    data: [
                        {
                            name: "Grassland",
                            y: 2,
                            total: 6,
                            dataLabels: {
                                align: 'center',
                                enabled: true,
                                useHTML: true,
                                formatter: function () {
                                    return '<img style="width:89px; height:90px;" src="https://github.com/shluberoi/EVERGREEN/blob/Kun-visualisation/IE_Project/img/033-grassland.png?raw=true"><img>';
                                },
                                y: 300
                            },
                        },
                        {
                            name: "Wetland",
                            y: 0,
                            total: 6
                        },
                        {
                            name: "Woodland",
                            y: 1,
                            total: 6,
                            dataLabels: {
                                align: 'center',
                                enabled: true,
                                useHTML: true,
                                formatter: function () {
                                    return '<img style="width:89px; height:90px;" src="https://github.com/shluberoi/EVERGREEN/blob/Kun-visualisation/IE_Project/img/035-trees.png?raw=true"><img>';
                                },
                                y: 300
                            },
                        },
                        {
                            name: "Stony Rise",
                            y: 3,
                            total: 6,
                            dataLabels: {
                                align: 'center',
                                enabled: true,
                                useHTML: true,
                                formatter: function () {
                                    return '<img style="width:89px; height:90px;" src="https://github.com/shluberoi/EVERGREEN/blob/Kun-visualisation/IE_Project/img/036-stone.png?raw=true"><img>';
                                },
                                y: 300
                            },
                        }
                    ]
                },
                {
                    name: "Waders",
                    id: "Waders",
                    data: [
                        {
                            name: "Grassland",
                            y: 0,
                            total: 4
                        },
                        {
                            name: "Wetland",
                            y: 2,
                            total: 4,
                            dataLabels: {
                                align: 'center',
                                enabled: true,
                                useHTML: true,
                                formatter: function () {
                                    return '<img style="width:87px; height:90px;" src="https://github.com/shluberoi/EVERGREEN/blob/Kun-visualisation/IE_Project/img/034-swamp.png?raw=true"><img>';
                                },
                                y: 300
                            },
                        },
                        {
                            name: "Woodland",
                            y: 0,
                            total: 4
                        },
                        {
                            name: "Stony Rise",
                            y: 2,
                            total: 4,
                            dataLabels: {
                                align: 'center',
                                enabled: true,
                                useHTML: true,
                                formatter: function () {
                                    return '<img style="width:87px; height:90px;" src="https://github.com/shluberoi/EVERGREEN/blob/Kun-visualisation/IE_Project/img/036-stone.png?raw=true"><img>';
                                },
                                y: 300
                            },
                        }
                    ]
                }
            ]
        }
    });
});