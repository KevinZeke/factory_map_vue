<template>
    <div id="ctrl" class="col-md-2 col-sm-3">
        <div class="row">
            <h4 class="col-md-9 col-xs-6 col-sm-6">单位列表</h4>
            <button @click="showList"
                    class="btn btn-sm btn-default  col-xs-6 col-sm-6 col-md-3 f-btn"
                    v-text="isListShow?'收起':'展开'"></button>
        </div>
        <input type="text"
               v-model="searchValue"
               class="form-control ctrl-search" placeholder="搜索">
        <hr>
        <ul v-if="isListShow" class="f-list">
            <li v-for="(factory,index) in factoryList"
                class="f-item"
                :class="{active:curActive == index}"
                @click="changeCurPoint(index,factory.lng,factory.lat)">
                <span>{{factory.name}}</span>
                <router-link
                        :to="{name:'factoryDetail',params:{id:factory.id}}"
                        @click="" class="pull-right btn btn-sm btn-default">
                    详情
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: {
            factoryPoints: {type: Array, default: []}
        },
        data() {
            return {
                curActive: 0,
                isListShow: true,
                searchValue: ''
            }
        },
        computed: {
            factoryList() {
                return this.factoryPoints.filter((p) => {
                    //console.log(p);
                    return new RegExp(this.searchValue, 'gi').test(p.name);
                });
            }
        },
        methods: {
            showList() {
                this.isListShow = !this.isListShow;
            },
            showFactoryDetail() {

            },
            changeCurPoint(index, lng, lat) {
                this.curActive = index;
                //console.log(lng, lat);
                this.$emit('curPointOnchange', {lng: lng, lat: lat});
            }
        }
    }
</script>

<style scoped>
    #ctrl {
        background-color: #fff;
        box-shadow: 1px 1px 1px 1px #ccc;
        z-index: 999;
        position: absolute;
        right: 0;
        top: 0;
        border-radius: 3px;
        max-height: 100%;
        overflow: auto;
        /*height: 100%;*/
    }

    #ctrl .f-list {

    }

    #ctrl ul {
        width: 100%;
    }

    #ctrl li {
        padding: 6px;
        float: left;
        cursor: pointer;
        width: 100%;
        font-size: 13px;
        border-bottom: 1px solid #6fe9ff;
    }

    #ctrl li.active {
        font-weight: bolder;
        background-color: #a8f7ff;
    }

    #ctrl li:hover {
        background-color: #a8f7ff;
    }

    #ctrl li:nth-child(odd) {
        /*background-color: #b9ebff;*/
    }
</style>
