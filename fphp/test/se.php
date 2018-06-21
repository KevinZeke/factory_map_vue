<?php
/**
 * Created by PhpStorm.
 * User: kevin
 * Date: 2018/6/20
 * Time: 下午3:14
 */

require_once '../common/header.php';
require_once '../lib/Sql.class.php';
require_once '../common/authcode.php';
require_once '../common/Resp.php';
require_once '../common/util.php';
require_once '../common/Session.php';



session_start();
echo 123;
echo '<br>';
$_SESSION['a']=123;
var_dump($_SESSION);