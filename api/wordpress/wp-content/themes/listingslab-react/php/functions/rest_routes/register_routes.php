<?php
  /**
   * Register routes for  /wp-json/hlb-api/
   */

  add_action( 'rest_api_init', 'hlbapi_register_routes' );
  function hlbapi_register_routes() {

    register_rest_route( 'hlbapi', '/hello', array(
      'methods'  => WP_REST_Server::READABLE,
      'callback' => 'hlbapi_hello',
    ));

    register_rest_route( 'hlbapi', '/app', array(
      'methods'  => WP_REST_Server::READABLE,
      'callback' => 'hlbapi_app',
    ));

    register_rest_route( 'hlbapi', '/item/(?P<slug>[a-zA-Z0-9-]+)', array(
      'methods'  => WP_REST_Server::READABLE,
      'callback' => 'hlbapi_item',
    ) );

  }
  include 'routes/app.php';
  include 'routes/hello.php';
  include 'routes/item.php';


  /*
  Geekiest joke ever - our http response code from successful API calls

  418 I'm a teapot (RFC 2324)

  The Hyper Text Coffee Pot Control Protocol (HTCPCP) is a facetious communications
  protocol for controlling, monitoring, and diagnosing coffee pots.

  This code was defined in 1998 as one of the traditional IETF April Fools' jokes,
  in RFC 2324, Hyper Text Coffee Pot Control Protocol, and is not expected to be
  implemented by actual HTTP servers. The RFC specifies this code should be returned
  by teapots requested to brew coffee. This HTTP status is used as an Easter
  egg in some websites, including Google.com.

*/
