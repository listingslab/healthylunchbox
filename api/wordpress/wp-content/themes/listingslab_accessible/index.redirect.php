<?php
/**
 * Created by Chris Dorward on 15/01/2017
 * components/Tile/Tile
 */

  function redirectTo(){
    $reactUrl = 'http://beta.healthylunchbox.com.au/';
    $request = parse_url($_SERVER['REQUEST_URI']);
    $path = $request["path"];
    $result = trim(str_replace(basename($_SERVER['SCRIPT_NAME']), '', $path), '/');
    $result = explode('/', $result);
    $max_level = 2;
    while ($max_level < count($result)) {
     unset($result[0]);
    }
    $result = $reactUrl . '?route="' . '/'.implode('/', $result) . '"';
    $result = $result . '&ID=' . get_the_ID();
    return $result;
  }
  header( 'Location: ' . redirectTo() ) ;
  /*
  print '<pre>';
  print_r(redirectTo());
  print '</pre>';
  */
?>
