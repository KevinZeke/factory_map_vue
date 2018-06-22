import apiConf from "../api/api.conf";
import store from "../store/vuex";

export function adminGuard(to, from, next) {
    //console.log('------------');
    //console.log(to, from);
    //console.log('------------');


    // if (!store.state.user || store.state.user.type != apiConf.superUserType) {
    //     next('/404');
    // } else {
    //     next();
    // }

    next();
}