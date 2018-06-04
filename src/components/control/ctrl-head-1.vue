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
        <div class="col-md-6 head-chart" id="h-c-3" style="height: 100%">
            <Carousel v-model="carouseIndex"  :height="180" loop>
                <CarouselItem>
                    <div class="carouse-item">1</div>
                </CarouselItem>
                <CarouselItem>
                    <div class="carouse-item">2</div>
                </CarouselItem>
                <CarouselItem>
                    <div class="carouse-item">3</div>
                </CarouselItem>
                <CarouselItem>
                    <div class="carouse-item">4</div>
                </CarouselItem>
            </Carousel>
        </div>
    </div>
</template>

<script>
    import btnClose from '../../base/button/close.vue'
    import pie from '../../chart/pie.vue'

    export default {
        data() {
            return {
                pieData: {},
                show: true,
                carouseIndex:0
            }
        },
        mounted() {
            this.drawPie();
        },
        components: {btnClose, pie},
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
            }
        }
    }
</script>

<style scope>
.carouse-item{
    height: 100%;
}
</style>
