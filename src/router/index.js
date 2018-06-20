import Vue from 'vue'
import Router from 'vue-router'
import factoryDetail from '../components/factory/factory-detail.vue'
import login from '../components/login'
import mapCtrl from '../components/mapCtrl'
import dataIn from '../components/dataInput'
import noData from '../components/factory/nodata.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'login',
            component: login
        },
        {
            path: '/dataIn',
            name: 'dataIn',
            component: dataIn,
            children: []
        },
        {
            path: '/mapCtrl',
            name: 'mapCtrl',
            component: mapCtrl,
            children: [
                {
                    path: 'factoryDetail/:name',
                    name: 'factoryDetail',
                    component: factoryDetail
                }
            ]
        },
        {
            path: '/factoryDetail/:name',
            name: 'factoryDetailGlobal',
            component: factoryDetail
        },
        {
            path: '/nodata',
            name: 'nodata',
            component: noData
        }
    ]
})
