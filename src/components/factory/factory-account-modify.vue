<template>
    <form class=" col-md-10 col-lg-10 col-md-push-1 col-lg-push-1 form" @submit.prevent>
        <div class="form-group">
            <label for="InputName">用户名</label>
            <input class="form-control" id="InputName" placeholder="用户名">
        </div>
        <div class="form-group">
            <label for="InputPwd">密码</label>
            <input type="password" class="form-control" id="InputPwd" placeholder="密码">
        </div>
        <div class="form-group">
            <label for="InputPwdAgain">重复输入密码</label>
            <input type="password" class="form-control" id="InputPwdAgain" placeholder="密码">
        </div>
        <button type="submit" class="btn btn-default">提交</button>
    </form>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        computed: {
            ...mapGetters([
                'userinfo'
            ])
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
