<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Set the recipient email address
    $to = 'sumanthkotha2001@gmail.com'; // Replace with your email

    // Set the email subject
    $subject = 'New Contact Form Submission';

    // Construct the email message
    $email_message = "Name: $name\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Message:\n$message\n";

    // Send the email
    if (mail($to, $subject, $email_message)) {
        echo "Message sent successfully!";
    } else {
        echo "There was an error sending the message.";
    }
} else {
    echo "Invalid request method.";
}
?>