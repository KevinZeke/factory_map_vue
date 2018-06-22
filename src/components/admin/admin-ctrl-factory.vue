<template>
    <div>
        <div class="clearfix search">
            <Input v-model="searchValue"
                   class="pull-right"
                   icon="search"
                   placeholder="搜索" style="width: 240px"></Input>
        </div>
        <table class="info-table">
            <thead>
            <tr>
                <th>名称</th>
                <th>法人</th>
                <th>地址</th>
                <th>经度</th>
                <th>纬度</th>
                <th>电话</th>
                <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="factory in factoryInfosFilter">
                <th>{{factory.name}}</th>
                <th>{{factory.fr}}</th>
                <th>{{factory.addr}}</th>
                <th>{{factory.lng}}</th>
                <th>{{factory.lat}}</th>
                <th>{{factory.tel}}</th>
                <th class="edit">
                    <Icon @click="updateFactoryInfo(factory.id)" type="edit"></Icon>
                </th>
            </tr>
            </tbody>
            <tbody>

            </tbody>
        </table>

    </div>
</template>

<script>
    import {getAllFactoryInfos} from "../../api/factory";
    import apiConf from "../../api/api.conf";

    export default {
        name: "admin-ctrl-factory",
        data() {
            return {
                searchValue: '',
                //name,id,fdesc,fr,lng,lat,tel,addr
                factoryInfos: []
            }
        },
        computed: {
            factoryInfosFilter() {
                return this.factoryInfos.filter((p) => {
                    //console.log(p);
                    return new RegExp(this.searchValue, 'gi').test(p.name) && (p.name != '管理员');
                });
            }
        },
        created() {
            this._getFactoryInfos();
        },
        methods: {
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

            updateFactoryInfo(id) {
                this.$Modal.warning({
                    content:'正在开发中。。。'
                })
            }
        }
    }
</script>

<style scoped>
    .edit {
        cursor: pointer;
    }

    .search {
        padding-bottom: 20px;
    }
</style>