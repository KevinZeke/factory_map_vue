<template>
    <div class="admin-home-wrap" id="admin-home-wrap-hook">
        <div class="order">
            <span style="white-space:pre;">  </span><span class="line"></span>
            <span style="white-space:pre;">  </span><span class="txt">功能导航</span>
            <span style="white-space:pre;">  </span><span class="line"></span>
        </div>
        <div class="clearfix show-box">
            <div class="col-md-3 col-lg-3 col-sm-3 col-xs-6 box-container">
                <div class="box box3">
                    <router-link :to="{name:'adminRealtimeData'}">
                        实时数据
                        <Icon class="pull-right"
                              color="#333"
                              size="40"
                              type="stats-bars"></Icon>
                    </router-link>
                    <hr>
                </div>
            </div>

            <div class="col-md-3 col-lg-3 col-sm-3 col-xs-6 box-container">
                <Badge count="4" class="box box1">
                    <router-link :to="{name:'adminWatch'}">
                        监控
                        <Icon class="pull-right"
                              color="#333"
                              size="40"
                              type="eye"></Icon>
                    </router-link>
                    <hr>
                </Badge>
            </div>
            <div class="col-md-3 col-lg-3 col-sm-3 col-xs-6 box-container">
                <div class="box box2">
                    <router-link :to="{name:'adminStatistics'}">
                        统计
                        <Icon class="pull-right"
                              color="#333"
                              size="40"
                              type="ios-pie"></Icon>
                    </router-link>
                    <hr>
                </div>
            </div>

            <div class="col-md-3 col-lg-3 col-sm-3 col-xs-6 box-container">
                <div class="box box4">
                    <router-link :to="{path:'adminCtrl'}">
                        管理
                        <Icon class="pull-right"
                              color="#333"
                              size="40"
                              type="settings"></Icon>
                    </router-link>
                    <hr>
                </div>
            </div>
        </div>
        <div class="clearfix order">
            <span style="white-space:pre;">  </span><span class="line"></span>
            <span style="white-space:pre;">  </span><span class="txt">快速浏览</span>
            <span style="white-space:pre;">  </span><span class="line"></span>
        </div>
        <div class="clearfix main-content">
            <div class="table-wrap col-md-6 col-lg-6 col-sm-12 col-xs-12">
                <table class="info-table">
                    <thead>
                    <tr>
                        <th class="text-center" colspan="5">更新记录一览</th>
                    </tr>
                    <tr>
                        <th>标签</th>
                        <th>名称</th>
                        <th class="hidden-sm hidden-xs">法人</th>
                        <th>最近更新时间</th>
                        <th>操作</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <span class="attention-tag">
                                <Icon color="#fff" type="alert-circled"></Icon>
                                已经逾期
                            </span>
                        </td>
                        <td>泰州A化工厂</td>
                        <td class="hidden-sm hidden-xs">李连</td>
                        <td>2018-06-11</td>
                        <td>
                            <button @click="showDetail = true"
                                    class="btn info-btn btn-xs">查看详情
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span class="attention-tag">
                                <Icon color="#fff" type="alert-circled"></Icon>
                                已经逾期
                            </span>
                        </td>
                        <td>泰州B化工厂</td>
                        <td class="hidden-sm hidden-xs">张一</td>
                        <td>2018-06-11</td>
                        <td>
                            <button @click="showDetail = true" class="btn info-btn btn-xs">查看详情</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span class="attention-tag">
                                <Icon color="#fff" type="alert-circled"></Icon>
                                已经逾期
                            </span>
                        </td>
                        <td>泰州C化工厂</td>
                        <td class="hidden-sm hidden-xs">王菲</td>
                        <td>2018-06-08</td>
                        <td>
                            <button @click="showDetail = true" class="btn info-btn btn-xs">查看详情</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span class="attention-tag">
                                <Icon color="#fff" type="alert-circled"></Icon>
                                已经逾期
                            </span>
                        </td>
                        <td>泰州D化工厂</td>
                        <td class="hidden-sm hidden-xs">赵四</td>
                        <td>2018-06-01</td>
                        <td>
                            <button @click="showDetail = true" class="btn info-btn btn-xs">查看详情</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span class="notice-tag">
                                <Icon color="#333" type="ios-clock"></Icon>
                                即将逾期
                            </span>
                        </td>
                        <td>泰州E化工厂</td>
                        <td class="hidden-sm hidden-xs">赵五</td>
                        <td>2018-06-20</td>
                        <td>
                            <button @click="showDetail = true" class="btn info-btn btn-xs">查看详情</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span class="notice-tag">
                                <Icon color="#333" type="ios-clock"></Icon>
                                即将逾期
                            </span>
                        </td>
                        <td>泰州F化工厂</td>
                        <td class="hidden-sm hidden-xs">赵六</td>
                        <td>2018-06-20</td>
                        <td>
                            <button @click="showDetail = true" class="btn info-btn btn-xs">查看详情</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span class="notice-tag">
                                <Icon color="#333" type="ios-clock"></Icon>
                                即将逾期
                            </span>
                        </td>
                        <td>泰州G化工厂</td>
                        <td class="hidden-sm hidden-xs">赵六</td>
                        <td>2018-06-19</td>
                        <td>
                            <button @click="showDetail = true" class="btn info-btn btn-xs">查看详情</button>
                        </td>
                    </tr>
                    <tr>
                        <td>-</td>
                        <td>-</td>
                        <td class="hidden-sm hidden-xs">-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>-</td>
                        <td>-</td>
                        <td class="hidden-sm hidden-xs">-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>-</td>
                        <td>-</td>
                        <td class="hidden-sm hidden-xs">-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>-</td>
                        <td>-</td>
                        <td class="hidden-sm hidden-xs">-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>-</td>
                        <td>-</td>
                        <td class="hidden-sm hidden-xs">-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>

                    </tbody>
                </table>
            </div>
            <div class="charts-wrap col-md-6 col-lg-6 col-sm-12 col-xs-12">
                <!--<pie v-if="pieData" :option="pieData"></pie>-->
                <Carousel v-model="carouseIndex" autoplay :autoplay-speed="4000" :height="500" loop>
                    <CarouselItem>
                        <div class="carouse-item">
                            <pie v-if="pieData" :option="pieData"></pie>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="carouse-item">
                            <pie v-if="pieData" :option="pieData"></pie>
                        </div>
                    </CarouselItem>
                </Carousel>
            </div>
        </div>
        <Modal
                width="40%"
                v-model="showDetail"
                :title="modalTitle">

            <div>
                <h4>更新时间轴</h4>
                <Timeline>
                    <TimelineItem>
                        <p class="time">2018年6月11日</p>
                    </TimelineItem>
                    <TimelineItem>
                        <p class="time">2018年6月9日</p>
                    </TimelineItem>
                    <TimelineItem>
                        <p class="time">2018年6月5日</p>
                    </TimelineItem>
                </Timeline>
            </div>
            <div style="padding: 10px;font-size: 1.2em;" class="row connect">
                <h4>联系方式</h4>
                <div style="margin-bottom: 20px;">
                    <span class="glyphicon glyphicon-phone-alt"></span>
                    <span>联系电话： 123-12333121</span>
                </div>
                <div>
                    <span class="glyphicon glyphicon-send"></span>
                    <span>邮箱： 12211323@xx.com</span>
                </div>
            </div>
        </Modal>
    </div>
