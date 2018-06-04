<template>
    <div v-if="show" id="right-ctrl"
         class="ctrl-box col-md-2 ctrl-common"
         style="">
        <btn-close @close="show = false"></btn-close>
        <div style="padding-top: 10px;">
            <h4>共: <span style="font-size: 28px;color: steelblue">112,233</span>吨</h4>
            <h4>共: <span style="font-size: 28px;color: #ff5849">555,888</span>吨</h4>
        </div>
        <hr>
        <table class="table table-bordered  table-striped">
            <tbody>
            <tr>
                <th>A</th>
                <th>B</th>
                <th>V</th>
                <th>J</th>
            </tr>
            <tr>
                <td>-</td>
                <td>5</td>
                <td>-</td>
                <td>8</td>
            </tr>
            </tbody>
        </table>
        <hr>
        <div style="width: 100%;height: 200px;" id="r-c">
            <pie :option="pieData"></pie>
        </div>
    </div>
</template>

<script>
    import btnClose from '../../base/button/close.vue'
    import pie from '../../chart/pie.vue'

    export default {
        data() {
            return {
                show: true,
                pieData: {}
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

<style>
    #right-ctrl {
        height: calc(100% - 180px);
        max-height: 450px;
        position: absolute;
        top: 180px;
    }
</style>
