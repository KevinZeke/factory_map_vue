<template>
    <manage-header :brand="'泰州化工产品实时监控系统管理页面'"></manage-header>
</template>

<script>
    import manageHeader from '../components/manage/manage-header';

    export default {
        name: "AdminManage",
        components:{manageHeader}
    }
</script>

<style scoped>
    h3 {
        color: yellow;
    }
</style>