</template>

<script>
    import {threeWaveBg} from "../../common/util";
    import pie from '../../chart/pie.vue'
    import {mapGetters} from 'vuex'
    import apiConf from '../../api/api.conf'

    export default {
        data() {
            return {
                pieData: null,
                carouseIndex: 0,
                showDetail: false,
                modalTitle: '厂家信息',
                delayInfo: []
            }
        },
        created() {
            // console.log(this.userinfo);
            // if (!this.userinfo.type == apiConf.superUserType) {
            //     this.$router.push({path: '/404'});
            // }
        },
        mounted() {
            setTimeout(() => {
                this.drawPie();
            }, 700);
            threeWaveBg(
                'admin-home-wrap-hook', {s: 100, x: 30, y: 30}, function (dom) {
                    //dom.id = 'wave';
                    dom.style.opacity = '0.16';
                });
        },
        computed: {
            ...mapGetters([
                'userinfo'
            ])
        },
        methods: {
            drawPie() {
                this.pieData = {
                    backgroundColor: 'rgba(44, 52, 60, .7)',

                    title: {
                        text: '数据分析概览',
                        subtext: '正在开发中',
                        left: 'center',
                        top: 20,
                        textStyle: {
                            color: '#ccc'
                        }
                    },

                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },

                    visualMap: {
                        show: false,
                        min: 80,
                        max: 600,
                        inRange: {
                            colorLightness: [0, 1]
                        }
                    },
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: '55%',
                            center: ['50%', '50%'],
                            data: [
                                {value: 335, name: 'A'},
                                {value: 310, name: 'B'},
                                {value: 274, name: 'C'},
                                {value: 235, name: 'D'},
                                {value: 400, name: 'E'}
                            ].sort(function (a, b) {
                                return a.value - b.value;
                            }),
                            roseType: 'radius',
                            label: {
                                normal: {
                                    textStyle: {
                                        color: 'rgba(255, 255, 255, 0.3)'
                                    }
                                }
                            },
                            labelLine: {
                                normal: {
                                    lineStyle: {
                                        color: 'rgba(255, 255, 255, 0.3)'
                                    },
                                    smooth: 0.2,
                                    length: 10,
                                    length2: 20
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: '#c23531',
                                    shadowBlur: 200,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            },

                            animationType: 'scale',
                            animationEasing: 'elasticOut',
                            animationDelay: function (idx) {
                                return Math.random() * 200;
                            }
                        }
                    ]
                };
            },
            getDelayInfo() {
                this.delayInfo = [];
            }
        },
        components: {pie}
    }
</script>

<style scoped>
    h3 {
        /*color: yellow;*/
    }

    .main-content {
        color: #d9d9d9;
    }

    .table-wrap {
        box-sizing: border-box;
        height: 500px;
        overflow: auto;
    }

    .charts-wrap {
        height: 500px;
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
        margin-bottom: 20px;
    }

    .box-container {
        padding: 15px;
        box-sizing: border-box;
        height: 120px;
        font-weight: 600;
        font-size: 2em;
        cursor: pointer;
    }

    hr {
        margin-top: -15px;
        padding: 0;
    }

    h4 {
        font-weight: 600;
    }

    table tr td, table tr th {
        text-align: center !important;
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
        width: 100%;
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

    a {
        display: inline-block;
        width: 100%;
        height: 100%;
    }

    a:hover {
        text-decoration: none;
    }

    .carouse-item {
        height: 100%;
        width: 100%;
    }
</style>
