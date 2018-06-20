<template>
    <div id="detail" v-if="show" class="col-md-12">
        <btn-close @close="detailClose"></btn-close>
        <div class="row">
            <h4 class="col-md-4 col-sm-12 fac-name" style="font-weight: bolder">
                {{$route.params.name}}
            </h4>
            <div class="btn-group col-md-3" role="group" aria-label="...">
                <button type="button"
                        :class="{active:isCurMonth}"
                        @click="isCurMonth = true"
                        class="btn btn-month btn-sm btn-default">
                    月度
                </button>
                <button type="button"
                        :class="{active:!isCurMonth}"
                        @click="isCurMonth = false"
                        class="btn btn-date btn-sm btn-default">
                    区间
                </button>
            </div>
            <div class="block col-md-4">
                <DatePicker v-if="isCurMonth"
                            type="month"
                            v-model="valueMon"
                            show-week-numbers
                            placement="bottom-end"
                            placeholder="选择月度"
                            style="width: 100%"></DatePicker>
                <DatePicker v-if="!isCurMonth"
                            type="daterange"
                            v-model="valueDate"
                            show-week-numbers
                            placement="bottom-end"
                            placeholder="选择日期区间"
                            style="width: 100%"></DatePicker>
            </div>
            <!--<date-selector @timeOnChange="curTimeChange" class="col-md-8"></date-selector>-->
            <!--<edit-time :datelist='datelist' :options='options'></edit-time>-->
        </div>
        <div class="row detail-info">
            <Collapse value="1" class="clearfix">
                <Panel name="1">
                    公司信息
                    <p slot="content">
                        始建于1978年，位于XXXXX。厂区占地面积128万平方米，现有员工XXXX人，现有固定资产原值48亿元。
                    </p>
                </Panel>
                <Panel name="2">
                    联系方式
                    <div slot="content"  class="row connect">
                        <div>
                            <span class="glyphicon glyphicon-phone-alt"></span>
                            <span>联系电话： 123-12333121</span>
                        </div>
                        <div>
                            <span class="glyphicon glyphicon-send"></span>
                            <span>邮箱： 12211323@xx.com</span>
                        </div>
                    </div>
                </Panel>
            </Collapse>
        </div>
        <br>
        <hr class="clearfix">
        <table id="detail-table" class="table table-striped text-center">
            <thead>
            <tr>
                <th colspan="7">危险化学品列表</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th>品名</th>
                <th>类别</th>
                <th>批号</th>
                <th>存量</th>
                <th>存储环境</th>
                <th>存储方式</th>
                <th>操作</th>
            </tr>
            <tr v-if="!chemicalsList.length">
                <td colspan="7">
                    <loading></loading>
                </td>
            </tr>
            <tr v-for="cheInfo in chemicalsList">
                <td class="che-name">{{cheInfo.pm}}</td>
                <td>{{cheInfo.lb}}</td>
                <td>{{cheInfo.ph}}</td>
                <td>{{cheInfo.cl}}</td>
                <td>{{cheInfo.cchj}}</td>
                <td>{{cheInfo.ccfs}}</td>
                <td>
                    <button
                            @click="showChemicalInfo(cheInfo.pm)"
                            class="detail-chart btn btn-primary btn-sm">
                        图表
                    </button>
                </td>
            </tr>
            </tbody>
            <tbody>
            <tr>
                <td colspan="7">
                    <div class="col-md-12" style="height:30px;margin-bottom:10px;">
                        <Page class="table-page"
                              :page-size="4"
                              :current.sync="currentPage"
                              :total="totalList"
                              @on-change="pageOnChange"
                              simple></Page>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>

        <!--<loading></loading>-->
        <bar
                style="margin-top:20px;"
                ref="bar"
                :height="'500px'"
                v-if="chartShow"
                :option="chemicalData"
        ></bar>
    </div>
</template>

