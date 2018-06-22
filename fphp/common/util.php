<?php
require_once '../lib/Sql.class.php';
require_once 'Resp.php';

/**
 * @param array $array
 * @param string $key
 * @return mixed|null
 */
function array_get($array, $key)
{
    if (array_key_exists($key, $array)) {
        return $array[$key];
    } else {
        return null;
    }
}

/**
 * @param array $array
 * @param string $key
 * @return mixed|null
 */
function array_strict_get($array, $key)
{
    if (array_key_exists($key, $array)) {
        return $array[$key];
    } else {
        echo RespUtil::error_json('参数缺失');
        exit();
    }
}

/**
 * @return Sql_tool
 */
function get_fmdb_sqltool()
{
    $mysqli = new mysqli('localhost', 'root', '123456', 'fm_db');

    $tool = Sql_tool::build_by_mysqli($mysqli);

    return $tool;
}