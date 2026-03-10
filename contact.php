<?php
/**
 * Contact Form Handler
 * Processes form submissions and sends an email to info@hartmanndigital.net
 */

header('Content-Type: application/json');

// Configuration
$to_email = "info@hartmanndigital.net";
$subject = "New Inquiry from Hartmann Digital Website";
$recaptcha_secret = "YOUR_RECAPTCHA_SECRET_KEY"; // Replace with your actual reCAPTCHA v3 Secret Key

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
    exit;
}

// Get the raw POST data
$raw_data = file_get_contents('php://input');
$data = json_decode($raw_data, true);

if (!$data) {
    // Fallback to $_POST if not JSON
    $data = $_POST;
}

// Extract fields
$email = filter_var($data['email'] ?? '', FILTER_SANITIZE_EMAIL);
$website = htmlspecialchars($data['website'] ?? '');
$budget = htmlspecialchars($data['budget'] ?? '');
$goals = htmlspecialchars($data['goals'] ?? '');
$services = $data['services'] ?? [];
$recaptcha_token = $data['recaptchaToken'] ?? '';

if (is_array($services)) {
    $services = implode(', ', array_map('htmlspecialchars', $services));
}
else {
    $services = htmlspecialchars($services);
}

// Basic validation
if (empty($email) || empty($budget) || empty($goals)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please fill in all required fields.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email format.']);
    exit;
}

// Verify reCAPTCHA (if token is provided and secret is configured)
if (!empty($recaptcha_token) && $recaptcha_secret !== 'YOUR_RECAPTCHA_SECRET_KEY') {
    $verify_url = 'https://www.google.com/recaptcha/api/siteverify';
    $verify_data = [
        'secret' => $recaptcha_secret,
        'response' => $recaptcha_token
    ];

    $options = [
        'http' => [
            'header' => "Content-type: application/x-www-form-urlencoded\r\n",
            'method' => 'POST',
            'content' => http_build_query($verify_data)
        ]
    ];
    $context = stream_context_create($options);
    $verify_result = file_get_contents($verify_url, false, $context);
    $response_data = json_decode($verify_result);

    if (!$response_data->success || $response_data->score < 0.5) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'reCAPTCHA verification failed.']);
        exit;
    }
}

// Prepare email content
$message = "You have received a new inquiry from the Hartmann Digital website.\n\n";
$message .= "Email: " . $email . "\n";
$message .= "Website: " . $website . "\n";
$message .= "Budget: " . $budget . "\n";
$message .= "Services Needed: " . ($services ?: 'None selected') . "\n";
$message .= "Goals:\n" . $goals . "\n";

// Email headers
$headers = "From: noreply@hartmanndigital.net\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send email
if (mail($to_email, $subject, $message, $headers)) {
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Your inquiry has been sent successfully.']);
}
else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to send the inquiry. Please try again later.']);
}
