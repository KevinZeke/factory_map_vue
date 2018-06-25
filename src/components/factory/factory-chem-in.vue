<template>
    <div class="chem-in">
        <div class="order">
            <span style="white-space:pre;">  </span><span class="line"></span>
            <span style="white-space:pre;">  </span><span class="txt">化工品录入</span>
            <span style="white-space:pre;">  </span><span class="line"></span>
        </div>
        <Tabs value="name1">
            <TabPane label="文件上传" icon="upload" name="name1">
                <Upload
                        multiple
                        type="drag"
                        action="//jsonplaceholder.typicode.com/posts/">
                    <div style="padding: 20px 0">
                        <Icon type="ios-cloud-upload"
                              size="52" style="color: #3399ff"></Icon>
                        <p>点击或拖拽至此上传文件</p>
                    </div>
                </Upload>
                <button class="btn btn-primary" @click="uploadHelp">查看帮助</button>
                <button class="btn btn-primary disabled">下载模板</button>
            </TabPane>
            <TabPane label="手工录入" icon="person" name="name2">
                <h4 class="text-center color-whitesmoke ">开发中</h4>
            </TabPane>
            <TabPane label="接口上传" icon="network" name="name3">
                <h4 style=" text-align:center; margin: 10px auto;color: cornflowerblue">
                    <kbd>
                        <Icon type="network"></Icon>&nbsp;api接口 开发中</kbd>
                </h4>
                <div class="order">
                    <span style="white-space:pre;">  </span><span class="line"></span>
                    <span style="white-space:pre;">  </span><span class="txt">接口上传步骤</span>
                    <span style="white-space:pre;">  </span><span class="line"></span>
                </div>
                <h4>请求地址</h4>
                <code style="display: inline-block;width: 100%" class=" dark-bg color-whitesmoke">
                    http://api.fakeurl.com/oauth/authorize/?client_id=CLIENT-ID&redirect_uri=REDIRECT-URI&response_type=status
                </code>
                <h4>请求数据键</h4>
                <dl class="dark-bg dl-horizontal color-whitesmoke">
                    <dt>access_token</dt>
                    <dd>：标志
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button @click="getToken" class=" btn btn-xs btn-primary">获取token</button>
                    </dd>
                    <dt>user</dt>
                    <dd>：用户信息</dd>
                    <dt>id</dt>
                    <dd>：唯一id</dd>
                    <dt>full_name</dt>
                    <dd>：全名</dd>
                    <dd>...</dd>
                    <dd>...</dd>
                    <dd>...</dd>
                </dl>
                <h4>请求数据JSON示例</h4>
                <code style="display: inline-block;width: 100%" class=" dark-bg color-whitesmoke">
                    {<br>
                    &nbsp;&nbsp;"access_token": "fb2e77d.47a0479900504cb3ab4a1f626d174d2d",<br>
                    &nbsp;&nbsp;"user": {<br>
                    &nbsp;&nbsp; "id": "1574083",<br>
                    &nbsp;&nbsp; "username": "snoopdogg",<br>
                    &nbsp;&nbsp; "full_name": "Snoop Dogg",<br>
                    &nbsp;&nbsp; "profile": "..."<br>
                    &nbsp; }<br>
                    }
                </code>
            </TabPane>
        </Tabs>
        <Modal
                v-model="showHelp"
                title="文件上传帮助">
            <h5>文件上传解析功能正在开发中...</h5>
            <hr>
            <Steps :current="0">
                <Step title="已完成" content="文件上传"></Step>
                <Step title="进行中" content="文件解析"></Step>
                <Step title="待进行" content="更新完成"></Step>
                <Step title="待进行" content="查看结果"></Step>
            </Steps>
        </Modal>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "factory-chem-in",
        data() {
            return {
                showHelp: false
            }
        },
        methods: {
            uploadHelp() {
                this.showHelp = true;
            },
            getToken(){
                this.$Modal.info({
                    title:'您的token为: ',
                    content:'fb2e77d.47a0479900504cb3ab4a1f626d174d2d'
                });
            }
        },
        computed: {
            ...mapGetters([
                'userinfo'
            ])
        }
    }
</script>

<style scoped>

    h4{
        color: #a0a0a0;
        margin: 15px auto;
    }

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