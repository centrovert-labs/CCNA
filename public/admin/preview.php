<?php
// public/admin/preview.php
require_once 'generate.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $title = trim($_POST['title']);
    $content = $_POST['content'];
    $meta_title = $_POST['meta_title'];
    $meta_desc = $_POST['meta_description'];
    $publish_date = $_POST['publish_date'];

    // Provide default date if empty
    if (empty($publish_date)) {
        $publish_date = date('Y-m-d H:i:s');
    } else {
        $publish_date = str_replace('T', ' ', $publish_date);
    }

    $article_data = [
        'title' => $title,
        'slug' => 'preview-mode', // Dummy slug
        'content' => $content,
        'meta_title' => $meta_title,
        'meta_description' => $meta_desc,
        'publish_date' => $publish_date
    ];

    echo get_article_html($article_data);
} else {
    echo "No content to preview.";
}
?>
