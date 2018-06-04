import Vue from 'vue'
import Router from 'vue-router'
import factoryDetail from '../components/factory/factory-detail.vue'
import noData from '../components/factory/nodata.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/factoryDetail/:name',
            name: 'factoryDetail',
            component: factoryDetail
        },
        {
            path: '/nodata',
            name: 'nodata',
            component: noData
        }
    ]
})
