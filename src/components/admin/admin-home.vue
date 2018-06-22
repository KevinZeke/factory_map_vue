<template>
    <div class="admin-home-wrap">
        <div class="order">
            <span style="white-space:pre;">  </span><span class="line"></span>
            <span style="white-space:pre;">  </span><span class="txt">快速导航</span>
            <span style="white-space:pre;">  </span><span class="line"></span>
        </div>
        <div class="show-box">
            <div class="col-md-3 col-lg-3 col-sm-3 col-xs-6 box-container">
                <div class="box box1">
                    <div>监控</div>
                    <hr>
                </div>
            </div>
            <div class="col-md-3 col-lg-3 col-sm-3 col-xs-6 box-container">
                <div class="box box2">
                    <router-link :to="{name:'adminStatistics'}">统计</router-link>
                    <hr>
                </div>
            </div>
            <div class="col-md-3 col-lg-3 col-sm-3 col-xs-6 box-container">
                <div class="box box3">
                    <div>地图</div>
                    <hr>
                </div>
            </div>
            <div class="col-md-3 col-lg-3 col-sm-3 col-xs-6 box-container">
                <div class="box box4">
                    <div>管理</div>
                    <hr>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
    h3 {
        /*color: yellow;*/
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
        height: 120px;
        margin-bottom: 20px;
    }

    .box-container {
        padding: 15px;
        box-sizing: border-box;
        height: 100%;
        font-weight: 600;
        font-size: 2em;
        cursor: pointer;
    }

    hr {
        margin-top: -15px;
        padding: 0;
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
    a{
        display: inline-block;
        width: 100%;
        height: 100%;
    }
    a:hover{
        text-decoration: none;
    }
</style>
