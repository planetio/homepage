<?php
    $pathDepth = '';
    $user = array("name" => "Peter Philips", "phone" => "347.622.9007", "email" => "peter@planet.io");
    $pageTitle = 'Peter Philips\'s Resume';
    $pageId = '';
    include('../includes/head.php');
?>

<body class="sub-page">
  <?php  include('../includes/header.php'); ?>  
  
  <section class="wrapper">
    
    <section id="main-content" class="content-buckets">
      <ul>
        <?php 
          $skills = array(
            'ruby' => 'Ruby',
            'ror' => 'Rails',
            'systems' => 'Systems architect',
            'rspec' => 'Rspec',
            'mysql' => 'MySQL',
            'aws' => 'AWS',
            'git' => 'Git',
            'oauth' => 'OAuth',
            'agile' => 'Agile',
            'servers' => 'Linux servers',
            'nginx' => 'Nginx',
            'js' => 'Javascript',
            'ecommerce' => 'E-commerce',
            'opensource' => 'Open source',
            'php' => 'Php',
            'wordpress' => 'Wordpress',
            'apache' => 'Apache',
            'jquery' => 'jQuery',
            'postgresql' => 'Postgresql',
            'tcp' => 'Full stack network management',
            'bzr' => 'Bazaar',
            'ci' => 'Continuous integration',
            'devops' => 'DevOps',
            'cc' => 'Credit card processing'
            );
        ?>

        <?php 
        foreach($skills as $key => $value) {
          echo "<li id='$key'>".$value."</li>";
        }
        ?>

      </ul>
 
    </section>
    
    <aside id="side-content" class="content-buckets">
      <div class="job ruby ror rspec mysql aws git oauth systems agile servers js opensource apache jquery devops">
        <h3>Co-Founder, CTO, Planet (planet.io) 8/2012 - present</h3>
        <ul> 
          <li>Conceptualized, launched and scaled social web apps: <a href="http://recognizeapp.com" target="_blank">Recognize</a>.</li>
          <li>Designed and developed scalable application architecture using test driven development.</li>
          <li>Automated a deployment architecture across aws infrastructure using capistrano</li>
          <li>Scaled out server architectures using Amazon web services, linode, and heroku.</li>
          <li>Perform multi-variant testing and detailed analytics using latest analytics tools(segment, heap, google, mixpanel).</li>
          <li>Contributing to the open source movement weekly: <a href="http://github.com/synth">Github</a>.</li>
        </ul>
      </div>

      <div class="job ruby ror rspec mysql aws git oauth systems agile servers js opensource apache jquery bzr ci devops cc" >
        <h3>Lead Engineer, Latitu.de 4/2011 - 5/2013 </h3>
        <ul>    
          <li>Upgraded a broken legacy app to latest version of Rails with full test coverage.</li>
          <li>Built a workflow engine that automatically manages the design process between a designer and client.</li>
          <li>Designed and implemented a realtime collaborative annotation tool.</li>
          <li>Managed an international development team.</li>
        </ul>
      </div>

      <div class="job mysql systems servers opensource php wordpress apache devops tcp" >
        <h3>IT Director, NWBCCC 2009 - 2011 </h3>
        <ul>    
          <li>Maintained a WAN infrastructure which includes a 50 station main office and 3 smaller offices connected via IPSEC VPN.</li>
          <li>Maintained the coalition’s website and linux and windows based intranet servers.</li>
          <li>Responsible for all research, purchase, and execution of all technology equipment and contracts utilized by the coalition.</li>
          <li>Managed the transition from a proprietary organizational database to the open source database, CiviCrm.</li>
          <li>Managed a complete network infrastructure overhaul by managing 4 separate contractors. The overhaul included a bandwidth upgrade and the transition from a linux based server architecture to a Windows Active Directory based architecture</li>
          <li>Assisted with social media campaigns through flickr, twitter, and facebook</li>
          <li>Acted as primary photographer, videographer, and video editor. Also, delegated coverage and editing responsibilities to 5 full time staff community organizers and a multitude of volunteers</li>

        </ul>
      </div>

      <div class="job ruby ror rspec mysql aws ecommerce jquery cc" >
        <h3>Lead Engineer,  Trunkt(now Etsy Wholesale) 2009 - 2010 </h3>
        <ul>    
            <li>Developed core infrastructure for an e-commerce application using Ruby on Rails.</li>
            <li>Utilized facebook api's for social integration and authorize.net's api for payment processing</li>
            <li>Scaled application horizontally using AWS's EC2 and S3</li>
        </ul>
      </div>

      <div class="job ruby ror rspec mysql postgresql ci devops cc jquery js nginx apache agile ecommerce systems" >
        <h3>Lead Engineer, Lifebooker LLC 2006 - 2008 </h3>
        <ul>    
          <li>Managed a team of 4 developers (front & Back end) to design and develop a highly transactional and concurrent online reservation system using all aspects of the Ruby-onRails framework including AJAX technologies with a MySQL backend database</li>
          <li>Developed custom-built dynamic calendaring system to manage reservations utilizing AJAX technology with backend rule engine using the Rools gem to manage booking conflicts</li>
          <li>Developed primary search algorithm using asynchronous daemon processes in combination with MemCache and HTML, CSS, Javascript and image caching to provide fast, efficient search results</li>
           <li>Implemented a continuous integration setup utilizing CruiseControl in order to consistently drive our test suites daily after changes to Subversion source repositories</li>
        </ul>
      </div>


      <h2>Education</h2>
      <h3>BS Computer Science, BS Biology - City Univeristy of New York</h3>
      <ul style="padding-bottom: 10px;">
        <li>Magna Cum Laude</li>           
        <li><strong>Published author in nanotechnology(cell membrane simulations)</strong></li>
      </ul>

    </aside>
    
  </section>
  
  <script type="text/javascript" charset="utf-8" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.js"></script>
  <script src="/assets/javascripts/resume.js" type="text/javascript" charset="utf-8"></script>

</body>
</html>