<script>
    import {getFactoryChemicals} from '../../api/factory'
    import loading from '../../base/loading/loading.vue'
    import btnClose from '../../base/button/close.vue'
    //    import dateSelector from '../../base/date-selector/dateSelector.vue'
    import bar from '../../chart/bar.vue'
    import {getLastDay} from "../../common/util";


    var date = new Date();
    var mon = date.getMonth() + 1;
    var cur = date.getFullYear() + '-' + (mon < 10 ? ('0' + mon) : mon);

    export default {
        data() {
            return {
                //当前是否为月度选择
                isCurMonth: true,
                //是否显示整个改组件
                show: true,
                //name: this.$route.params.name,
                //化学物表格内容数组
                chemicalsList: [],
                //当前页数
                currentPage: 1,
                //列表数据总条数
                totalList: 0,
                //是否显示图表
                chartShow: false,
                //chartName:'',
                //图表数据
                chemicalData: {
                    title: {text: ''},
                    xAxis: {data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]},
                    yAxis: {},
                    legend: {data: ['存储量']},
                    series: []
                },
                valueMon: cur,
                valueDate: [cur + '-01', cur + '-' + getLastDay(date.getFullYear(), mon)]
            }
        },
        components: {loading, bar, btnClose},
        watch: {
            $route(route) {
                this._routerChangeInit();
                this._getChemicalsList(
                    route.params.id,
                    this.getFomattedTime(),
                    this.currentPage
                );
            },
            valueMon(val) {
                this.currentPage = 1;
                this._getChemicalsList(
                    this.$route.params.id,
                    new Date(val).Format('yyyy-MM'),
                    this.currentPage
                );
            },
            valueDate(val) {
                this.currentPage = 1;
                this._getChemicalsList(
                    this.$route.params.id,
                    [
                        new Date(val[0]).Format('yyyy-MM-dd'),
                        new Date(val[1]).Format('yyyy-MM-dd')
                    ],
                    this.currentPage
                );
            }
        },
        created() {
            //console.log(this.$route);
            //console.log('created');
//            this._getChemicalsList(
//                this.$route.params.name,
//                this.getFomattedTime()
//            );
        },
        methods: {
            _getChemicalsList(id, curTime, curPage) {
                console.log(id, curTime, curPage)

                getFactoryChemicals(id, curTime, curPage).then((resp) => {
                    //console.log(resp.data);
                    this.chemicalsList = resp.data.list;
                    this.totalList = resp.data.totalList;
                });

            },

            _getChemicalInfo(cname) {
                setTimeout(() => {
                    this.chemicalData = {
                        title: {
                            text: cname + '存储量柱状图'
                        },
                        tooltip: {},
                        xAxis: {data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]},
                        yAxis: {},
                        legend: {data: ['存储量(柱)', '存储量(线)']},
                        series: [
                            {
                                name: '存储量(柱)',
                                type: 'bar',
                                data: [Math.random() * 100 >> 0, 20, Math.random() * 100 >> 0, 10, 10, 20, Math.random() * 100 >> 0, 12, Math.random() * 100 >> 0, Math.random() * 100 >> 0, 44, Math.random() * 100 >> 0],
                                markPoint: {
                                    data: [
                                        {type: 'max', name: '最大值'},
                                        {type: 'min', name: '最小值'}
                                    ]
                                },
                                markLine: {
                                    data: [
                                        {type: 'average', name: '平均值'}
                                    ]
                                }
                            },
                            {
                                name: '存储量(线)',
                                type: 'line',
                                data: [Math.random() * 100 >> 0, 20, Math.random() * 100 >> 0, 10, 10, 20, Math.random() * 100 >> 0, 12, Math.random() * 100 >> 0, Math.random() * 100 >> 0, 44, Math.random() * 100 >> 0]
                            }
                        ]
                    }
                }, 300)
            },

            _routerChangeInit() {
                this.chartShow = false;
                this.show = true;
                this.currentPage = 1;
            },

            getFomattedTime() {
                return this.isCurMonth ?
                    new Date(this.valueMon).Format('yyyy-MM') :
                    [
                        new Date(this.valueDate[0]).Format('yyyy-MM-dd'),
                        new Date(this.valueDate[1]).Format('yyyy-MM-dd')
                    ];
            },

            showChemicalInfo(cname) {
                this.chartShow = true;
                this._getChemicalInfo(cname);
            },

            pageOnChange(curPage) {
                this._getChemicalsList(
                    this.$route.params.id,
                    this.getFomattedTime(),
                    curPage
                );
            },

            detailClose() {
                this.$router.push({path: '../'});
            }
        }
    }
</script>

<style scoped>
    #detail {
        background-color: #fff;
        /*height: 200px;*/
        max-height: 100%;
        overflow: auto;
        z-index: 999;
        margin: 0 auto;
        position: absolute;
        top:0;
        box-shadow: 1px 1px 5px 2px #ccc;
        border-radius: 5px;
        padding: 15px;
        box-sizing: border-box;
    }

    #detail-table th {
        text-align: center;
    }

    .table-page {
        margin: 8px auto;
    }
    .detail-info{
        padding-top: 15px;
    }
    .connect{
        padding: 6px;
    }
    .connect div{
        padding: 1px;
        margin-bottom: 5px;
    }


    /*table{*/
        /*width: 100%;*/
        /*max-width: 100%;*/
        /*margin-bottom: 20px;*/
        /*border-collapse: collapse;*/
        /*font-weight: 300;*/
        /*color: #cbcbcb;*/
    /*}*/
    /*table thead{*/
        /*color: #e2e2e2;*/
        /*font-size: 1.2em;*/
    /*}*/
    /*table tr{*/
        /*line-height: 38px;*/
        /*border-bottom: 1px solid gray;*/
    /*}*/

    /*#detail {*/
        /*background-color: #252830;*/
        /*!*height: 200px;*!*/
        /*max-height: 100%;*/
        /*overflow: auto;*/
        /*z-index: 999;*/
        /*margin: 0 auto;*/
        /*position: absolute;*/
        /*top:0;*/
        /*!*box-shadow: 1px 1px 5px 2px #ccc;*!*/
        /*border-radius: 5px;*/
        /*padding: 15px;*/
        /*box-sizing: border-box;*/
    /*}*/

    /*.fac-name{*/
        /*color: #fff;*/
    /*}*/

    /*#detail-table{*/
        /*background-color: transparent;*/
        /*font-size: 1.1em;*/
        /*border-spacing: 2px;*/
        /*border-color: #868686;*/
    /*}*/
    /*#detail-table th {*/
        /*text-align: center;*/
    /*}*/

    /*.table-page {*/
        /*margin: 8px auto;*/
    /*}*/
    /*.detail-info{*/
        /*padding-top: 15px;*/
    /*}*/
    /*.connect{*/
        /*padding: 6px;*/
    /*}*/
    /*.connect div{*/
        /*padding: 1px;*/
        /*margin-bottom: 5px;*/
    /*}*/
</style>
