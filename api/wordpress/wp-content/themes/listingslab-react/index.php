<?php
  include 'php/config.php';
?>
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Healthy Lunch Box CMS</title>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="<?php print $templatePath;?>/style.css" >
    <link href="https://fonts.googleapis.com/css?family=Baloo" rel="stylesheet">

  </head>
  <body>
			<div class="container">

        <div class="row well">
          <a href="http://beta.healthylunchbox.com.au/" class="pull-left logo">
            <img src="<?php print $imagePath;?>/HLB_logo.png" alt="Healthy Lunch Box" />
          </a>
  				<h1 class="pull-left">Healthy Lunch Box CMS</h1>
        </div>

        <div class="row">
          <div class="col-md-4 well">
            <h2>Admin Links</h2>
    				<ul>
    					<li><a href="/wp-admin/">WordPress</a></li>
    				  <li><a href="http://beta.healthylunchbox.com.au/">Beta App</a></li>
    				</ul>
          </div>


        <div class="col-md-4">
          <h2>API Endpoints</h2>
          <ul>
  				  <li><a href="http://api.healthylunchbox.com.au/wp-json/hlbapi/hello">Check API</a></li>
  				  <li><a href="http://api.healthylunchbox.com.au/wp-json/hlbapi/app">/app</a></li>
  				  <li><a href="http://api.healthylunchbox.com.au/wp-json/hlbapi/item/beef-kofta/">/item/beef-kofta</a></li>
  				</ul>
        </div>

        </div>

      </div>

  </body>
</html>
