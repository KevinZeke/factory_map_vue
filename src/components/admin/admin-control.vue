<template>
    <div class="wrap">
        <div class="facManage container">
            <div class="row">
                <div class="span6">
                    <ul class="breadcrumb">
                        <li>
                            <router-link
                                    :to="{path:'/adminManage'}">主页</router-link>
                            <span class="divider">></span>
                        </li>
                        <li class="active">管理</li>
                    </ul>
                </div>
            </div>
            <div class="left col-lg-2 col-md-2 hidden-sm hidden-xs">
                <ul class="nav pb nav-stacked wz nav-menu">


                    <li class="axq">厂商管理</li>
                    <li class="pa"
                        :class="{active:0==curIndex}"
                        @click="changeCurIndex(0)">
                        <router-link class="oy active"
                                     :to="{name:'adminCtrlFac'}">
                            厂商信息管理
                        </router-link>
                    </li>


                    <li class="axq">账号管理</li>
                    <li class="pa"
                        :class="{active:1==curIndex}"
                        @click="changeCurIndex(1)">
                        <router-link :to="{name:'acModi'}" class="oy ">
                            账号密码修改
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
    import {mapGetters} from 'vuex'
    import apiConf from "../../api/api.conf";

    export default {
        name: "adminControl",
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
            // if (!this.userinfo.type == apiConf.superUserType) {
            //     this.$router.push({path: '/404'});
            // }
        },
        methods: {

            changeCurIndex(idx) {
                this.curIndex = idx;
            }

        },
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

    .nav li {
        border-radius: 5px;
        margin-bottom: 10px;
        color: rgb(207, 210, 218);
    }

    .nav li.active {
        background-color: rgb(109, 116, 135);
    }

    .right {
        height: 100%;
    }
</style>