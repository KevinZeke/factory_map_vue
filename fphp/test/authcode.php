<?php
/**
 * Created by PhpStorm.
 * User: kevin
 * Date: 2018/6/20
 * Time: 上午11:14
 */

require_once '../common/authcode.php';

$str = '12345678';
$key = 'novotone';
$authcode =  authcode($str,'ENCODE',$key,0); //加密
echo $authcode;
echo '<br>';
echo authcode($authcode,'DECODE',$key,0); //解密
