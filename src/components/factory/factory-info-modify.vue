<template>
    <form class=" col-md-10 col-lg-10 col-md-push-1 col-lg-push-1 form" @submit.prevent>
        <div class="form-group">
            <label for="InputName">厂家名称</label>
            <input  class="form-control" id="InputName" placeholder="厂家名称">
        </div>
        <div class="form-group">
            <label for="InputAddr">地址</label>
            <input type=""  class="form-control" id="InputAddr" placeholder="地址">
        </div>
        <div class="form-group">
            <label for="InputFr">法人</label>
            <input type=""  class="form-control" id="InputFr" placeholder="法人">
        </div>
        <div class="form-group">
            <label for="InputTel">电话</label>
            <input type=""  class="form-control" id="InputTel" placeholder="电话">
        </div>
        <div class="form-group">
            <label>介绍</label><br>
            <textarea style="width: 100%" rows="3"></textarea>
        </div>
        <button type="submit" class="btn btn-default">提交</button>
    </form>
</template>

<script>

</script>

<style scoped>
    form{
        color: #eeeeee;
    }
    form input{
        color: #eeeeee;
    }
    label{
        font-size: 1.2em;
    }

    input,textarea{
        background-color: rgb(95, 100, 116);
        border: 1px solid rgb(114, 120, 138);
    }
</style>
