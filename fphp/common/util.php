<?php

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