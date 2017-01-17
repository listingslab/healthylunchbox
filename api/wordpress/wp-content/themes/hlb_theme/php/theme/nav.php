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
          <a class="navbar-brand" href="/">HLB API</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">



            <li><a href="http://beta.healthylunchbox.com.au" target="_blank">Website Beta</a></li>
            <li><a href="/wp-admin/">CMS</a></li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Test API <span class="caret"></span></a>
              <ul class="dropdown-menu">

                <li><a href="?route=hello">hello</a></li>
                <li><a href="?route=tips">tips</a></li>
                <li><a href="?route=recipies">recipies</a></li>
                <li><a href="?route=recipe/497">recipe/497<br /><small>(Banana Bread)</small></a></li>

              </ul>
            </li>

            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Add New<span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="/wp-admin/post-new.php?post_type=recipe">Recipie</a></li>
                <li><a href="/wp-admin/post-new.php?post_type=tip">Tip</a></li>
                <li><a href="/wp-admin/edit.php?post_type=lunchbox_item">Lunchbox item</a></li>
              </ul>
            </li>

            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Categories<span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="/wp-admin/edit-tags.php?taxonomy=recipe_categories">Recipes</a></li>
                <li><a href="/wp-admin/edit-tags.php?taxonomy=tip">Tips</a></li>
                <li><a href="/wp-admin/edit-tags.php?taxonomy=lunchbox_items">Lunchbox Items</a></li>



              </ul>
            </li>


          </ul>
          <!--
          <form class="navbar-form navbar-right">
            <input type="text" class="form-control" placeholder="Search...">
          </form>-->
        </div>
      </div>
    </nav>
