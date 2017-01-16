    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="/"> <img width="25" height="25" src="<?php print $imagePath; ?>/logo.png" /></a>
          <a class="navbar-brand" href="/">Healthy Lunch Box API</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">


            <li><a href="/wp-admin/">WordPress CMS</a></li>

            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Add Content <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="/wp-admin/post-new.php?post_type=recipe">Recipie</a></li>
                <li><a href="/wp-admin/edit-tags.php?taxonomy=category">Category</a></li>
              </ul>
            </li>

            <li><a href="http://localhost:8080/">Frontend</a></li>

          </ul>
          <!--
          <form class="navbar-form navbar-right">
            <input type="text" class="form-control" placeholder="Search...">
          </form>-->
        </div>
      </div>
    </nav>
