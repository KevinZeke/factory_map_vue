import Vue from 'vue'
import Router from 'vue-router'
import factoryDetail from '../components/factory/factory-detail.vue'
import factoryInfoModi from '../components/factory/factory-info-modify.vue'
import factoryAcModi from '../components/factory/factory-account-modify'
import factoryUpModi from '../components/factory/factory-uodate-info'
import factoryChemIn from '../components/factory/factory-chem-in'
import login from '../components/login'
import mapCtrl from '../components/mapCtrl'
import facManage from '../components/facManage.vue'
import adminManage from '../components/adminManage'
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
            path: '/adminManage',
            name: 'adminManage',
            component: adminManage
        },
        {
            path: '/facManage/:id',
            name: 'facManage',
            component: facManage,
            children: [
                {
                    path: 'factoryDetailManage/:id',
                    name: 'factoryDetailManage',
                    component: factoryDetail
                },
                {
                    path: 'factoryInfoModi',
                    name: 'factoryInfoModi',
                    component: factoryInfoModi
                },
                {
                    path: 'factoryAcModi',
                    name: 'factoryAcModi',
                    component: factoryAcModi
                },
                {
                    path: 'factoryUpModi',
                    name: 'factoryUpModi',
                    component: factoryUpModi
                },
                {
                    path: 'factoryChemIn',
                    name: 'factoryChemIn',
                    component: factoryChemIn
                }
            ]
        },
        {
            path: '/mapCtrl',
            name: 'mapCtrl',
            component: mapCtrl,
            children: [
                {
                    path: 'factoryDetail/:id',
                    name: 'factoryDetail',
                    component: factoryDetail
                }
            ]
        },
        {
            path: '/factoryDetail/:id',
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
