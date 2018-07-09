<template>
    <div class="datapicker">
        <div class=" col-md-4 col-lg-4 col-xs-5 col-sm-5 clearfix" role="group" aria-label="...">

            <div class="btn-group pull-right">
                <button type="button"
                        :class="{active:isCurMonth}"
                        @click="isCurMonth = true"
                        class="btn btn-month btn-sm btn-default">
                    月度
                </button>
                <button type="button"
                        :class="{active:!isCurMonth}"
                        @click="isCurMonth = false"
                        class="btn btn-date btn-sm btn-default">
                    区间
                </button>
            </div>

        </div>
        <div class="block col-md-8 col-lg-8 col-sm-7 col-xs-7">
            <DatePicker v-if="isCurMonth"
                        type="month"
                        v-model="valueMon"
                        show-week-numbers
                        placement="bottom-end"
                        placeholder="选择月度"
                        style="width: 100%;background-color:#333;"></DatePicker>
            <DatePicker v-if="!isCurMonth"
                        type="daterange"
                        v-model="valueDate"
                        show-week-numbers
                        placement="bottom-end"
                        placeholder="选择日期区间"
                        style="width: 100%"></DatePicker>
        </div>
    </div>
</template>

<script>
    import {getLastDay} from "../../common/util";


    var date = new Date();
    var mon = date.getMonth() + 1;
    var cur = date.getFullYear() + '-' + (mon < 10 ? ('0' + mon) : mon);

    export default {
        data() {
            return {
                //当前是否为月度选择
                isCurMonth: true,
                valueMon: cur,
                valueDate: [
                    cur + '-01', cur + '-' + getLastDay(date.getFullYear(), mon)
                ]
            }
        },
        components: {},
        watch: {

            valueMon(val) {
                this.$emit(
                    'timeChange',
                    [new Date(val).Format('yyyy-MM')]
                );
            },
            valueDate(val) {
                this.$emit(
                    'timeChange',
                    [
                        new Date(val[0]).Format('yyyy-MM-dd'),
                        new Date(val[1]).Format('yyyy-MM-dd')
                    ]
                );
            }
        },
        created() {

        }
    }
</script>

<style scoped>
    .btn.btn-sm.btn-default {
        background-color: #575757;
        color: whitesmoke;
        border: 1px solid #333;
    }

    .btn.btn-sm.btn-default.active {
        background-color: #414141;
        color: whitesmoke;
    }


</style>
