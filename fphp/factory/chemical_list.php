<?php
/**
 * Created by zhuangjiayu.
 * Date: 2018/6/4
 * Time: 18:14
 */
require_once '../common/header.php';
require_once '../common/util.php';

$fname = array_get($_GET, 'fname');
$page = array_get($_GET, 'page');
$date = array_get($_GET, 'date');

echo '{"totalList":80,"list":[{"pm":"' . $fname . '高猛酸钠-' . mt_rand(10, 100) . '","lb":"氧化性固体","ph":' . mt_rand(10, 100) . ',"cl":' . mt_rand(1000, 9999) . ',"cchj":"阴凉通风","ccfs":"仓储"},{"pm":"金属镁-' . mt_rand(10, 100) . '","lb":"氧化性固体","ph":' . mt_rand(10, 100) . ',"cl":21,"cchj":"阴凉通风","ccfs":"仓储"},{"pm":"过氧化钠-' . mt_rand(10, 100) . '","lb":"氧化性固体","ph":' . mt_rand(10, 100) . ',"cl":' . mt_rand(1000, 9999) . ',"cchj":"阴凉通风","ccfs":"仓储"},{"pm":"硝酸铅-' . mt_rand(10, 100) . '","lb":"氧化性固体","ph":' . mt_rand(10, 100) . ',"cl":18,"cchj":"阴凉通风","ccfs":"仓储"}]}';