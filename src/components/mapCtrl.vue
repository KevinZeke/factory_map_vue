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
        <!-- <ctrl-head1></ctrl-head1> -->
        <!-- <ctrl-head2></ctrl-head2> -->
        <!-- <ctrl-right></ctrl-right> -->
        <router-view></router-view>
    </div>
</template>

<script>
    import {getAllFactoryInfos} from '../api/factory'
    import apiConf from '../api/api.conf'
    import bMap from '../components/map/map.vue'
    import ctrlList from '../components/control/ctrl-list.vue'
    import ctrlHead1 from '../components/control/ctrl-head-1.vue'
    import ctrlHead2 from '../components/control/ctrl-head-2.vue'
    import ctrlRight from '../components/control/ctrl-right.vue'
    import {loginCheck} from "../api/user";
    import {mapGetters} from 'vuex'

    export default {
        name: 'mapCtrl',
        computed: {
            ...mapGetters([
                'userinfo'
            ])
        },
        data() {
            return {
                curPoint: null,
                factoryInfos: []
            }
        },
        created() {
            loginCheck().then(function (res) {
                //console.log(res.data);
            })
            //console.log(this.userinfo);
            if (true || this.userinfo && this.userinfo == 1) {
                this._getFactoryInfos();
            }
            else {
                this.$Modal.error({
                    title: '权限错误',
                    content: '您的账号没有权限浏览此页面'
                });
                //this.$router.push({path: '/'});
            }
        },
        mounted() {
        },
        methods: {
            //获取全部工厂信息
            _getFactoryInfos() {
                getAllFactoryInfos().then((resp) => {
                    if (resp.data.code == apiConf.successCode) {
                        this.factoryInfos = resp.data.data.filter(function (item) {
                            item.count = 52;
                            return true;
                        });
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