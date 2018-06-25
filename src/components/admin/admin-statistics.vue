<template>
    <div class="wrap">
        <div class="">
            <div class="span6">
                <ul class="breadcrumb"
                    style="padding-left: 50px;box-sizing: border-box">
                    <li>
                        <router-link
                                :to="{path:'/adminManage'}">主页
                        </router-link>
                        <span class="divider">></span>
                    </li>
                    <li class="active">统计</li>
                </ul>
            </div>
        </div>
        <div class="datepicker dark clearfix">
            <div class="col-md-7 col-lg-7">
                <div class="clearfix search">
                    <Input v-model="searchValue"
                           class="pull-right"
                           icon="search"
                           placeholder="厂家搜索" style="width: 240px"></Input>
                </div>
            </div>
            <div class="col-md-5 col-lg-5">
                <datepicker @timeChange="timeOnChange"></datepicker>
            </div>
        </div>

        <Tabs value="name1">
            <TabPane label="厂商数据概览" icon="ionic" name="name1">
                <div class="order">
                    <span style="white-space:pre;">  </span><span class="line"></span>
                    <span style="white-space:pre;">  </span><span class="txt">
                高位化学品存储量一览
            </span>
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
                    <span style="white-space:pre;">  </span><span class="txt">
                当月储量变化趋势
            </span>
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
            </TabPane>
            <TabPane label="化学品数据" icon="waterdrop"  name="name2">
                <h4 style="color: whitesmoke" class="text-center">开发中</h4>
            </TabPane>
            <TabPane label="统计分析" icon="ios-keypad"  name="name3">
                <h4 style="color: whitesmoke"  class="text-center">开发中</h4>
            </TabPane>
        </Tabs>
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
                chemicalPieData: {},
                searchValue:''
            }
        },
        created() {
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
                        data: ['化学品A', '化学品B', '化学品C', '化学品D', '化学品E'],
                        textStyle: {
                            color: 'whitesmoke'
                        }
                    },
                    series: [
                        {
                            name: '储量',
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
                                {value: 335, name: '化学品A'},
                                {value: 310, name: '化学品B'},
                                {value: 234, name: '化学品C'},
                                {value: 135, name: '化学品D'},
                                {value: 1548, name: '化学品E'}
                            ]
                        }
                    ]
                };
            },
            timeOnChange(curTime) {
                //alert(JSON.stringify(curTime));
            }
        },
        computed: {
            ...mapGetters([
                'userinfo'
            ])
        },
        components: {manageHeader, bar, pie, datepicker}
    }
</script>

<style scoped>
    h3 {
        /*color: yellow;*/
    }

    .datepicker {
        width: 100%;
    }

    * {
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