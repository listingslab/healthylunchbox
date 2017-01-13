<?php include 'php/config.php'; ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Healthy Lunch Box CMS</title>
    <link rel="icon" href="<?php print $templatePath; ?>/favicon.ico" />
<?php //include 'php/icons.php'; ?>
<?php //include 'php/IE9.php'; ?>
    <link href="<?php print get_template_directory_uri() . '/libs/bootstrap/dist/css/bootstrap.min.css'; ?>" rel="stylesheet">
    <link href="<?php print get_template_directory_uri() . '/css/dashboard.css'; ?>" rel="stylesheet">
    <link href="<?php print get_template_directory_uri() . '/style.css'; ?>" rel="stylesheet">
  </head>

  <body>

<?php include 'php/nav.php'; ?>


<div class="container-fluid">
  <div class="row">
<?php include 'php/sidebar.php'; ?>
<?php include 'php/main.php'; ?>
  </div>
</div>

    <script src="<?php print get_template_directory_uri() . '/libs/jquery/dist/jquery.min.js'; ?>"></script>
    <script src="<?php print get_template_directory_uri() . '/libs/bootstrap/dist/js/bootstrap.min.js'; ?>"></script>
  </body>
</html>
