<template>
    <div class="watch clearfix">
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
                    <li class="active">监控</li>
                </ul>
            </div>
        </div>
        <!--<h4 class="text-center">watch</h4>-->
        <div class="datepicker clearfix">
            <div class="text-center col-md-2 col-lg-2">
                <i-switch
                        v-model="chartShow"

                ></i-switch>
                <span v-text="chartShow?'关闭控制':'显示控制'"
                      class="color-whitesmoke">
                </span>
            </div>
            <div class="col-md-5 col-lg-5">
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
        <div class="col-md-12 col-lg-12 row">

            <div class="clearfix main-content" :class="{'col-md-8':chartShow}">
                <div class="table-wrap col-md-12 col-lg-12 col-sm-12 col-xs-12">
                    <table class="info-table">
                        <thead>
                        <tr>
                            <th class="text-center" colspan="6">当月更新记录一览</th>
                        </tr>
                        <tr>
                            <th>标签</th>
                            <th>名称</th>
                            <th class="hidden-sm hidden-xs">法人</th>
                            <th class="hidden-sm hidden-xs">电话</th>
                            <th>最近更新时间</th>
                            <th>状态</th>
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
                            <td class="hidden-sm hidden-xs">0519-8990123</td>
                            <td>2018-06-11</td>
                            <td>
                                <button @click="showDetail = true"
                                        class="btn info-btn btn-xs">未处理
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
                            <td class="hidden-sm hidden-xs">0519-8990123</td>
                            <td>2018-06-11</td>
                            <td>
                                <button @click="showDetail = true" class="btn info-btn btn-xs">
                                    未处理
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
                            <td>泰州C化工厂</td>
                            <td class="hidden-sm hidden-xs">王菲</td>
                            <td class="hidden-sm hidden-xs">0519-365657</td>
                            <td>2018-06-08</td>
                            <td>
                                <button @click="showDetail = true" class="btn info-btn btn-xs">未处理</button>
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
                            <td class="hidden-sm hidden-xs">0519-568578565</td>
                            <td>2018-06-01</td>
                            <td>
                                <button @click="showDetail = true" class="btn info-btn btn-xs">未处理</button>
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
                            <td class="hidden-sm hidden-xs">0519-2342525</td>
                            <td>2018-06-20</td>
                            <td>
                                <button @click="showDetail = true" class="btn info-btn btn-xs">未处理</button>
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
                            <td class="hidden-sm hidden-xs">0519-31312313</td>
                            <td>2018-06-20</td>
                            <td>
                                <button @click="showDetail = true"
                                        class="btn info-btn btn-xs">未处理
                                </button>
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
                            <td class="hidden-sm hidden-xs">0519-4564746</td>
                            <td>2018-06-19</td>
                            <td>
                                <button @click="showDetail = true"
                                        class="btn info-btn btn-xs">未处理
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>-</td>
                            <td class="hidden-sm hidden-xs">-</td>
                            <td class="hidden-sm hidden-xs">-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>-</td>
                            <td class="hidden-sm hidden-xs">-</td>
                            <td class="hidden-sm hidden-xs">-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>-</td>
                            <td class="hidden-sm hidden-xs">-</td>
                            <td class="hidden-sm hidden-xs">-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>-</td>
                            <td class="hidden-sm hidden-xs">-</td>
                            <td class="hidden-sm hidden-xs">-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>-</td>
                            <td class="hidden-sm hidden-xs">-</td>
                            <td class="hidden-sm hidden-xs">-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>

                        </tbody>
                    </table>
                </div>
            </div>
            <div class="col-md-4 dark-bg ctrl-wrap" v-if="chartShow">


                <h5 class="color-whitesmoke">厂商状态比例</h5>
                <div style="height: 200px;padding: 5px;margin-bottom: 10px">
                    <pie :height="'230px'" :option="pieData">
                    </pie>
                </div>
                <div class="status color-whitesmoke">
                    <p>当前已经处理逾期 <kbd class="font-size-15">0</kbd>/4</p>
                    <p>当前已经处理即将逾期 <kbd class="font-size-15">0</kbd>/3</p>
                </div>
                <div class="btn-g">
                    <button disabled class="btn btn-primary btn-xs">
                        重新获取
                    </button>
                    <button disabled  class="btn btn-primary btn-xs">
                        导出表格
                    </button>
                    <button disabled  class="btn btn-primary btn-xs">
                        发出提醒
                    </button>
                    <button  disabled class="btn btn-primary btn-xs">
                        查看帮助
                    </button>
                    <button disabled  class="btn btn-primary btn-xs">
                        全部标记为已经处理
                    </button>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import datepicker from '../../base/date-selector/datepicker.vue'
    import pie from '../../chart/pie'
    import apiConf from "../../api/api.conf";

    export default {
        data() {
            return {
                searchValue: '',
                chartShow: true,
                pieData: null
            }
        },
        created() {
            this.drawPie();
        },
        computed: {
            ...mapGetters([
                'userinfo'
            ])
        },
        methods: {
            timeOnChange() {
            },
            drawPie() {
                this.pieData = {
                    title:{
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    legend: {
                        //orient: 'vertical',
                        x: 'left',
                        data: ['已经逾期', '临近逾期', '正常'],
                        textStyle: {
                            color: 'whitesmoke'
                        }
                    },
                    series: [
                        {
                            name: '厂商数量',
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
                                {value: 4, name: '已经逾期'},
                                {value: 3, name: '临近逾期'},
                                {value: 234, name: '正常'}
                            ]
                        }
                    ]
                };
            },
        },
        components: {datepicker, pie}
    }
</script>

<style>
    .watch {
        /*color: whitesmoke;*/
        height: 100%;
    }

    .datepicker {
        margin-bottom: 20px;
    }

    .btn-g{
        margin: 20px auto;
    }

    .ctrl-wrap {
        height: 100%;
    }
</style>
