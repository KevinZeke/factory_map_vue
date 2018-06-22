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
import adminStatistics from '../components/admin/admin-statistics.vue'
import adminHome from '../components/admin/admin-home.vue'
import errorDirect from '../components/404.vue'
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
            //name: 'adminManage',
            component: adminManage,
            children: [
                {
                    path: '',
                    redirect: 'adminHome'
                },
                {
                    path: 'adminHome',
                    name: 'adminHome',
                    component: adminHome
                },
                {
                    path: 'adminStatistics',
                    name: 'adminStatistics',
                    component: adminStatistics
                }
            ]
        },
        {
            path: '/facManage',
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
        },
        {
            path: '/404',
            name: '404',
            component: errorDirect
        },
        {
            path: '*',
            component: errorDirect
        }
    ]
})
