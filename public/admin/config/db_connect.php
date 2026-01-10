<?php
/**
 * Database Connection using PDO
 * Update these credentials with your Hostinger DB details
 */

$host = 'localhost';
$dbname = 'u876957293_Thaiq'; // Hostinger Database Name
$username = 'u876957293_Thariq_admin'; // Hostinger Username
$password = 'DigitalChangi2026!'; // <--- Enter your new password here

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}
?>
