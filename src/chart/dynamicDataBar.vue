<template>
    <div :id="elId" :style="{width,height}">
    </div>
</template>

<script>

    var echarts = require('echarts/lib/echarts')
    require('echarts/lib/chart/bar')
    require('echarts/lib/chart/line')
    require('echarts/lib/component/tooltip')
    require('echarts/lib/component/title')
    require('echarts/lib/component/markLine')
    require('echarts/lib/component/markPoint')
    require('echarts/lib/component/legend')


    export default {
        //name: 'hello',
        props: {
            // option: {
            //     type: Object, default() {
            //         return {}
            //     }
            // },
            width: {type: String, default: '100%'},
            height: {tyoe: String, default: '100%'}
//            show: {type: Boolean, default: true},
//            title: {type: String, default: '柱状图'},
//            legend:{type: Object, default(){return {}}},
//            xAxis: {type: Object, default(){return {}}},
//            yAxis: {type: Object, default(){return {}}},
//            series: {type: Array, default(){return []}}

        },
        data() {
            return {
                elId: "chart-d-bar-" + (Math.random() * 10000 >> 0),
                option: {
                    title: {
                        text: '实时数据',
                        //subtext: '纯属虚构',
                        textStyle:{
                            color:'whitesmoke'
                        }
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            label: {
                                backgroundColor: '#283b56'
                            }
                        }
                    },
                    legend: {
                        data: ['存储', '消耗']
                    },
                    dataZoom: {
                        show: false,
                        start: 0,
                        end: 100
                    },
                    xAxis: [
                        {
                            type: 'category',
                            boundaryGap: true,
                            axisLine: {
                                lineStyle: {
                                    color: '#c7cad1',
                                    width: 1,
                                }
                            },
                            data: (function () {
                                var now = new Date();
                                var res = [];
                                var len = 15;
                                while (len--) {
                                    res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
                                    now = new Date(now - 2000);
                                }
                                return res;
                            })()
                        },
                        {
                            type: 'category',
                            boundaryGap: true,
                            axisLine: {
                                lineStyle: {
                                    color: '#c7cad1',
                                    width: 1,
                                }
                            },
                            data: (function () {
                                var res = [];
                                var len = 15;
                                while (len--) {
                                    res.push(10 - len - 1);
                                }
                                return res;
                            })()
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            axisLine: {
                                lineStyle: {
                                    color: '#c7cad1',
                                    width: 1,
                                }
                            },
                            scale: true,
                            name: '千克',
                            max: 30,
                            min: 0,
                            boundaryGap: [0.2, 0.2]
                        },
                        {
                            type: 'value',
                            scale: true,
                            axisLine: {
                                lineStyle: {
                                    color: '#c7cad1',
                                    width: 1,
                                }
                            },
                            name: '千克',
                            max: 1200,
                            min: 0,
                            boundaryGap: [0.2, 0.2]
                        }
                    ],
                    series: [
                        {
                            name: '消耗',
                            type: 'bar',
                            xAxisIndex: 1,
                            yAxisIndex: 1,
                            data: (function () {
                                var res = [];
                                var len = 15;
                                while (len--) {
                                    res.push(Math.round(Math.random() * 1000));
                                }
                                return res;
                            })()
                        },
                        {
                            name: '存储',
                            type: 'line',
                            data: (function () {
                                var res = [];
                                var len = 0;
                                while (len < 15) {
                                    res.push((Math.random() * 10 + 5).toFixed(1) - 0);
                                    len++;
                                }
                                return res;
                            })()
                        }
                    ]
                }
            }
        },
        components: {},
        mounted() {
            //console.log("[!] 变更option属性必须整个改变，改变单个属性无法触发响应");
            //this.option.series = this.formatSeries(this.option.series);
            this.draw();
        },
        watch: {
            // option(val) {
            //     //console.log(val);
            //     this.draw();
            // }
        },
        methods: {
            draw() {
                // 基于准备好的dom，初始化echarts实例
                var myChart = echarts.init(document.getElementById(this.elId))
                // 绘制图表
                myChart.setOption(this.option);


                var app = {};

                app.count = 11;

                setInterval(() => {
                    var axisData = (new Date()).toLocaleTimeString().replace(/^\D*/, '');

                    var data0 = this.option.series[0].data;
                    var data1 = this.option.series[1].data;
                    data0.shift();
                    data0.push(Math.round(Math.random() * 1000));
                    data1.shift();
                    data1.push((Math.random() * 10 + 5).toFixed(1) - 0);

                    this.option.xAxis[0].data.shift();
                    this.option.xAxis[0].data.push(axisData);
                    this.option.xAxis[1].data.shift();
                    this.option.xAxis[1].data.push(app.count++);

                    myChart.setOption(this.option);
                }, 2100);

                window.addEventListener('resize', function () {
                    myChart.resize();
                });
            },
            formatSeries(series) {
                return series.map(function (val) {
                    return Object.assign(val, {
                        type: 'bar',
                        markPoint: {
                            data: [
                                {type: 'max', name: '最大值'},
                                {type: 'min', name: '最小值'}
                            ]
                        },
                        markLine: {
                            data: [
                                {type: 'average', name: '平均值'}
                            ]
                        }
                    });
                })
            }
        }
    }
</script>

<style>

</style>
