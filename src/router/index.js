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
import adminCtrl from '../components/admin/admin-control.vue'
import adminCtrlFac from '../components/admin/admin-ctrl-factory'
import adminRealtimeData from '../components/admin/admin-realtime-data'
import adminWatch from '../components/admin/admin-watch.vue'
import adminHome from '../components/admin/admin-home.vue'
import errorDirect from '../components/404.vue'
import noData from '../components/factory/nodata.vue'
import {adminGuard} from "./guard";

Vue.use(Router);


const router = new Router({
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
            beforeEnter: adminGuard,
            children: [
                {
                    path: '',
                    redirect: 'adminHome'
                },
                {
                    path: 'adminCtrl',
                    component: adminCtrl,
                    children: [
                        {
                            path: '',
                            redirect: 'acModi'
                        },
                        {
                            path: 'acModi',
                            name: 'acModi',
                            component: factoryAcModi
                        },
                        {
                            path: 'adminCtrlFac',
                            name: 'adminCtrlFac',
                            component: adminCtrlFac
                        }
                    ]
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
                },
                {
                    path: 'adminWatch',
                    name: 'adminWatch',
                    component: adminWatch
                },
                {
                    path:'adminRealtimeData',
                    name: 'adminRealtimeData',
                    component: adminRealtimeData
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
            beforeEnter: adminGuard,
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
});

// router.beforeEach(function (to, from, next) {
//     console.log(from);
//     if (from.name == 'login') {
//         this.$Message.success('This is a success tip');
//     }
//     next();
// });

export default router;
