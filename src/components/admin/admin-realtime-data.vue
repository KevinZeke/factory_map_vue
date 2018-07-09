<template>
    <div class="layout dark">
        <Layout :style="{minHeight: '100vh'}">
            <Sider class="hidden-xs hidden-sm"
                   collapsible :collapsed-width="60" v-model="isCollapsed">
                <Menu active-name="1-1" theme="dark" width="auto" :class="menuitemClasses">
                    <MenuItem name="1-1">
                        <Icon type="ios-navigate"></Icon>
                        <span>数据</span>
                    </MenuItem>
                    <MenuItem name="1-2">
                        <Icon type="search"></Icon>
                        <span>开发中</span>
                    </MenuItem>
                    <MenuItem name="1-3">
                        <Icon type="settings"></Icon>
                        <span>开发中</span>
                    </MenuItem>
                </Menu>
            </Sider>

            <Layout>
                <Content>
                    <div class="admin-realtime-data">
                        <div class="">
                            <div class="span6">
                                <ul class="breadcrumb"
                                    style="padding-left: 5%;box-sizing: border-box">
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
                            <div class="text-center hidden-sm hidden-xs col-md-2 col-lg-2">
                                <i-switch
                                        v-model="ctrlShow"
                                ></i-switch>
                                <span v-text="ctrlShow?'关闭控制':'显示控制'"
                                      class="color-whitesmoke">
                                </span>
                            </div>
                            <div class="col-md-5  col-lg-5" style="margin-bottom: 10px;">
                                <div class="clearfix search">
                                    
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
                        <div 
                            style="padding:5px;"
                            class="mian-info row color-whitesmoke dark-bg mb-20 ">
                            <div class="total-fac box col-sm-6   col-xs-6 col-md-3 col-lg-3">
                                <div class="box-inner">
                                    当前共监控<br>
                                    <span class="font-size-25">{{factoryInfos.length}}</span>
                                    家化工企业
                                </div>
                            </div>
                            <div class="total-category box col-sm-6  col-xs-6  col-md-3 col-lg-3">
                                <div class="box-inner">
                                    危险化学品共<br>
                                    <span class="font-size-25">
                                        {{900+Math.random()*500>>0}}
                                    </span>
                                    吨
                                </div>
                            </div>
                            <div class="total-category box col-sm-6  col-xs-6  col-md-3 col-lg-3">
                                <div class="box-inner">
                                    最近更新于 <small>今日</small><br>
                                    <!--<span>今日</span>-->
                                    <span class="font-size-25">
                                         {{lastUpdate.split(' ')[1]}}
                                    </span>
                                </div>
                            </div>
                            <div class="total-category box col-sm-6  col-xs-6  col-md-3 col-lg-3">
                                <div class="box-inner clearfix box-map">

                                    <router-link :to="{name:'mapCtrl'}">
                                        <span class="font-size-25">
                                        地图
                                        </span>
                                        <Icon 
                                        class="pull-right" :size="40" type="ios-location-outline"></Icon>
                                        <hr style="margin:9px;">
                                    </router-link> 
                                    <!-- 最近更新于<br>
                                    <span>今日</span>
                                    <span class="font-size-25">
                                         {{lastUpdate.split(' ')[1]}}
                                    </span> -->
                                </div>
                            </div>
                        </div>
                        <div class="main-chart" style="position: relative">
                            <div
                            :class="{'col-md-12':!isCollapsed,'col-md-9':isCollapsed,'col-lg-12':!isCollapsed,'col-lg-9':isCollapsed}" 
                            class="dark-bg">
                                <dynamicDataBar
                                        style="margin-top:20px;"
                                        ref="bar"
                                        :height="'500px'"
                                        :option="barData"
                                ></dynamicDataBar>
                            </div>
                            <div
                            :class="{'col-md-12':!isCollapsed,'col-md-3':isCollapsed,'col-lg-12':!isCollapsed,'col-lg-3':isCollapsed}"
                            style="max-height:500px;">
                                <table class="info-table" style="width:100%;">
                                    <thead>
                                        <tr>
                                            <th class="text-center" colspan="3">{{curFac}}</th>
                                        </tr>
                                        <tr>
                                            <td  colspan="3" style="vertical-align:middle">
                                                <Input v-model="searchValue"
                                                    icon="search"
                                                    placeholder="化学品搜索" 
                                                    style="width: 240px;margin-left:20px;">
                                                </Input>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>品名</th>
                                            <th>批次</th>
                                            <th>存量</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr  :class="{warn:curAnimeIndex == idx}" v-for="(chem,idx) in chemList">
                                            <th>{{chem.pm}}</th>
                                            <th>{{chem.pc}}</th>
                                            <th :ref="'cl-'+idx" >{{chem.cl}}</th>
                                        </tr>
                                        <tr>
                                            <td colspan="7" class="dark">
                                                <div class="col-md-12" 
                                                     style="height:30px;margin-bottom:10px;">
                                                    <Page class="table-page"
                                                          :page-size="4"
                                                          simple></Page>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <Modal
                                v-model="facListModalShow"
                                title="厂家列表"
                        >
                        <div class="row">
                            <Input v-model="searchValue"
                               icon="search"
                               placeholder="输入名称搜索" 
                               style="width: 240px;margin-bottom:20px;margin-left:20px;">
                           </Input>
                        </div>
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
    import {getAllFactoryInfos} from "../../api/factory"
    import apiConf from "../../api/api.conf"
    import {getNowFormatDate} from "../../common/util"

    export default {
        name: "admin-realtime-data",
        data() {
            return {
                ctrlShow: false,
                searchValue: '高猛酸钠',
                curFac: '泰州A化工有限公司',
                factoryInfos: [],
                facListModalShow: false,
                isCollapsed: true,
                barData: {},
                lastUpdate:'',
                curAnimeIndex: -1,
                chemList:[
                    {pm:'高猛酸钠A',pc:'20',cl:Math.random()*400>>0},
                    {pm:'高猛酸钠N',pc:'81',cl:Math.random()*400>>0},
                    {pm:'高猛酸钠m',pc:'4',cl:Math.random()*100>>0},
                    {pm:'高猛酸钠B',pc:'5',cl:Math.random()*400>>0},
                    {pm:'高猛酸钠A',pc:'72',cl:Math.random()*400>>0},
                    {pm:'高猛酸钠F',pc:'2',cl:Math.random()*100>>0},
                    {pm:'高猛酸钠D',pc:'12',cl:Math.random()*400>>0},
                    {pm:'高猛酸钠V',pc:'25',cl:Math.random()*100>>0},
                    {pm:'高猛酸钠B',pc:'23',cl:Math.random()*400>>0},
                    {pm:'高猛酸钠D',pc:'12',cl:Math.random()*400>>0},
                    {pm:'高猛酸钠V',pc:'25',cl:Math.random()*100>>0},

                ]
            }
        },
        created() {
            this._getFactoryInfos();
            this.drawBar();

            setInterval(()=>{

                let updateIndex = Math.random()*this.chemList.length >> 0;
                this.curAnimeIndex = updateIndex;
                this.lastUpdate = getNowFormatDate();
                this.chemList[updateIndex].cl = Math.random()*100>>0;
                this.chemList[updateIndex].pc = Math.random()*100>>0;
                this.chemList = JSON.parse(JSON.stringify(this.chemList));

            },2500);

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
        max-height: 300px;
        overflow: auto;
    }
    .f-list li{
        line-height: 2.2em;
        font-size: 1.2em;
    }
    .f-list li:hover{
        background-color: #ede1ff;
    }

    .warn{
        animation:warn 2s;
    }
    @keyframes warn{
        0%{
            background-color: transparent;
        }
        50%{
            background-color: rgba(248, 0, 0, 0.4);
        }
        100%{
            background-color: transparent;
        }
    }
    .box {
        /*border: 1px solid #fff;*/
        /*background-color: #fff;*/
        /*font-weight: bold;*/
        padding: 15px;
        box-sizing: border-box;
        border-radius: 5px;
        height: 100%;
        /*width: 100%;*/
    }
    .box-inner{
        padding: 6px;
        box-sizing:border-box;
        background-color:#333;
        border-radius: 6px;
        height: 100%;
    }
    .box-inner a{
        display: inline-block;
        width: 100%;
        height: 100%;
    }

    .box-map{
        cursor: pointer;
    }

    .box-map:hover{
        background-color: rgba(248, 0, 0, 0.3);
    }
</style>

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