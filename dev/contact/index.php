<?php
  $name = $_POST['contact-name'];
  $email = $_POST['contact-email'];
  $subject = $_POST['contact-subject'];
  $body = $_POST['contact-body'];

  if(!$email == "" && (!strstr($email,"@") || !strstr($email,"."))) {
    echo "Please enter a valid e-mail";
  } else {
    if( empty($name) || empty($email) || empty($body) ) {
      echo "Please correctly fill in all fields";
    } else {

      $todayis = date("l, F j, Y, g:i a");

      $body = stripcslashes($body);

      $message = " $todayis [EST] \n
      From: $email \n
      Message: $body";

      mail("alex@alexgrande.com", "Homepage form // ".$subject, $message, $email);
  
      echo "Your email has been sent. Thanks for contacting me.";
    }
  }
?>