import axios from 'axios'

/**
 * 获取所有工厂信息
 * @return {Promise}
 */
export function getAllFactoryInfos() {
    return axios.get('http://localhost/che/factory_map/php/factory/factory_info.php', {params: {}});
}

export function getFactoryChemicals(fname) {
    return [
        {pm: '高猛酸钠-'+(Math.random()*100>>0), lb: '氧化性固体', ph: Math.random()*100>>0, cl: Math.random()*100>>0, cchj: '阴凉通风', ccfs: '仓储'},
        {pm: '金属镁-'+(Math.random()*100>>0), lb: '氧化性固体', ph: Math.random()*10>>0, cl: Math.random()*100>>0, cchj: '阴凉通风', ccfs: '仓储'},
        {pm: '金属钯粉-'+(Math.random()*100>>0), lb: '氧化性固体', ph: Math.random()*100>>0, cl: Math.random()*100>>0, cchj: '阴凉通风', ccfs: '仓储'},
        {pm: '艾德曼合金-'+(Math.random()*100>>0), lb: '氧化性固体', ph: Math.random()*10>>0, cl: Math.random()*100>>0, cchj: '阴凉通风', ccfs: '仓储'},
    ];
}