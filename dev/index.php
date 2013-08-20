<?php
    $pathDepth = '';
    $pageTitle = 'Digital Agency';
    $pageId = '';
    include('includes/head.php');
?>

<body>
  <div class="wrapper">    
    <section id="intro">
      <h1 class="offscreen">Planet | Digital Agency | Web Development</h1>
    </section>
    
    <section id="main">
      <h2>A digital agency transforming great ideas into responsive web experiences.</h2>
      <a href="mailto:alex@planet.io" class="button">Contact us</a>
    </section>
    
    <section id="portfolio">
      <h2>Planet's web development &amp; web design work</h2>
      <div id="lyte" class="item">
        <div class="content">
          <h3>Smart Group Messaging</h3>
          <p>Lyte is a new way to communicate with groups. It automatically pulls important information to top of discussions.</p>
          <p>
            Create threads, or topics with groups and teams, while conducting real-time chat within threads.
          </p>
          <p>Lyte is a Turbolink-enabled Rails 4 responsive web application.</p>
          <a href="http://www.lyte.io" class="link" target="_blank">Visit Lyte</a>
        </div>
      </div>
      
      <div id="recognize" class="item">
        <div class="content">
          <h3>Social Employee Recognition</h3>
          <p>Recognize is a product that helps professionals officially endorse colleagues and coworker's skills and work.</p>
          <p>Recognize includes Yammer integration, Single Sign On with Google, and is a fully responsive web application.</p>
          <a href="http://www.recognizeapp.com" class="link" target="_blank">Visit Recognize</a>
        </div>
      </div>
      <div id="vote" class="item">
        <div class="content">
          <h3>Helping America Vote</h3>
          <p>For the 2012 election, we built a voting station finder for the Obama campaign. </p>
            <p>Localized to Español, fully responsive to tablet and mobile, remembers state, utilizes HTML5 geolocation, and was built in under a week.</p>
        </div>
      </div>
      
      <div id="annotorious" class="item">
        <div class="content">
          <h3>Touch-enabled HTML5 Annotation Tool</h3>
          <p>Latitude Network came to us to build out a responsive, tablet-ready annotation tool.</p>
          <p>We utilized the Annotarious library, and contributed back by pull requesting touch events.</p>
          <a href="https://github.com/planetio/annotorious" class="link" target="_blank">Visit the github source</a>
        </div>
      </div>
      
      <div id="clients" class="item">
        <div class="content">
          <h3>Startups to Fortune 500</h3>
          <p>Planet has helped Microsoft, Target, Seattle's Best, and many other companies with web development.</p>
        </div>
      </div>

    </section>
    
    
    
    <section id="provide">
      <h2>Planet provides the latest web development technologies &amp; strategies</h2>
      <img src="assets/images/portfolio/hacker.png" width="200" height="200" alt="Hacker">
      <ul>
        <li>Ruby on Rails 4 web application development.</li>
        <li>JavaScript, CSS, and HTML5.</li>
        <li>Lean-style experiments, including A/B tests.</li>
        <li>Responsive web design.</li>
        <li>Test-driven development.</li>
        <li>Agile project management.</li>
      </ul>
      <div class="clear"></div>
      <div style="text-align: center;">
        <a href="mailto:alex@planet.io" class="button" style="display:inline-block; margin: 20px 0;">We love to talk shop. Contact us for a free strategy meeting.</a>
      </div>
    </section>
    

  
    <?php include("includes/footer.php")?>
</body>
</html>
