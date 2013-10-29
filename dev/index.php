<?php
    $pathDepth = '';
    $pageTitle = 'Web Development';
    $pageId = '';
    include('includes/head.php');
?>

<body>
  <div id="wrapper">    
    <div id="header" class="clearfix">
      <div class="side-wrapper-a">
        <h1 class="logo">Planet</h1>
        <p class="tagline">Web development</p>
      </div>
      <div class="side-wrapper-b">
        <a href="mailto:alex@planet.io" class="btn">Contact us</a>
      </div>
    </div><!-- End of header -->


    <div class="masthead">
      <div class="content">
        <h2>Delivering Vision</h2>
        <p class="subline">Modern Web Applications for Businesses.</p>
      </div>
    </div>

    <div id="work" class="section">
      <h3>Our Work</h3>
      <ul id="logo-quilt" class='clearfix'>
        <li>
          <a href="http://www.iotlist.co" target="_blank">
            <img src="/assets/images/work/iotlist.jpg" alt="IOTLIST">
            <p>Internet of Things News</p>
          </a>
        </li>
        <li>
          <a href="http://www.hackforbigchoices.com" target="_blank">
            <img src="/assets/images/work/hfbc.jpg"  alt="Hack For Big Choices">
            <p>Nonprofit Hackathon</p>
          </a>
        </li>
        <li>
          <a href="/assets/images/portfolio/vote.jpg" target="_blank">
            <img src="/assets/images/work/obama.jpg"  alt="Obama 2012 Campaign">
            <p>Obama Early Voting Station Finder</p>
          </a>
        </li>
        <li>
          <img src="/assets/images/work/seattlesbest.jpg"  alt="Seattle's Best Coffee">
          <p>Seattle's Best Coffee Rebrand Launch</p>
        </li>
        <li>
          <a href="http://latitu.de" target="_blank">
            <img src="/assets/images/work/latitude.jpg"  alt="Latitude">
            <p>Designer &amp; Client Collaboration</p>
          </a>
        </li>
      </ul>
    </div>

    <div id="who" class="section">
      <h3>Who We Are</h3>
      <div class="person-wrapper clearfix">
        <div class="person clearfix">
          <img src="/assets/images/who/peter.jpg" alt="Peter Philips">
          <div class="content">
            <h4>Peter Philips<br>Software engineer &amp; sysadmin</h4>
            <p>A veteran in software engineering with an intense focus in Ruby on Rails, test-driven development, and mindfulness.</p>
            <p>Peter’s code is changing the world for the better. He is the founder TechForProgress.com, a site highlighting technology's role in a humanitarian context.</p>
            <a href="/peter-philips/" target="_blank" class="btn">Peter's Resume</a>
          </div>
        </div>

        <div class="person clearfix">
          <img src="/assets/images/who/alex.jpg" alt="Alex Grande">
          <div class="content">
            <h4>Alex Grande<br>Frontend  developer &amp; UX designer</h4>
            <p>History creating web products for Target, Nintendo, and EA. Alex spent years working in mobile web at a consumer and enterprise levels.</p>
            <p>Alex focuses at minimalist design that scales for large companies.</p>
            <a href="/alex-grande/" target="_blank" class="btn ">Alex's Resume</a>
          </div>
        </div>
      </div>

    </div>

    <div id="how" class="section">
      <h3>How We Build Applications</h3>
      <ul id="how-steps">
        <li>
          <img src="/assets/images/how/rails.jpg" alt="Ruby on Rails">
          <div class="content">
            <h4>Rapid backend with Ruby on Rails</h4>
            <p>We use Ruby on Rails to quickly build the backend layer for web applications.</p>
          </div>
        </li>
        <li>
          <img src="/assets/images/how/html5.jpg" alt="HTML5">
          <div class="content">
            <h4>Modern frontend development</h4>
            <p>HTML5 technologies helps us create web applications with modern interation and with mobile support.</p>
          </div>
        </li>
        <li>
          <img src="/assets/images/how/people.jpg" alt="User-driven design">
          <div class="content">
            <h4>Clean minimal design</h4>
            <p>Dedicated to user-driven design results in easy to use designs that are easy on the eye.</p>
          </div>
        </li>
      </ul>
    </div>

    <div id="products-projects" class="section clearfix">
      <div id="products" class="pro">
        <h3>Our Products</h3>
        <ul>
          <li class="clearfix">
            <img src="/assets/images/pro/recognize.png" alt="Recognize">
            <div class="content">
              <a href="http://www.recognizeapp.com" target="_blank"><h4>Recognizeapp.com</h4></a>
              <p>An employee appreciation system for businesses to socially praise their best.</p>
            </div>
          </li>
          <li class="clearfix">
            <img src="/assets/images/pro/lyte.png" alt="lyte">
            <div class="content">
              <a href="http://lyte.io" target="_blank"><h4>Lyte.io</h4></a>
              <p>A project communcation app we use to organize projects with our clients.</p>
            </div>
          </li>
        </ul>
      </div>

      <div id="projects" class="pro">
        <h3>Open Source Projects</h3>
        <ul>
          <li class="clearfix">
            <img src="/assets/images/pro/annotorious.png" alt="annotorious">
            <div class="content">
              <a href="http://annotorious.github.io/" target="_blank"><h4>Annotorious</h4></a>
              <p>An annotation tool for images. We provided the touch support.</p>
            </div>
          </li>
          <li class="clearfix">
            <img src="/assets/images/pro/modernizr.png" alt="modernizr">
            <div class="content">
              <a href="http://modernizr.com/" target="_blank"><h4>Modernizr</h4></a>
              <p>An JavaScript library to test browser capabilities.</p>
            </div>
          </li>
           <li class="clearfix">
            <img src="/assets/images/pro/capistrano.png" alt="capistrano">
            <div class="content">
              <a href="http://www.capistranorb.com/" target="_blank"><h4>Capistrano</h4></a>
              <p>A Ruby library to help with application deployments.</p>
            </div>
          </li>         
        </ul>
      </div>

    </div><!-- End of products and projects -->

    <div id="location" class="section">
      <div class="content">
        <h3>Visit Us At Runway Incuabator, San Francisco</h3>
        <p class="subline">1355 Market St. #488, 94103, CA</p>
      </div>
    </div>

    <div id="contact-wrapper" class="section">
      <h3>What Is Your Vision? Let's Build It.</h3>
      <a href="mailto:alex@planet.io" class="btn btn-lg">Contact Us</a>
    </div>

  </div><!-- End of wrapper -->
  

  <?php include("includes/footer.php")?>
</body>
</html>
