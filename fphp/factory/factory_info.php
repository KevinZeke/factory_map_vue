<?php
/**
 * Created by zhuangjiayu.
 * Date: 2018/5/31
 * Time: 15:14
 */
require_once '../common/header.php';
require_once '../lib/Sql.class.php';
require_once '../common/Resp.php';
require_once '../common/util.php';

$id = array_get($_GET, 'id');


$tool = get_fmdb_sqltool();

if (!$id) {
    $data = $tool->execute_dql_res(
        'SELECT name,id,fdesc,fr,lng,lat,tel,addr FROM Factory_info'
    )->to_array_list();
} else {

    $info_sql = "SELECT * FROM Factory_info where id =  ? LIMIT 1 ";

    $stmt = $tool->prepare($info_sql);

    $stmt->bind_param('i', $id);

    $data = $tool->prepare_execute_res($stmt)->to_array_list();
}

if (count($data) == 0) {
    echo RespUtil::error_json("无数据");
    exit();
} else {
    echo RespUtil::success_json('', $data);
}


//echo '[{"id":123,"name":"Aaaa厂","lng":"119.822306","lat":"32.441213","count":"52"},{"name":"B厂","lng":"119.832306","lat":"32.431213","count":"52"},{"name":"Cad厂","lng":"120.077569","lat":"32.524058","count":"52"},{"name":"D厂","lng":"119.927516","lat":"32.327053","count":"52"},{"name":"E厂","lng":"119.834379","lat":"32.333887","count":"52"},{"name":"F厂","lng":"119.834379","lat":"32.343887","count":"52"},{"name":"G厂","lng":"119.824379","lat":"32.343887","count":"52"},{"name":"H厂","lng":"120.032725","lat":"32.35097","count":"52"},{"name":"I厂","lng":"120.042725","lat":"32.34097","count":"52"},{"name":"J厂","lng":"120.032725","lat":"32.35097","count":"52"},{"name":"k厂","lng":"120.033725","lat":"32.34097","count":"52"},{"name":"L厂","lng":"120.034725","lat":"32.36097","count":"52"},{"name":"M厂","lng":"119.937002","lat":"32.424878","count":"52"},{"name":"M2厂","lng":"119.947002","lat":"32.423878","count":"52"},{"name":"N厂","lng":"119.971497","lat":"32.43975","count":"52"},{"name":"O厂","lng":"119.999955","lat":"32.525519","count":"52"},{"name":"P厂","lng":"119.989955","lat":"32.524519","count":"52"},{"name":"Q厂","lng":"119.988955","lat":"32.534519","count":"52"},{"name":"R厂","lng":"119.989955","lat":"32.525519","count":"52"}]';