<template>
    <div v-if="show" id="head-ctrl" class="ctrl-box col-md-8 ctrl-common"
         style="height: 180px;background-color:#fff; position: absolute;top: 0;left: 0;">
        <btn-close @close="show = false"></btn-close>
        <div class="col-md-3 head-chart" id="h-c-1" style="height: 100%">
            <pie :option="pieData"></pie>
        </div>
        <div class="col-md-3 head-chart" id="h-c-2" style="height: 100%">
            <pie :option="pieData"></pie>
        </div>
        <div class="col-md-6 head-chart" id="h-c-3" style="height: 100%;overflow: hidden">
            <div v-if="!showChartDelay"
                 style="width: 100%;height: 100%;position: absolute;">
                <Spin fix></Spin>
            </div>
            <Carousel v-model="carouseIndex" autoplay :autoplay-speed="4000" :height="180" loop>
                <CarouselItem>
                    <div class="carouse-item">
                        <eline :width="'90%'"
                               :height="'90%'" v-if="showChartDelay" :option="lineData"></eline>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div class="carouse-item">
                        <pie v-if="showChartDelay" :option="pieData"></pie>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div class="carouse-item">
                        <pie v-if="showChartDelay" :option="pieData"></pie>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div class="carouse-item">
                        <pie v-if="showChartDelay" :option="pieData"></pie>
                    </div>
                </CarouselItem>
            </Carousel>
        </div>
    </div>
</template>

<script>
    import btnClose from '../../base/button/close.vue'
    import pie from '../../chart/pie.vue'
    import eline from '../../chart/line.vue'

    export default {
        data() {
            return {
                pieData: {},
                lineData: {},
                show: true,
                carouseIndex: 0,
                showChartDelay: false
            }
        },
        mounted() {
            this.drawPie();
            this.drawLine();
            setTimeout(() => {
                this.showChartDelay = true;
            }, 500);
        },
        components: {btnClose, pie, eline},
        methods: {
            drawPie() {
                this.pieData = {
                    title: {
                        text: '饼图演示',
                        x: 'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        type: 'scroll',
                        orient: 'horizontal',
                        right: 10,
                        top: 20,
                        bottom: 20,
                        data: ['a', 'b', 'c'],

                    },
                    series: [
                        {
                            name: '姓名',
                            type: 'pie',
                            radius: '45%',
                            center: ['40%', '50%'],
                            data: [
                                {name: 'a', value: 1},
                                {name: 'b', value: 3},
                                {name: 'c', value: 2},
                            ],
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                };
            },
            drawLine() {
                this.lineData = {
                    title: {
                        //text: '堆叠区域图'
                    },

                    legend: {
                        data: ['危险化学品A', '危险化学品B', '危险化学品C'],
                        right: '1%',
                        type:'scroll'
                    },

                    grid: {
                        left: '5%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            boundaryGap: false,
                            data: ['第一季度', '第二季度', '第三季度', '第四季度']
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    series: [
                        {
                            name: '危险化学品A',
                            type: 'line',
                            stack: '总量',
                            areaStyle: {normal: {}},
                            data: [120, 132, 101, 134]
                        },
                        {
                            name: '危险化学品B',
                            type: 'line',
                            stack: '总量',
                            areaStyle: {normal: {}},
                            data: [220, 182, 191, 234]
                        },
                        {
                            name: '危险化学品C',
                            type: 'line',
                            stack: '总量',
                            areaStyle: {normal: {}},
                            data: [150, 232, 201, 154]
                        }
                    ]
                };
            }
        }
    }
</script>

<style scope>
    .carouse-item {
        height: 100%;
    }

    .head-chart {
        position: relative;
    }
</style>
