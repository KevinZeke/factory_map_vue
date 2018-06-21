<?php
require_once '../lib/Sql.class.php';

/**
 * @param array $array
 * @param string $key
 * @return mixed|null
 */
function array_get($array, $key)
{
    if(array_key_exists($key,$array)){
        return $array[$key];
    }else{
        return null;
    }
}

/**
 * @return Sql_tool
 */
function get_fmdb_sqltool(){
    $mysqli = new mysqli('localhost', 'root', '123456', 'fm_db');

    $tool = Sql_tool::build_by_mysqli($mysqli);

    return $tool;
}