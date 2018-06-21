<template>
    <div class="fac-update">
        <div class="order">
            <span style="white-space:pre;">  </span><span class="line"></span>
            <span style="white-space:pre;">  </span><span class="txt">快速浏览</span>
            <span style="white-space:pre;">  </span><span class="line"></span>
        </div>
        <div class="show-box">
            <div class="col-md-3 col-lg-3 col-sm-3 col-xs-6 box-container">
                <div class="box box1">
                    <div>本月更新：</div>
                    <div><span class="num">3</span>次</div>
                    <hr>
                </div>
            </div>
            <div class="col-md-3 col-lg-3 col-sm-3 col-xs-6 box-container">
                <div class="box box2">
                    <div>距上一次更新：</div>
                    <div><span class="num">4</span>天</div>
                    <hr>
                </div>
            </div>
            <div class="col-md-3 col-lg-3 col-sm-3 col-xs-6 box-container">
                <div class="box box3">
                    <div>本月警告：</div>
                    <div><span class="num">0</span>次</div>
                    <hr>
                </div>
            </div>
            <div class="col-md-3 col-lg-3 col-sm-3 col-xs-6 box-container">
                <div class="box box4">
                    <div>本月逾期：</div>
                    <div><span class="num">0</span>次</div>
                    <hr>
                </div>
            </div>
        </div>
        <div class="order">
            <span style="white-space:pre;">  </span><span class="line"></span>
            <span style="white-space:pre;">  </span><span class="txt">更新数据统计</span>
            <span style="white-space:pre;">  </span><span class="line"></span>
        </div>
        <div class="row">
            <div class="update-chart col-lg-10 col-md-10">
                <eline :width="'100%'"
                       :height="'95%'" v-if="showChartDelay" :option="lineData"></eline>
            </div>
            <div class="col-md-2 col-lg-2 hidden-sm hidden-xs">
                <p>本月更新时间轴</p>
                <Timeline>
                    <TimelineItem>
                        <p class="time">2018年6月19日</p>
                        <p class="content">更新2条记录</p>
                    </TimelineItem>
                    <TimelineItem>
                        <p class="time">2018年6月18日</p>
                        <p class="content">更新3条记录</p>
                    </TimelineItem>
                    <TimelineItem>
                        <p class="time">2018年6月5日</p>
                        <p class="content">更新1条记录</p>
                    </TimelineItem>
                    <TimelineItem>
                        <p class="time">2018年6月4日</p>
                        <p class="content">更新1条记录</p>
                    </TimelineItem>
                    <TimelineItem>
                        <p class="time">2018年6月1日</p>
                        <p class="content">更新三条记录</p>
                    </TimelineItem>
                </Timeline>
            </div>
        </div>
        <div class="order">
            <span style="white-space:pre;">  </span><span class="line"></span>
            <span style="white-space:pre;">  </span><span class="txt">2017年更新次数一览</span>
            <span style="white-space:pre;">  </span><span class="line"></span>
        </div>
        <div class="update-table">
            <table class="text-center">
                <thead>
                <tr>
                </tr>
                <tr>
                    <th>一月</th>
                    <th>二月</th>
                    <th>三月</th>
                    <th>四月</th>
                    <th>五月</th>
                    <th>六月</th>
                    <th>七月</th>
                    <th>八月</th>
                    <th>九月</th>
                    <th>十月</th>
                    <th>十一月</th>
                    <th>十二月</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>4</td>
                    <td>5</td>
                    <td>4</td>
                    <td>3</td>
                    <td>2</td>
                    <td>1</td>
                    <td>6</td>
                    <td>3</td>
                    <td>4</td>
                    <td>1</td>
                    <td>4</td>
                    <td>4</td>
                </tr>
                </tbody>
                <tbody>

                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import eline from '../../chart/line'
    import {mapGetters} from 'vuex'
    export default {
        name: "factory-uodate-info",
        data() {
            return {
                showChartDelay: true,
                lineData: {}
            }
        },
        mounted() {
            this.drawLine();
            this.$Notice.open({
                title: '延期提醒',
                desc: '距离您上一次更新记录已经4天，即将超期',
                duration: 0
            });
        },
        methods: {
            drawLine() {
                this.lineData = {
                    title: {
                        //text: '堆叠区域图'
                    },

                    legend: {
                        data: ['更新次数'],
                        right: '1%',
                        type: 'scroll',
                        textStyle: {
                            color: '#c7cad1'
                        }
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
                            data: ['一月', '二月', '三月', '四月', '五月', '六月',
                                '七月', '八月', '九月', '十月', '十一月', '十二月'],
                            axisLine: {
                                lineStyle: {
                                    color: '#c7cad1',
                                    width: 1,
                                }
                            }
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
                            }
                        }
                    ],
                    series: [
                        {
                            name: '更新次数',
                            type: 'line',
                            stack: '总量',
                            areaStyle: {normal: {}},
                            data: [4, 5, 4, 3, 2, 1, 6, 3, 4, 1, 4, 4]
                        }
                    ]
                };
            }
        },
        computed: {
            ...mapGetters([
                'userinfo'
            ])
        },
        components: {eline}
    }
</script>

<style scoped>
    .fac-update,
    .update-chart {
        /*width: 100%;*/
        height: 400px;
        color: #c7cad1;
        margin-bottom: 15px;
    }
    .update-chart{
        background-color: rgba(45, 39, 39, 0.7);

    }

    .update-chart:hover{
        /*background-color: rgba(33, 27, 27, 0.9);*/

    }

    .update-table table {
        width: 100%;
        max-width: 100%;
        /*border: 1px solid #ccc;*/
        border-collapse: collapse;
        margin-bottom: 20px;
    }

    .text-center th, .text-center td {
        text-align: center;
        line-height: 30px;
        border-bottom: 1px solid #ccc;
        border-collapse: collapse;
    }

    .show-box {
        padding: 0 15px;
        height: 120px;
        margin-bottom: 20px;
    }

    .box-container {
        padding: 15px;
        box-sizing: border-box;
        height: 100%;
    }

    hr {
        margin: 0;
        padding: 0;
    }

    .box {
        /*border: 1px solid #fff;*/
        /*background-color: #fff;*/
        color: #fff;
        font-weight: bold;
        padding: 15px;
        box-sizing: border-box;
        border-radius: 5px;
        height: 100%;
    }

    .box .num {
        font-size: 2.2em;
    }

    .box:hover {
        transform: scale(1.1, 1.1);
    }

    .box1 {
        background-color: #1aca1a;
    }

    .box2 {
        background-color: #ff666b;
    }

    .box3 {
        background-color: #7a8fb4;
    }

    .box4 {
        background-color: #ded23d;
    }
</style>