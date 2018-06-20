import Vue from 'vue'
import Router from 'vue-router'
import factoryDetail from '../components/factory/factory-detail.vue'
import factoryInfoModi from '../components/factory/factory-info-modify.vue'
import login from '../components/login'
import mapCtrl from '../components/mapCtrl'
import facManage from '../components/facManage.vue'
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
            path: '/facManage',
            name: 'facManage',
            component: facManage,
            children: [
                {
                    path: 'factoryDetailManage/:name',
                    name: 'factoryDetailManage',
                    component: factoryDetail
                },
                {
                    path: 'factoryInfoModi/:name',
                    name: 'factoryInfoModi',
                    component: factoryInfoModi
                }
            ]
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
