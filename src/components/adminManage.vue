<template>
    <div class="wrap">
        <manage-header :brand="'泰州化工产品实时监控系统管理页面'"></manage-header>

        <keep-alive>
            <router-view></router-view>
        </keep-alive>

        <!--<div class="chem-pie">-->
        <!--<div class="col-md-4">-->
        <!--<pie v-if="chartShow" :height="'300px'" :option="chemicalPieData">-->
        <!--</pie>-->
        <!--</div>-->
        <!--<div class="col-md-4">-->
        <!--<pie v-if="chartShow" :height="'300px'" :option="chemicalPieData">-->
        <!--</pie>-->
        <!--</div>-->
        <!--<div class="col-md-4">-->
        <!--<pie v-if="chartShow" :height="'300px'" :option="chemicalPieData">-->
        <!--</pie>-->
        <!--</div>-->
        <!--</div>-->
        <!--<div class="chem-bar">-->
        <!--<bar-->
        <!--style="margin-top:20px;"-->
        <!--ref="bar"-->
        <!--v-if="chartShow"-->
        <!--:option="chemicalBarData"-->
        <!--&gt;</bar>-->
        <!--</div>-->
    </div>
</template>

<script>
    import manageHeader from '../components/manage/manage-header'
    import bar from '../chart/bar'
    import pie from '../chart/pie'
    import apiConf from "../api/api.conf";
    import {mapGetters} from 'vuex'


    export default {
        name: "AdminManage",
        data() {
            return {
                chartShow: true,
                chemicalBarData: {},
                chemicalPieData: {}
            }
        },
        created(){

        },
        computed: {
            ...mapGetters([
                'userinfo'
            ])
        },
        mounted() {
            this.drawBar();
            this.drawPie();
            this.$Notice.open({
                title: '延期提醒',
                desc: '当前共有4家企业延期提交数据',
                duration: 10
            });
        },
        methods: {
            drawBar() {
                //console.log('drawBar');
                this.chemicalBarData = {
                    title: {},
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        },
                        formatter: function (params) {
                            var tar;
                            if (params[1].value != '-') {
                                tar = params[1];
                            }
                            else {
                                tar = params[0];
                            }
                            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
                        }
                    },
                    legend: {
                        data: ['支出', '收入'],
                        textStyle: {
                            color: '#c7cad1'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        splitLine: {show: false},
                        data: function () {
                            var list = [];
                            for (var i = 1; i <= 24; i++) {
                                list.push('6月' + i + '日');
                            }
                            return list;
                        }(),
                        axisLine: {
                            lineStyle: {
                                color: '#c7cad1',
                                width: 1,
                            }
                        }
                    },
                    yAxis: {
                        type: 'value',
                        axisLine: {
                            lineStyle: {
                                color: '#c7cad1',
                                width: 1,
                            }
                        }
                    },
                    series: [
                        {
                            name: '辅助',
                            type: 'bar',
                            stack: '总量',
                            itemStyle: {
                                normal: {
                                    barBorderColor: 'rgba(0,0,0,0)',
                                    color: 'rgba(0,0,0,0)'
                                },
                                emphasis: {
                                    barBorderColor: 'rgba(0,0,0,0)',
                                    color: 'rgba(0,0,0,0)'
                                }
                            },
                            data: [0, 900, 1245, 1530, 1376, 1376, 1511, 1689, 1856, 1495, 1292, 1392, 1592, 1192, 1100, 1088, 1388, 1488, 1000, 1389, 1189]
                        },
                        {
                            name: '收入',
                            type: 'bar',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'top'
                                }
                            },
                            data: [900, 345, 393, '-', '-', 135, 178, 286, '-', '-', '-', 100, 200, '-', '-', '-', 300, 100, '-', 389, '-']
                        },
                        {
                            name: '支出',
                            type: 'bar',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'bottom'
                                }
                            },
                            data: ['-', '-', '-', 108, 154, '-', '-', '-', 119, 361, 203, '-', '-', 400, 92, 12, '-', '-', 488, '-', 200]
                        }
                    ]
                };

            },
            drawPie() {
                this.chemicalPieData = {
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        x: 'left',
                        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
                    },
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: ['50%', '70%'],
                            avoidLabelOverlap: false,
                            label: {
                                normal: {
                                    show: false,
                                    position: 'center'
                                },
                                emphasis: {
                                    show: true,
                                    textStyle: {
                                        fontSize: '30',
                                        fontWeight: 'bold'
                                    }
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data: [
                                {value: 335, name: '直接访问'},
                                {value: 310, name: '邮件营销'},
                                {value: 234, name: '联盟广告'},
                                {value: 135, name: '视频广告'},
                                {value: 1548, name: '搜索引擎'}
                            ]
                        }
                    ]
                };
            }
        },
        components: {manageHeader, bar, pie}
    }
</script>

<style scoped>
    h3 {
        /*color: yellow;*/
    }

    .chem-pie {
        height: 300px;
        padding: 5px;
    }

    .chem-bar {
        height: 510px;
        padding: 5px;
        box-sizing: border-box;
        background-color: rgba(3, 3, 3, .2);
        box-shadow: -2px -2px 20px 4px #424242 inset;
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