<template>
    <div class="wrap">
        <div class="">
            <div class="span6">
                <ul class="breadcrumb"
                    style="padding-left: 50px;box-sizing: border-box">
                    <li>
                        <router-link
                                :to="{path:'/adminManage'}">主页</router-link>
                        <span class="divider">></span>
                    </li>
                    <li class="active">统计</li>
                </ul>
            </div>
        </div>
        <div class="datepicker clearfix">
            <div class="col-md-6 col-md-offset-6">
                <datepicker @timeChange="timeOnChange"></datepicker>
            </div>
        </div>
        <div class="order">
            <span style="white-space:pre;">  </span><span class="line"></span>
            <span style="white-space:pre;">  </span><span class="txt">功能导航</span>
            <span style="white-space:pre;">  </span><span class="line"></span>
        </div>
        <div class="chem-pie ">
            <div class="col-md-4">
                <pie v-if="chartShow" :height="'300px'" :option="chemicalPieData">
                </pie>
            </div>
            <div class="col-md-4">
                <pie v-if="chartShow" :height="'300px'" :option="chemicalPieData">
                </pie>
            </div>
            <div class="col-md-4">
                <pie v-if="chartShow" :height="'300px'" :option="chemicalPieData">
                </pie>
            </div>
        </div>
        <div class="order">
            <span style="white-space:pre;">  </span><span class="line"></span>
            <span style="white-space:pre;">  </span><span class="txt">功能导航</span>
            <span style="white-space:pre;">  </span><span class="line"></span>
        </div>
        <div class="chem-bar ">
            <bar
                    style="margin-top:20px;"
                    ref="bar"
                    v-if="chartShow"
                    :option="chemicalBarData"
            ></bar>
        </div>
    </div>
</template>

<script>
    import manageHeader from '../../components/manage/manage-header'
    import bar from '../../chart/bar'
    import pie from '../../chart/pie'
    import datepicker from '../../base/date-selector/datepicker'
    import {mapGetters} from 'vuex'
    import apiConf from "../../api/api.conf";

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
            // if (!this.userinfo.type == apiConf.superUserType) {
            //     this.$router.push({path: '/404'});
            // }
        },
        mounted() {
            this.drawBar();
            this.drawPie();
        },
        methods: {
            drawBar() {
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
            },
            timeOnChange(curTime){
                //alert(JSON.stringify(curTime));
            }
        },
        computed: {
            ...mapGetters([
                'userinfo'
            ])
        },
        components: {manageHeader, bar, pie,datepicker}
    }
</script>

<style scoped>
    h3 {
        /*color: yellow;*/
    }

    .datepicker{
        width: 100%;
    }

    *{
        box-sizing: border-box;
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


    hr {
        margin: 0;
        padding: 0;
    }


</style>