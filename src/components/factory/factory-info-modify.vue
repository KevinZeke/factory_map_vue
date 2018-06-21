<template>
    <form class=" col-md-10 col-lg-10 col-md-push-1 col-lg-push-1 form" @submit.prevent>
        <div class="form-group">
            <label for="InputName">厂家名称</label>
            <input v-model="name" class="form-control" id="InputName" placeholder="厂家名称">
        </div>
        <div class="form-group">
            <label for="InputAddr">地址</label>
            <input v-model="addr" type="" class="form-control" id="InputAddr" placeholder="地址">
        </div>
        <div class="form-group">
            <label for="InputFr">法人</label>
            <input v-model="fr" type="" class="form-control" id="InputFr" placeholder="法人">
        </div>
        <div class="form-group">
            <label for="InputTel">电话</label>
            <input type="" v-model="tel" class="form-control" id="InputTel" placeholder="电话">
        </div>
        <div class="form-group">
            <label>介绍</label><br>
            <textarea style="width: 100%" v-model="fdesc" rows="3"></textarea>
        </div>
        <button type="submit" class="btn btn-default">提交</button>
    </form>
</template>

<script>
    import {mapGetters} from 'vuex'
    import {getFactoryInfo} from "../../api/factory";
    import apiConf from "../../api/api.conf";

    export default {
        computed: {
            ...mapGetters([
                'userinfo'
            ])
        },
        data() {
            return {
                name: '',
                addr: '',
                fr: '',
                tel: '',
                fdesc: ''
            }
        },
        created() {
            this._getFactoryInfo(this.userinfo.id);
        },
        methods: {
            _getFactoryInfo(id) {
                if (id) {
                    getFactoryInfo(this.userinfo.id).then((resp) => {
                        if (resp.data.code == apiConf.successCode) {
                            //console.log(resp.data.data);
                            this.name = resp.data.data[0].name;
                            this.addr = resp.data.data[0].addr;
                            this.fr = resp.data.data[0].fr;
                            this.tel = resp.data.data[0].tel;
                            this.fdesc = resp.data.data[0].fdesc;
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
                } else {
                    this.$Modal.error({
                        title: '登录错误',
                        content: '账号信息过期，请重新登录'
                    });
                }
            }
        }
    }
</script>

<style scoped>
    form {
        color: #eeeeee;
    }

    form input {
        color: #eeeeee;
    }

    label {
        font-size: 1.2em;
    }

    input, textarea {
        background-color: rgb(95, 100, 116);
        border: 1px solid rgb(114, 120, 138);
    }
</style>
