import axios from 'axios'

var winurl = 'http://localhost';

var macurl = 'http://localhost:8888';


/**
 * 获取所有工厂信息
 */
export function getAllFactoryInfos() {
    return axios.get(macurl + '/fphp/factory/factory_info.php', {params: {}});
}

export function getFactoryChemicals(fname, date, page) {
    //chemical_list
    return axios.get(macurl + '/fphp/factory/chemical_list.php', {
        params: {
            fname, date, page
        }
    });

    // return [
    //     {pm: '高猛酸钠-'+(Math.random()*100>>0), lb: '氧化性固体', ph: Math.random()*100>>0, cl: Math.random()*100>>0, cchj: '阴凉通风', ccfs: '仓储'},
    //     {pm: '金属镁-'+(Math.random()*100>>0), lb: '氧化性固体', ph: Math.random()*10>>0, cl: Math.random()*100>>0, cchj: '阴凉通风', ccfs: '仓储'},
    //     {pm: '金属钯粉-'+(Math.random()*100>>0), lb: '氧化性固体', ph: Math.random()*100>>0, cl: Math.random()*100>>0, cchj: '阴凉通风', ccfs: '仓储'},
    //     {pm: '艾德曼合金-'+(Math.random()*100>>0), lb: '氧化性固体', ph: Math.random()*10>>0, cl: Math.random()*100>>0, cchj: '阴凉通风', ccfs: '仓储'},
    // ];
}