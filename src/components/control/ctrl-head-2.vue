<template>
    <Card   v-if="show"  id="head-ctrl-2" class="ctrl-box col-md-2 col-md-offset-8 ctrl-common"
         style="height: 180px;background-color:#fff; position: absolute;top: 0;left: 0;padding:2px">
        <btn-close @close="show = false"></btn-close>
        <h4>共: <span style="font-size: 30px;color: steelblue">11122233</span></h4>
        <table class="table  table-striped">
            <tbody>
            <tr style="background-color:#ff776f;">
                <th>A</th>
                <th>B</th>
                <th>V</th>
                <th>J</th>
            </tr>
            <tr>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
            </tr>
            <tr>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
            </tr>
            </tbody>
        </table>
    </Card >
</template>

<script>
    import btnClose from '../../base/button/close.vue'
    import pie from '../../chart/pie.vue'

    export default {
        data() {
            return {
                show: true,
                pieData: {}
            }
        },
        components:{btnClose}
    }
</script>

<style scope>
table{
    font-size: 12px;
}
</style>
