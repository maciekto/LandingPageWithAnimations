<?php 
// get data from JS
    $json = file_get_contents('php://input');
// decode data
    $data = json_decode($json, true);
    $email = $data["emailSend"];
    $ms = $data["msSend"];
    
    $email_from = 'art@maciekto.eu';

    $email_subject = 'NASTEPNY KONTAKT:';

    $email_body = "Email: $email. \n"."Message: $ms.\n ";

    $to = "mt.maciejtomaszewski@gmail.com";

    $headers = "From: $email_from \r\n";

    $headers .= "Reply-to: $email \r\n";
    if(mail($to,$email_subject,$email_body, $headers)){
        echo "TRUE";
    }
    

?>