<style scoped>
    .layout-con {
        height: 100%;
        width: 100%;
    }

    .menu-item span {
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }

    .menu-item i {
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }

    .collapsed-menu span {
        width: 0px;
        transition: width .2s ease;
    }

    .collapsed-menu i {
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
    .f-list{
        max-height: 500px;
        overflow: auto;
    }
    .f-list li{
        line-height: 2.2em;
        font-size: 1.2em;
    }
    .f-list li:hover{
        background-color: #ede1ff;
    }
</style>
<template>
    <div class="layout dark">
        <Layout :style="{minHeight: '100vh'}">
            <Sider style="display: none" collapsible :collapsed-width="78" v-model="isCollapsed">
                <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">
                    <MenuItem name="1-1">
                        <Icon type="ios-navigate"></Icon>
                        <span>Option 1</span>
                    </MenuItem>
                    <MenuItem name="1-2">
                        <Icon type="search"></Icon>
                        <span>Option 2</span>
                    </MenuItem>
                    <MenuItem name="1-3">
                        <Icon type="settings"></Icon>
                        <span>Option 3</span>
                    </MenuItem>
                </Menu>
            </Sider>

            <Layout>
                <Content>
                    <div class="admin-realtime-data">
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
                                    <li class="active">实时数据</li>
                                </ul>
                            </div>
                        </div>
                        <div class="ctrl-area dark clearfix" style="margin-bottom: 20px">
                            <div class="text-center col-md-2 col-lg-2">
                                <i-switch
                                        v-model="ctrlShow"
                                ></i-switch>
                                <span v-text="ctrlShow?'关闭控制':'显示控制'"
                                      class="color-whitesmoke">
            </span>
                            </div>
                            <div class="col-md-5  col-lg-5">
                                <div class="clearfix search">
                                    <Input v-model="searchValue"
                                           class="pull-right"
                                           icon="search"
                                           placeholder="输入名称切换厂家" style="width: 240px"></Input>
                                    <span class="color-whitesmoke ">
                                    当前选中：
                                    <kbd class="font-size-13">{{curFac}}</kbd>
                                    &nbsp;&nbsp;&nbsp;
                                    <button class="btn btn-primary btn-xs"
                                            @click="facListModalShow = true">切换</button>
                                    </span>
                                </div>
                            </div>
                            <div class="col-md-5 col-lg-5">
                                <datepicker @timeChange="timeOnChange"></datepicker>
                            </div>
                        </div>
                        <div class="main-chart" style="position: relative">
                            <div class="col-md-9 col-md-9  dark-bg">
                                <dynamicDataBar
                                        style="margin-top:20px;"
                                        ref="bar"
                                        :height="'500px'"
                                        :option="barData"
                                ></dynamicDataBar>
                            </div>
                            <div class="col-lg-3 col-md-3"></div>
                        </div>
                        <Modal
                                v-model="facListModalShow"
                                title="厂家列表"
                        >
                            <ul class="f-list">
                                <li  v-for="(factory,index) in factoryInfos"
                                    class="f-item clearfix"
                                    @click="">
                                    <span>{{factory.name}}</span>
                                    <button class="btn-primary btn btn-xs pull-right">切换</button>
                                </li>
                            </ul>
                        </Modal>
                    </div>
                </Content>
            </Layout>

        </Layout>
    </div>
</template>
<script>
    import datepicker from '../../base/date-selector/datepicker.vue'
    import dynamicDataBar from '../../chart/dynamicDataBar'
    import {getAllFactoryInfos} from "../../api/factory";
    import apiConf from "../../api/api.conf";

    export default {
        name: "admin-realtime-data",
        data() {
            return {
                ctrlShow: false,
                searchValue: '',
                curFac: '泰州A化工有限公司',
                factoryInfos: [],
                facListModalShow: false,
                isCollapsed: false,
                barData: {}
            }
        },
        created() {
            this._getFactoryInfos();
            this.drawBar();
        },
        computed: {
            menuitemClasses: function () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        },
        methods: {
            timeOnChange() {
            },
//获取全部工厂信息
            _getFactoryInfos() {
                getAllFactoryInfos().then((resp) => {
                    if (resp.data.code == apiConf.successCode) {
                        this.factoryInfos = resp.data.data;
                    } else {
                        this.$Modal.error({
                            title: '数据获取错误',
                            content: resp.data.msg || '未知错误'
                        });
                    }
                }).catch((err) => {
                    console.log(err);
                    this.$Modal.error({
                        title: '网络错误',
                        content: '获得工厂位置信息失败'
                    });
                });
            },

            drawBar() {
                this.barData = {
                    title: {
                        text: '存储量柱状图'
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
            }
        },
        components: {datepicker, dynamicDataBar}
    }
</script>

<!--<template>-->
<!--<div class="admin-realtime-data">-->
<!--<div class="">-->
<!--<div class="span6">-->
<!--<ul class="breadcrumb"-->
<!--style="padding-left: 50px;box-sizing: border-box">-->
<!--<li>-->
<!--<router-link-->
<!--:to="{path:'/adminManage'}">主页-->
<!--</router-link>-->
<!--<span class="divider">></span>-->
<!--</li>-->
<!--<li class="active">实时数据</li>-->
<!--</ul>-->
<!--</div>-->
<!--</div>-->
<!--<div class="ctrl-area dark clearfix">-->
<!--<div class="text-center col-md-2 col-lg-2">-->
<!--<i-switch-->
<!--v-model="ctrlShow"-->
<!--&gt;</i-switch>-->
<!--<span v-text="ctrlShow?'关闭控制':'显示控制'"-->
<!--class="color-whitesmoke">-->
<!--</span>-->
<!--</div>-->
<!--<div class="col-md-5  col-lg-5">-->
<!--<div class="clearfix search">-->
<!--<Input v-model="searchValue"-->
<!--class="pull-right"-->
<!--icon="search"-->
<!--placeholder="输入名称切换厂家" style="width: 240px"></Input>-->
<!--<span class="color-whitesmoke ">-->
<!--当前选中：-->
<!--<kbd class="font-size-13">{{curFac}}</kbd>-->
<!--&nbsp;&nbsp;&nbsp;-->
<!--<button class="btn btn-primary btn-xs"-->
<!--@click="facListModalShow = true">切换</button>-->
<!--</span>-->
<!--</div>-->
<!--</div>-->
<!--<div class="col-md-5 col-lg-5">-->
<!--<datepicker @timeChange="timeOnChange"></datepicker>-->
<!--</div>-->
<!--</div>-->
<!--<Modal-->
<!--v-model="facListModalShow"-->
<!--title="厂家列表"-->
<!--&gt;-->
<!--<ul class="f-list">-->
<!--<li v-for="(factory,index) in factoryInfos"-->
<!--class="f-item"-->
<!--@click="">-->
<!--<span>{{factory.name}}</span>-->
<!--</li>-->
<!--</ul>-->
<!--</Modal>-->
<!--</div>-->
<!--</template>-->


<!--<style scoped>-->

<!--</style>-->