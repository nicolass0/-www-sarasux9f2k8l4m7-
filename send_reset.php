<?php
if(isset($_POST['email'])){
    $email = $_POST['email'];

    // Qui controlli se l'email è nel DB
    // $user = SELECT * FROM utenti WHERE email = $email;

    // Generi un token casuale
    $token = bin2hex(random_bytes(16));

    // Salvi il token nel DB associato all'utente con scadenza
    // UPDATE utenti SET reset_token = $token, reset_expire = NOW() + INTERVAL 1 HOUR WHERE email = $email;

    // Crei il link di reset
    $link = "https://www.sarasux.com/reset_password.php?token=".$token;

    // Invio email (usando mail() o servizi come SendGrid, Mailgun)
    $subject = "Recupero password";
    $message = "Clicca qui per reimpostare la password: ".$link;
    $headers = "From: info@sarasux.com\r\n";

    mail($email, $subject, $message, $headers);

    echo "Se l'email è registrata, ti abbiamo inviato un link per reimpostare la password.";
}
?>
