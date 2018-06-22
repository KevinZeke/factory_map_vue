<?php
/**
 * User: zhuangjiayu
 * Date: 2018/6/23
 * Time: 上午7:41
 */

require_once '../common/header.php';
require_once '../lib/Sql.class.php';
require_once '../common/authcode.php';
require_once '../common/Resp.php';
require_once '../common/util.php';
require_once '../common/Session.class.php';


$username = array_strict_get($_POST, 'username');
$name = array_strict_get($_POST, 'name');
$fr = array_strict_get($_POST, 'fr');
$pwd = en_pwd(array_strict_get($_POST, 'pwd'));
$type = array_strict_get($_POST, 'type');
$addr = array_strict_get($_POST, 'addr');
$lng = array_strict_get($_POST, 'lng');
$lat = array_strict_get($_POST, 'lat');
$tel = array_strict_get($_POST, 'tel');
$fdesc = array_strict_get($_POST, 'fdesc');


$tool = get_fmdb_sqltool();

$insert_sql = "INSERT into 
                Factory_info(name, addr, lng, lat, tel, fdesc, fr, username, pwd, type) 
                values
                (?,?,?,?,?,?,?,?,?,?)";

$stmt = $tool->prepare($insert_sql);

$stmt->bind_param('sssssssssi', $name, $addr, $lng, $lat, $tel, $fdesc, $fr, $username, $pwd, $type);

$aff_row = $tool->prepare_execute($stmt);

if ($aff_row > 0) {
    echo RespUtil::success_json();
} else {
    echo RespUtil::error_json('数据添加失败');

}

