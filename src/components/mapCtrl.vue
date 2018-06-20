<template>
    <div v-if="factoryInfos.length" id="app">
        <b-map
                :center="curPoint"
                :points="factoryInfos">
        </b-map>
        <ctrl-list
                :factoryPoints="factoryInfos"
                @curPointOnchange="changePoints">
        </ctrl-list>
        <ctrl-head1></ctrl-head1>
        <ctrl-head2></ctrl-head2>
        <ctrl-right></ctrl-right>
        <router-view></router-view>
    </div>
</template>

<script>
    import {getAllFactoryInfos} from '../api/factory'
    import bMap from '../components/map/map.vue'
    import ctrlList from '../components/control/ctrl-list.vue'
    import ctrlHead1 from '../components/control/ctrl-head-1.vue'
    import ctrlHead2 from '../components/control/ctrl-head-2.vue'
    import ctrlRight from '../components/control/ctrl-right.vue'
    import {loginCheck} from "../api/user";

    export default {
        name: 'mapCtrl',
        data() {
            return {
                curPoint: null,
                factoryInfos: []
            }
        },
        created() {
            loginCheck().then(function (res) {
                console.log(res.data);
            })
            this._getFactoryInfos();
        },
        mounted(){},
        methods: {
            //获取全部工厂信息
            _getFactoryInfos() {
                getAllFactoryInfos().then((resp) => {
                    this.factoryInfos = resp.data;
                }).catch((err) => {
                    console.log(err);
                    this.$Modal.error({
                        title: '网络错误',
                        content: '获得工厂位置信息失败'
                    });
                });
            },
            //更新用户点击的工厂
            changePoints(point) {
                this.curPoint = point;
            }
        },
        components: {bMap, ctrlList, ctrlHead1, ctrlHead2, ctrlRight}
    }
</script>

<style scoped>

</style>