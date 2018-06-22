<?php
/**
 * Created by PhpStorm.
 * User: kevin
 * Date: 2018/6/20
 * Time: 上午11:34
 */

require_once '../common/header.php';
require_once '../lib/Sql.class.php';
require_once '../common/authcode.php';
require_once '../common/Resp.php';
require_once '../common/util.php';
require_once '../common/Session.class.php';


$fname = array_strict_get($_POST, 'username');

$pwd = array_strict_get($_POST, 'pwd');

$tool = get_fmdb_sqltool();

$identity_info_sql = "select pwd,type,name,id,username from Factory_info WHERE username =  ? LIMIT 1 ";

$stmt = $tool->prepare($identity_info_sql);

$stmt->bind_param('s', $fname);

$identity_info = $tool->prepare_execute_res($stmt)->to_array_list();

if (count($identity_info) == 0) {
    echo RespUtil::error_json("用户名：$fname 不存在");
    exit();
}


if (de_pwd($identity_info[0]['pwd']) == $pwd) {

    SessionCtrl::start_session();

    SessionCtrl::set('login_flag', $identity_info[0]);

    echo RespUtil::success_json('', $identity_info[0]);
} else {
    echo RespUtil::error_json('用户名与密码不一致');
}


