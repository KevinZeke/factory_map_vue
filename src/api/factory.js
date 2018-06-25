import axios from 'axios'
import apiConf from './api.conf'


/**
 * 获取所有工厂信息
 */
export function getAllFactoryInfos() {
    return axios.get(apiConf.url + '/fphp/factory/factory_info.php', {params: {}});
}

/**
 * 获取单个工厂信息
 */
export function getFactoryInfo(id) {
    return axios.get(apiConf.url + '/fphp/factory/factory_info.php', {params: {id}});
}

/**
 * 获取全部工厂延时信息
 */

 export function getAlloverdueInfo(){


    return axios.get(apiConf.url + '/fphp/factory/factory_overdue.php');

    // return [
    //     {id:1,name:'泰州A化工厂',fr:'李连',tel:'0519-8990123',last_update:'2018-06-11',status:1,is_handel:0},
    //     {id:2,name:'泰州B化工厂',fr:'张一',tel:'0519-3456789',last_update:'2018-06-11',status:1,is_handel:0},
    //     {id:3,name:'泰州C化工厂',fr:'王菲',tel:'0519-6780123',last_update:'2018-06-08',status:1,is_handel:0},
    //     {id:4,name:'泰州D化工厂',fr:'王鑫',tel:'0519-3235899',last_update:'2018-06-05',status:1,is_handel:0},

    //     {id:5,name:'泰州E化工厂',fr:'陈海',tel:'0519-9001246',last_update:'2018-06-21',status:2,is_handel:0},
    //     {id:5,name:'泰州F化工厂',fr:'张茂',tel:'0519-8890312',last_update:'2018-06-22',status:2,is_handel:0},
    //     {id:5,name:'泰州G化工厂',fr:'李竹',tel:'0519-5677891',last_update:'2018-06-21',status:2,is_handel:0},
    // ];
 }

export function getFactoryChemicals(id, date, page) {
    //chemical_list
    return axios.get(apiConf.url + '/fphp/factory/chemical_list.php', {
        params: {
            id, date, page
        }
    });

    // return [
    //     {pm: '高猛酸钠-'+(Math.random()*100>>0), lb: '氧化性固体', ph: Math.random()*100>>0, cl: Math.random()*100>>0, cchj: '阴凉通风', ccfs: '仓储'},
    //     {pm: '金属镁-'+(Math.random()*100>>0), lb: '氧化性固体', ph: Math.random()*10>>0, cl: Math.random()*100>>0, cchj: '阴凉通风', ccfs: '仓储'},
    //     {pm: '金属钯粉-'+(Math.random()*100>>0), lb: '氧化性固体', ph: Math.random()*100>>0, cl: Math.random()*100>>0, cchj: '阴凉通风', ccfs: '仓储'},
    //     {pm: '艾德曼合金-'+(Math.random()*100>>0), lb: '氧化性固体', ph: Math.random()*10>>0, cl: Math.random()*100>>0, cchj: '阴凉通风', ccfs: '仓储'},
    // ];
}