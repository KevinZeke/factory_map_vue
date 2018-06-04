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
            option: {
                type: Object, default() {
                    return {}
                }
            },
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
                elId: "chart-bar-" + (Math.random() * 10000 >> 0),
            }
        },
        components: {},
        mounted() {
            console.log("[!] 变更option属性必须整个改变，改变单个属性无法触发响应");
            //this.option.series = this.formatSeries(this.option.series);
            this.draw();
        },
        watch: {
            option(val) {
                //console.log(val);
                this.draw();
            }
        },
        methods: {
            draw() {
                // 基于准备好的dom，初始化echarts实例
                var myChart = echarts.init(document.getElementById(this.elId))
                // 绘制图表
                myChart.setOption(this.option);
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
