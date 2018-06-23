<template>
    <div class="watch">
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
                        @on-change="chartShow = !chartShow"
                ></i-switch>
                <span v-text="chartShow?'关闭图表':'显示图表'"
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
        <div class="col-md-12 col-lg-12">
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
                        <td class="hidden-sm hidden-xs">0519-8990123</td>
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
                        <td class="hidden-sm hidden-xs">0519-8990123</td>
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
                        <td class="hidden-sm hidden-xs">0519-365657</td>
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
                        <td class="hidden-sm hidden-xs">0519-568578565</td>
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
                        <td class="hidden-sm hidden-xs">0519-2342525</td>
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
                        <td class="hidden-sm hidden-xs">0519-31312313</td>
                        <td>2018-06-20</td>
                        <td>
                            <button @click="showDetail = true"
                                    class="btn info-btn btn-xs">查看详情
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
                                    class="btn info-btn btn-xs">查看详情
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
                
            </div>
        </div>
        

    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import datepicker from '../../base/date-selector/datepicker.vue'
    import apiConf from "../../api/api.conf";

    export default {
        data() {
            return {
                searchValue: '',
                chartShow: false
            }
        },
        computed: {
            ...mapGetters([
                'userinfo'
            ])
        },
        methods: {
            timeOnChange() {
            }
        },
        components: {datepicker}
    }
</script>

<style>
    .watch {
        /*color: whitesmoke;*/
    }

    .datepicker {
        margin-bottom: 20px;
    }
    .ctrl-wrap{
        height: 100%;
    }
</style>
