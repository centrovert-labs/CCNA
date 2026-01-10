<?php
session_start();
require_once 'config/db_connect.php';
require_once 'generate.php';

if (!isset($_SESSION['admin_logged_in'])) {
    header("location: login.php");
    exit;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id = isset($_POST['id']) ? (int)$_POST['id'] : null;
    $title = trim($_POST['title']);
    // Simple slugify
    $slug = strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $title)));
    if (!empty($_POST['slug'])) {
        $slug = strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $_POST['slug'])));
    }
    
    $content = $_POST['content'];
    $meta_title = $_POST['meta_title'];
    $meta_desc = $_POST['meta_description'];
    $status = $_POST['status'];
    $publish_date = $_POST['publish_date'];
    
    // Fix for datetime-local format (YYYY-MM-DDTHH:MM)
    if (!empty($publish_date)) {
        $publish_date = str_replace('T', ' ', $publish_date);
    } else {
        $publish_date = date('Y-m-d H:i:s');
    }

    try {
        if ($id) {
            // Update
            $sql = "UPDATE articles SET title=?, slug=?, content=?, meta_title=?, meta_description=?, status=?, publish_date=? WHERE id=?";
            $stmt = $pdo->prepare($sql);
            $stmt->execute([$title, $slug, $content, $meta_title, $meta_desc, $status, $publish_date, $id]);
        } else {
            // Insert
            $sql = "INSERT INTO articles (title, slug, content, meta_title, meta_description, status, publish_date) VALUES (?, ?, ?, ?, ?, ?, ?)";
            $stmt = $pdo->prepare($sql);
            $stmt->execute([$title, $slug, $content, $meta_title, $meta_desc, $status, $publish_date]);
            $id = $pdo->lastInsertId();
        }

        // If Published, Generate Static Page
        if ($status === 'published') {
            $article_data = [
                'title' => $title,
                'slug' => $slug,
                'content' => $content, // Assume WYSIWYG output
                'meta_title' => $meta_title,
                'meta_description' => $meta_desc,
                'publish_date' => $publish_date
            ];
            generate_static_page($article_data);
        } else {
            // If Draft or Scheduled, ensure no stale static file exists
            delete_static_page($slug);
        }

        header("location: index.php?msg=saved");
    } catch (PDOException $e) {
        die("Error saving article: " . $e->getMessage());
    }
}
?>
