<template>
    <div id="container">
        <h4 class="text-center">
            <span class="glyphicon glyphicon-warning-sign" aria-hidden="true"></span>
            若无法显示地图或工厂位置信息，请检查网络设置
        </h4>
    </div>
</template>

<script>
    import {init as BMapInit} from '../../common/BMap'

    export default {
        props: {
            points: {type: Array, default: []},
            center: {type: Object, default: null}
        },
        data() {
            return {
                BMap: null
            }
        },
        mounted() {
            this._mapInit();
        },
        watch: {
            center(point) {
                if (this.BMap && point) {
                    this.BMap.panTo(point.lng, point.lat);
                }
            }
        },
        methods: {
            _mapInit() {
                var curMap = BMapInit("container");
                var that = this;
                curMap.mark(this.points, function (marker, info) {
                    marker.addEventListener('click', function () {
                        that.$router.push({
                            name:'factoryDetail',
                            params:{
                                id:info.id
                            }
                        })
                    })
                });
                curMap.heat(this.points);
                this.BMap = curMap;
            }
        }
    }
</script>

<style>
    #container {
        height: 100%;
        width: 100%;
    }

    #r-result {
        width: 100%;
    }

    .BMapLabel {
        display: inline-block;
        max-width: none;
        border-radius: 3px;
        /*border: 1px solid #ccc;*/
        box-shadow: 1px 1px 1px 1px #ccc;
    }
</style>
