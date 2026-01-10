<?php
session_start();
require_once 'config/db_connect.php';
require_once 'generate.php';

if (!isset($_SESSION['admin_logged_in'])) {
    header("location: login.php");
    exit;
}

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['id'])) {
    $id = (int)$_POST['id'];
    
    // Get slug to delete file
    $stmt = $pdo->prepare("SELECT slug FROM articles WHERE id = ?");
    $stmt->execute([$id]);
    $article = $stmt->fetch();

    if ($article) {
        try {
            // Delete from DB
            $delStmt = $pdo->prepare("DELETE FROM articles WHERE id = ?");
            $delStmt->execute([$id]);

            // Delete static file
            delete_static_page($article['slug']);

            header("location: index.php?msg=deleted");
            exit;
        } catch (PDOException $e) {
            die("Error deleting: " . $e->getMessage());
        }
    }
}

header("location: index.php");
?>
