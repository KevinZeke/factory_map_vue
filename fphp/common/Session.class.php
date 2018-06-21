<?php
/**
 * 功能：控制SESSION
 * User: zhuangjiayu
 * Date: 2017/9/9
 * Time: 22:50
 */

class SessionCtrl{
    /*是否打开session*/
    private static $is_start_session = false;
    /**
     * @param $expire=0 过期时间
     */
    public static function start_session($expire = -1){
        if(self::$is_start_session) return;
        if($expire != -1){
            session_set_cookie_params($expire);
        }
        session_start();
        self::$is_start_session = true;
    }
    /**
     * @param $name : session 键
     * @param $value : session 值
     */
    public static function set($name,$value){
        if(!self::$is_start_session) return;
        $_SESSION[$name] = $value;
    }

    /**
     * @param $name session键
     * @return null|void
     */
    public static function get($name){
        if(!self::$is_start_session) return;
        return self::has_session($name)?$_SESSION[$name]:null;
    }

    /**
     * @param $name session键
     * @return bool
     */
    public static function has_session($name){
        if(!self::$is_start_session) return;
        return isset($_SESSION[$name]);
    }
    /**
     * @param $name session键
     */
    public static function remoeve($name){
        if(!self::$is_start_session) return;
        if(self::has_session($name))
            unset($_SESSION[$name]);
    }
}