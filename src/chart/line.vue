<template>
    <div :id="elId" :style="{width,height}">
    </div>
</template>

<script>
    var echarts = require('echarts/lib/echarts')
    require('echarts/lib/chart/line')
    require('echarts/lib/component/tooltip')
    require('echarts/lib/component/title')
    require('echarts/lib/component/grid')
    require('echarts/lib/component/legend')
    require('echarts/lib/component/legendScroll')
    // require('echarts/lib/component/markLine')
    // require('echarts/lib/component/markPoint')

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


        },
        data() {
            return {
                elId: "chart-line-" + (Math.random() * 10000 >> 0),
            }
        },
        components: {},
        mounted() {
            console.log("[!] 变更option属性必须整个改变，改变单个属性无法触发响应");
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
        }
    }

</script>

<style>

</style>
