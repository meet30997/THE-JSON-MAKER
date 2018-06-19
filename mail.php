<?php
$email = $_POST['email'];
$text= $_POST['text'];

//Set Refresh header using PHP.
$formcontent=" From: $email \n Message: $text";
$recipient = "byteskooky@gmail.com";
$subject = "Feedback Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
header( "refresh:1;url=http://backendme.com/jsonmaker" );

echo "<h1> Thank You</h2>";

?>
