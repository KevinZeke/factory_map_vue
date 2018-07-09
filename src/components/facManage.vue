<template>
    <div class="wrap">
        <manage-header :brand="'化工单位管理界面'">
            <Dropdown trigger="click"  placement="bottom-end"
                      style="position: absolute;top: 0;right: 0;">
                <a class="navbar-toggle collapsed" href="javascript:void(0)">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </a>
                <DropdownMenu slot="list">
                    <DropdownItem>
                        <router-link class="oy active"
                                     :to="{name:'factoryChemIn'}">
                            化学品录入
                        </router-link>
                    </DropdownItem>
                    <DropdownItem>
                        <router-link class="oy "
                                     :to="{name:'factoryInfoModi'}">
                            厂商信息修改
                        </router-link>
                    </DropdownItem>
                    <DropdownItem>
                        <router-link :to="{name:'factoryAcModi'}" class="oy "
                                     href="fluid/index.html">
                            账号密码修改
                        </router-link>
                    </DropdownItem>
                    <!--<DropdownItem>-->
                        <!--<router-link :to="{name:'factoryDetailManage',params:{id:userinfo.id}}" class="oy ">-->
                            <!--化学品数据-->
                        <!--</router-link>-->
                    <!--</DropdownItem>-->
                    <DropdownItem>
                        <router-link class="oy"
                                     :to="{name:'factoryUpModi'}">
                            更新记录
                        </router-link>
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </manage-header>
        <div class="facManage container">
            <div class="left col-lg-2 col-md-2 hidden-sm hidden-xs">
                <ul class="nav pb nav-stacked wz">


                    <li class="axq">管理</li>
                    <li class="pa"
                        :class="{active:0==curIndex}"
                        @click="changeCurIndex(0)">
                        <router-link class="oy active"
                                     :to="{name:'factoryChemIn'}">
                            化学品录入
                        </router-link>
                    </li>
                    <li class="pa"
                        :class="{active:1==curIndex}"
                        @click="changeCurIndex(1)">
                        <router-link class="oy "
                                     :to="{name:'factoryInfoModi'}">
                            厂商信息修改
                        </router-link>
                    </li>
                    <li class="pa"
                        :class="{active:2==curIndex}"
                        @click="changeCurIndex(2)">
                        <router-link :to="{name:'factoryAcModi'}" class="oy "
                                     href="fluid/index.html">
                            账号密码修改
                        </router-link>
                    </li>

                    <li class="axq">数据</li>
                    <li class="pa"
                        :class="{active:3==curIndex}"
                        @click="changeCurIndex(3)">
                        <router-link :to="{name:'factoryDetailManage',params:{id:userinfo.id}}" class="oy ">
                            化学品数据
                        </router-link>
                    </li>
                    <li class="pa"
                        :class="{active:4==curIndex}"
                        @click="changeCurIndex(4)">
                        <router-link class="oy"
                                     :to="{name:'factoryUpModi'}">
                            更新记录
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="right col-lg-10 col-md-10 ">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </div>
        </div>
    </div>

</template>

<script>
    import factoryDetail from '../components/factory/factory-detail.vue'
    import factoryinfoModi from '../components/factory/factory-info-modify.vue'
    import manageHeader from '../components/manage/manage-header';
    import {mapGetters} from 'vuex'

    export default {
        name: "facManage",
        data() {
            return {
                curIndex: 4
            }
        },
        computed: {
            ...mapGetters([
                'userinfo'
            ])
        },
        created() {
            //console.log(this.$route.params.id);
            this.$router.push({name: 'factoryUpModi', params: {id: this.$route.params.id}});
        },
        methods: {

            changeCurIndex(idx) {
                this.curIndex = idx;
            }
        },
        components: {factoryDetail, factoryinfoModi, manageHeader}
    }
</script>

<style scoped>
    .wrap, .container {
        height: 100%;
    }

    .nav .axq {
        color: rgb(109, 116, 135);
    }

    .nav {
        padding-bottom: 15px;
        font-size: 1.1em;
    }

    .left {
        border-bottom: 1px solid rgb(109, 116, 135);
    }

    .facManage .nav li {
        border-radius: 5px;
        color: rgb(207, 210, 218);
    }

    .nav li.active {
        background-color: rgb(109, 116, 135);
    }

    .right {
        height: 100%;
    }
</style>