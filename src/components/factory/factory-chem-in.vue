<template>
    <div class="chem-in">
        <div class="order">
            <span style="white-space:pre;">  </span><span class="line"></span>
            <span style="white-space:pre;">  </span><span class="txt">化工品录入</span>
            <span style="white-space:pre;">  </span><span class="line"></span>
        </div>
        <Tabs value="name1">
            <TabPane label="文件上传" name="name1">
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
            <TabPane label="手工录入" name="name2">
                <form class=" col-md-10 col-lg-10 col-md-push-1 col-lg-push-1 form" @submit.prevent>
                    <div class="form-group">
                        <label for="InputName">厂家名称</label>
                        <input class="form-control" id="InputName" placeholder="厂家名称">
                    </div>
                    <div class="form-group">
                        <label for="InputAddr">地址</label>
                        <input type="" class="form-control" id="InputAddr" placeholder="地址">
                    </div>
                    <div class="form-group">
                        <label for="InputFr">法人</label>
                        <input type="" class="form-control" id="InputFr" placeholder="法人">
                    </div>
                    <div class="form-group">
                        <label for="InputTel">电话</label>
                        <input type="" class="form-control" id="InputTel" placeholder="电话">
                    </div>
                    <div class="form-group">
                        <label>介绍</label><br>
                        <textarea style="width: 100%" rows="3"></textarea>
                    </div>
                    <button type="submit" class="btn btn-default">提交</button>
                </form>
            </TabPane>
            <TabPane label="接口上传" name="name3">
                <h4 style=" text-align:center; margin: 0 auto;color: cornflowerblue">正在开发</h4>
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