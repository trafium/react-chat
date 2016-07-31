<?php
class DB {
   private static $instance;
   private $MySQLi;

   private function __construct(array $dbOptions) {
      $this->MySQLi = @ new mysqli($dbOptions['db_host'],
                                 $dbOptions['db_host'],
                                 $dbOptions['db_host'],
                                 $dbOptions['db_host']);
      if (mysqli_connect_errno()) {
         throw new Exception('Ошибка базы данных.');
      }

      $this->MySQLi->set_charset("utf8");
   }

   public static function init(array $dbOptions) {
      if (self::$instance instanceof self) {
         return false;
      } else {
         self::$instance = new self($dbOptions);
      }
   }

   public static function query($q) {
      return self::$instance->MySQLi->query($q);
   }

   public static function esc($str) {
      return self::$instance->MySQLi->real_escape_string(htmlspecialchars($str));
   }
}

?>