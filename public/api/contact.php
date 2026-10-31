<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

function respond(int $status, array $payload): void
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond(405, ['message' => 'Method not allowed']);
}

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$allowedOrigins = [
    'https://winchancegroup.com',
    'https://www.winchancegroup.com',
    'https://staging.winchancegroup.com',
];

if ($origin !== '' && !in_array($origin, $allowedOrigins, true)) {
    respond(403, ['message' => 'Invalid request origin']);
}

$contentLength = (int) ($_SERVER['CONTENT_LENGTH'] ?? 0);
if ($contentLength < 1 || $contentLength > 65536) {
    respond(400, ['message' => 'Invalid request']);
}

$rawBody = file_get_contents('php://input');
$payload = json_decode($rawBody === false ? '' : $rawBody, true);
if (!is_array($payload)) {
    respond(400, ['message' => 'Invalid request']);
}

function clean_text($value, int $maxLength): string
{
    if (!is_string($value)) {
        return '';
    }

    $value = trim(str_replace("\0", '', $value));
    if (function_exists('mb_substr')) {
        return mb_substr($value, 0, $maxLength, 'UTF-8');
    }

    return substr($value, 0, $maxLength);
}

$name = clean_text($payload['name'] ?? null, 100);
$company = clean_text($payload['company'] ?? null, 120);
$email = strtolower(clean_text($payload['email'] ?? null, 200));
$message = clean_text($payload['message'] ?? null, 4000);
$website = clean_text($payload['website'] ?? null, 200);
$startedAt = is_numeric($payload['startedAt'] ?? null) ? (float) $payload['startedAt'] : 0.0;
$lang = in_array($payload['lang'] ?? '', ['tc', 'sc', 'en'], true) ? $payload['lang'] : 'tc';
$nowMilliseconds = microtime(true) * 1000;

if ($website !== '' || $startedAt <= 0 || $nowMilliseconds - $startedAt < 3000 || $nowMilliseconds - $startedAt > 7200000) {
    respond(400, ['message' => 'Invalid submission']);
}

if ($name === '' || $message === '' || filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
    respond(400, ['message' => 'Please complete all required fields']);
}

// Five submissions per IP in ten minutes. The files live in PHP's private
// temporary directory, outside the public website tree.
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$rateDirectory = rtrim(sys_get_temp_dir(), DIRECTORY_SEPARATOR) . DIRECTORY_SEPARATOR . 'wcg-contact-rate';
if (!is_dir($rateDirectory) && !@mkdir($rateDirectory, 0700, true) && !is_dir($rateDirectory)) {
    respond(503, ['message' => 'Unable to process enquiry']);
}

$rateFile = $rateDirectory . DIRECTORY_SEPARATOR . hash('sha256', $ip) . '.json';
$rateHandle = @fopen($rateFile, 'c+');
if ($rateHandle === false || !flock($rateHandle, LOCK_EX)) {
    if (is_resource($rateHandle)) {
        fclose($rateHandle);
    }
    respond(503, ['message' => 'Unable to process enquiry']);
}

$stored = stream_get_contents($rateHandle);
$timestamps = json_decode($stored === false ? '[]' : $stored, true);
if (!is_array($timestamps)) {
    $timestamps = [];
}

$now = time();
$timestamps = array_values(array_filter($timestamps, static function ($timestamp) use ($now): bool {
    return is_int($timestamp) && $now - $timestamp < 600;
}));

if (count($timestamps) >= 5) {
    flock($rateHandle, LOCK_UN);
    fclose($rateHandle);
    respond(429, ['message' => 'Too many enquiries']);
}

$timestamps[] = $now;
rewind($rateHandle);
ftruncate($rateHandle, 0);
fwrite($rateHandle, json_encode($timestamps));
fflush($rateHandle);
flock($rateHandle, LOCK_UN);
fclose($rateHandle);

$languageLabels = [
    'tc' => '繁體中文',
    'sc' => '簡體中文',
    'en' => 'English',
];
$languageLabel = $languageLabels[$lang];
$recipient = 'arnelimdg@gmail.com';
$subject = 'WCG 網站查詢 — ' . ($company !== '' ? $company : $name);
$encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
$body = "姓名：{$name}\n"
    . '公司：' . ($company !== '' ? $company : '—') . "\n"
    . "電郵：{$email}\n"
    . "網站語言：{$languageLabel}\n\n"
    . "查詢內容：\n{$message}\n";

$headers = [
    'From: Win Chance Group Website <website@winchancegroup.com>',
    'Reply-To: ' . $email,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
];

if (!mail($recipient, $encodedSubject, $body, implode("\r\n", $headers))) {
    error_log('WCG contact form: mail() returned false');
    respond(502, ['message' => 'Unable to send enquiry']);
}

respond(200, ['success' => true]);
