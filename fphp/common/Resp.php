<?php
/**
 * Created by PhpStorm.
 * User: kevin
 * Date: 2018/6/20
 * Time: 下午12:09
 */

class Resp
{

    public $code;

    public $data;

    public $msg;

    /**
     * Resp constructor.
     * @param $code
     * @param $msg
     * @param null $data
     */
    public function __construct($code, $msg = '', $data = null)
    {
        $this->code = $code;
        $this->msg = $msg;
        $this->data = $data;
    }
}


class RespUtil
{
    public static $code_success = 1;

    public static $code_error = 0;

    public static function success($msg = '', $data = null)
    {
        return new Resp(RespUtil::$code_success, $msg, $data);
    }

    public static function error($msg = '', $data = null)
    {
        return new Resp(RespUtil::$code_error, $msg, $data);
    }

    public static function success_json($msg = '', $data = null)
    {
        return json_encode(new Resp(RespUtil::$code_success, $msg, $data));
    }

    public static function error_json($msg = '', $data = null)
    {
        return json_encode(new Resp(RespUtil::$code_error, $msg, $data));
    }
}