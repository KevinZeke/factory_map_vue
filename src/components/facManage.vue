<template>
    <div class="wrap">
        <nav class="navbar navbar-default navbar-inverse">
            <div class="container-fluid">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">厂商信息管理页</a>
                </div>

                <div class="nav navbar-nav navbar-right logout">
                    <span class="glyphicon glyphicon-user" aria-hidden="true"></span>
                    <span>注销</span>
                </div>
            </div><!-- /.container-fluid -->
        </nav>
        <div class="facManage container">
            <div class="left col-lg-2 col-md-2 hidden-sm hidden-xs">
                <ul class="nav pb nav-stacked wz">



                    <li class="axq">管理</li>
                    <li class="pa">
                        <a class="oy active" href="index.html">
                            化学品录入
                        </a>
                    </li>
                    <li class="pa">
                        <router-link class="oy "
                                     :to="{name:'factoryInfoModi',params:{name:'A'}}">
                            厂商信息修改
                        </router-link>
                    </li>
                    <li class="pa">
                        <a class="oy " href="fluid/index.html">
                            账号密码修改
                        </a>
                    </li>

                    <li class="axq">数据</li>
                    <li class="pa">
                        <router-link :to="{name:'factoryDetailManage',params:{name:'A'}}" class="oy " href="docs/index.html">
                            化学品数据
                        </router-link>
                    </li>
                    <li class="pa">
                        <a class="oy" href="http://getbootstrap.com" target="blank">
                            更新记录
                        </a>
                    </li>
                </ul>
            </div>
            <div class="right col-lg-10 col-md-10 ">
                <keep-alive><router-view></router-view></keep-alive>
            </div>
        </div>
    </div>

</template>

<script>
    import factoryDetail from '../components/factory/factory-detail.vue'
    import factoryinfoModi from '../components/factory/factory-info-modify.vue'
    export default {
        name: "facManage",
        components:{factoryDetail,factoryinfoModi}
    }
</script>

<style scoped>
    .wrap,.container{
        height: 100%;
    }
    .nav .axq{
        color: rgb(109, 116, 135);
    }
    .nav{
        padding-bottom: 15px;
        font-size: 1.1em;
    }
    .left{
        border-bottom: 1px solid rgb(109, 116, 135);
    }
    .nav li{
        border-radius: 5px;
        color: rgb(207, 210, 218);
    }
    .logout{
        color: #e2e2e2;
        font-size: 1.2em;
        padding: 15px;
        box-sizing: border-box;
        cursor: pointer;
    }
    .right{
        height: 100%;
    }
</style>