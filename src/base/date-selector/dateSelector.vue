<template>
    <div>
        <div class="btn-group col-md-4" role="group" aria-label="...">
            <button type="button"
                    :class="{active:isCurMonth}"
                    @click="isCurMonth = true"
                    class="btn btn-month btn-sm btn-default">月度
            </button>
            <button type="button"
                    :class="{active:!isCurMonth}"
                    @click="isCurMonth = false"
                    class="btn btn-date btn-sm btn-default">
                区间
            </button>
        </div>
        <div v-if="isCurMonth" class="col-md-6 ctrl-month">
            <input v-model="month" type="month" class="pull-left form-control">
        </div>
        <div v-if="!isCurMonth" class="col-md-8  ctrl-date">
            <input v-model="firstDate" type="date" style="width: 50%" class="pull-left form-control">
            <input v-model="secondDate" type="date" style="width: 50%" class="pull-left form-control">
        </div>
    </div>
</template>

<script>
    import {getLastDay} from '../../common/util'

    /**
     * 向外发送最新时间事件：timeOnChange
     */
    var date = new Date();
    var mon = date.getMonth() + 1;
    var cur = date.getFullYear() + '-' + (mon < 10 ? ('0' + mon) : mon);

    export default {
        data() {
            return {
                isCurMonth: true,
                month: cur,
                firstDate: cur + '-01',
                secondDate: cur + '-' + getLastDay(date.getFullYear(), mon)
            }
        },

        watch: {
            month() {
                this.$emit('timeOnChange', [this.month]);
            },
            firstDate() {
                this.$emit('timeOnChange', [this.firstDate, this.secondDate]);
            },
            secondDate() {
                this.$emit('timeOnChange', [this.firstDate, this.secondDate]);
            }
        },
        created() {


        },
        methods: {
            curTime() {
                if (this.isCurMonth)
                    return [this.month];
                return [this.firstDate, this.secondDate];
            }
        }
    }
</script>

<style>

</style>
