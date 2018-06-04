<template>
    <div class="block">
        <span class="demonstration">起始日期时刻为 12:00:00，结束日期时刻为 08:00:00</span>
        <el-date-picker
                v-model="curTime"
                type="datetimerange"
                align="right"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :default-time="['12:00:00', '08:00:00']">
        </el-date-picker>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                value6: '',
                value7: ''
            };
        }
    };
</script>