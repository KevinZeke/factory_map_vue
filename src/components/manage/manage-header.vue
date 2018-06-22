<template>
    <nav class="navbar navbar-default navbar-inverse">
        <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header hidden-sm hidden-xs" >
                <a class="navbar-brand" href="#">{{brand}}</a>
            </div>

            <div @click="logout" class="nav navbar-nav navbar-right logout">
                <span class="glyphicon glyphicon-user" aria-hidden="true"></span>
                &nbsp;
                <span>注销</span>
            </div>
        </div><!-- /.container-fluid -->
    </nav>
</template>

<script>

    export default {
        name: "manage-header",
        props: {
            brand: {type: String, default: ''},
            user: {type: String, default: ''}
        },
        methods:{
            logout() {
                this.$router.push({name: 'login'});
            }
        }
    }
</script>

<style scoped>
    .logout {
        color: #e2e2e2;
        font-size: 1.2em;
        padding: 15px;
        box-sizing: border-box;
        cursor: pointer;
    }
</style>