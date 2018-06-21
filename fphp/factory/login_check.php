<?php
/**
 * Created by PhpStorm.
 * User: kevin
 * Date: 2018/6/20
 * Time: 下午3:38
 */

require_once '../common/header.php';
require_once '../common/Session.class.php';
require_once '../common/Resp.php';

main();
function main()
{
    /*对是否存在session进行判断*/
    $session_key = "login_flag";
    SessionCtrl::start_session();
    if (SessionCtrl::has_session($session_key)) {
        $data = SessionCtrl::get($session_key);
        echo RespUtil::success_json('', $data);
    } else {
        echo RespUtil::error_json('未登录');
    }

}