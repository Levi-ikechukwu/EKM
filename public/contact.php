<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Get the JSON string from the request body
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    // Sanitize and extract data
    $fullName = isset($data['fullName']) ? htmlspecialchars(strip_tags($data['fullName'])) : '';
    $companyName = isset($data['companyName']) ? htmlspecialchars(strip_tags($data['companyName'])) : '';
    $phoneNumber = isset($data['phoneNumber']) ? htmlspecialchars(strip_tags($data['phoneNumber'])) : '';
    $emailAddress = isset($data['emailAddress']) ? htmlspecialchars(strip_tags($data['emailAddress'])) : '';
    $message = isset($data['message']) ? htmlspecialchars(strip_tags($data['message'])) : '';

    // Set recipient and subject
    $to = "info@ekmengineeringservices.com";
    $subject = "New Consultation Request from $fullName";

    // Create the email template
    $emailContent = "
    <html>
    <head>
      <title>New Consultation Request</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; }
        .header { background-color: #f8fafc; padding: 15px; border-radius: 5px; margin-bottom: 20px; }
        .details { margin-bottom: 20px; }
        .details p { margin: 5px 0; }
        .message-box { background: #f4f4f4; padding: 15px; border-left: 4px solid #1a3b5c; border-radius: 4px; }
      </style>
    </head>
    <body>
      <div class='header'>
        <h2 style='color: #1a3b5c; margin: 0;'>New Project Consultation Request</h2>
      </div>
      
      <div class='details'>
        <p><strong>Name:</strong> $fullName</p>
        <p><strong>Company:</strong> " . ($companyName ? $companyName : 'N/A') . "</p>
        <p><strong>Phone:</strong> <a href='tel:$phoneNumber' style='color: #bf714a;'>$phoneNumber</a></p>
        <p><strong>Email:</strong> <a href='mailto:$emailAddress' style='color: #bf714a;'>$emailAddress</a></p>
      </div>

      <h3 style='color: #1a3b5c; border-bottom: 1px solid #eee; padding-bottom: 5px;'>Message:</h3>
      <div class='message-box'>
        <p style='white-space: pre-wrap; margin: 0;'>$message</p>
      </div>
      
      <p style='font-size: 12px; color: #999; margin-top: 30px; text-align: center;'>
        This email was sent automatically from the EKM Engineering Services website.
      </p>
    </body>
    </html>
    ";

    // Set email headers for HTML content
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    
    // Crucial headers so it appears from the website but replies go to the user
    $headers .= "From: EKM Website <info@ekmengineeringservices.com>\r\n";
    $headers .= "Reply-To: $emailAddress\r\n";

    // Send the email
    if (mail($to, $subject, $emailContent, $headers)) {
        http_response_code(200);
        echo json_encode(["status" => "success", "message" => "Message sent successfully"]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Mail server failed to send message"]);
    }
} else {
    // If not a POST request, block it
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method not allowed"]);
}
?>
