<?php
  $imagePath = get_template_directory_uri() . '/img';

  // If this is a content item, redirect it to the JSON output
  //print_r ('<pre>');
  if (is_home() != 1){
    if (get_the_ID()){
      wp_redirect (home_url() . '/wp-json/wp/v2/' . get_post_type() . 's/' . get_the_ID());
    }
  }
  //print_r ('</pre>');
?>

<!DOCTYPE html>
<html class="no-js" lang="">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>Healthy Lunch Box</title>

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="apple-touch-icon-precomposed" sizes="57x57" href="<?php print $imagePath; ?>/icons/apple-touch-icon-57x57.png" />
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="<?php print $imagePath; ?>/icons/apple-touch-icon-114x114.png" />
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="<?php print $imagePath; ?>/icons/apple-touch-icon-72x72.png" />
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="<?php print $imagePath; ?>/icons/apple-touch-icon-144x144.png" />
    <link rel="apple-touch-icon-precomposed" sizes="60x60" href="<?php print $imagePath; ?>/icons/apple-touch-icon-60x60.png" />
    <link rel="apple-touch-icon-precomposed" sizes="120x120" href="<?php print $imagePath; ?>/icons/apple-touch-icon-120x120.png" />
    <link rel="apple-touch-icon-precomposed" sizes="76x76" href="<?php print $imagePath; ?>/icons/apple-touch-icon-76x76.png" />
    <link rel="apple-touch-icon-precomposed" sizes="152x152" href="<?php print $imagePath; ?>/icons/apple-touch-icon-152x152.png" />
    <link rel="icon" href="/favicon.ico" />
    <link rel="icon" type="image/png" href="<?php print $imagePath; ?>/icons/favicon-196x196.png" sizes="196x196" />
    <link rel="icon" type="image/png" href="<?php print $imagePath; ?>/icons/favicon-96x96.png" sizes="96x96" />
    <link rel="icon" type="image/png" href="<?php print $imagePath; ?>/icons/favicon-32x32.png" sizes="32x32" />
    <link rel="icon" type="image/png" href="<?php print $imagePath; ?>/icons/favicon-16x16.png" sizes="16x16" />
    <link rel="icon" type="image/png" href="<?php print $imagePath; ?>/icons/favicon-128.png" sizes="128x128" />
    <meta name="application-name" content="Healthy Lunch Box"/>
    <meta name="msapplication-TileColor" content="#FFFFFF" />
    <meta name="msapplication-TileImage" content="<?php print $imagePath; ?>/icons/mstile-144x144.png" />
    <meta name="msapplication-square70x70logo" content="<?php print $imagePath; ?>/icons/mstile-70x70.png" />
    <meta name="msapplication-square150x150logo" content="<?php print $imagePath; ?>/icons/mstile-150x150.png" />
    <meta name="msapplication-wide310x150logo" content="<?php print $imagePath; ?>/icons/mstile-310x150.png" />
    <meta name="msapplication-square310x310logo" content="<?php print $imagePath; ?>/icons/mstile-310x310.png" />

    <!--[if lt IE 9]>
        <script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
        <script>window.html5 || document.write('<script src="js/html5shiv.js"><\/script>')</script>
    <![endif]-->

    <link href="<?php echo get_template_directory_uri() . '/style.css'; ?>" rel="stylesheet">

  </head>

  <body>
    <!--[if lt IE 8]>
        <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->

    <div class="flex-container">
        <div class="row">
            <span class="flex-item">
                <a href="/wp-admin/">
                    <img src="<?php echo $imagePath . '/logo.png'; ?>" />
                </a>
                <p>
    	            <a href="/wp-json/wp/v2/">API</a>
                </p>
                
            </span>
        </div>

    </div>

  </body>
</html>
