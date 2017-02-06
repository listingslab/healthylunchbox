<?php

  $to = 'listingslab@me.com';
  $from_address = 'listingslab@gmail.com';
  $from_name = 'Healthy Lunch Box';
  $subject = $from_name;

  $headers = "From: " . $from_name . "\r\n";
  $headers .= "Reply-To: ". $from_address . "\r\n";
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

  $message = '<html><body>';
  $message .= '<h1>Hello,</h1>';
  $message .= '<a href="http://www.healthylunchbox.com.au">';
  $message .= '<img src="http://api.healthylunchbox.com.au/wp-content/themes/listingslab-react/img/HLB_logo.png" alt="'.$from_name.'" />';
  $message .= '</a>';
  $message .= '</body></html>';

  mail($to, $subject, $message, $headers);

  print_r('Email sent to '. $to);

?>
