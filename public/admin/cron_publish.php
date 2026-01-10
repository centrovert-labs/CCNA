<?php
// cron_publish.php
// Set up a Cron Job to run this script every 5-15 minutes
// Example: /usr/bin/php /home/user/public_html/admin/cron_publish.php

// Ensure we are in the right directory
chdir(__DIR__);

require_once 'config/db_connect.php';
require_once 'generate.php';

try {
    // Find articles that are scheduled and ready to publish
    $stmt = $pdo->prepare("SELECT * FROM articles WHERE status = 'scheduled' AND publish_date <= NOW()");
    $stmt->execute();
    $articles = $stmt->fetchAll();

    if (count($articles) > 0) {
        foreach ($articles as $article) {
            // Update status to published
            $update = $pdo->prepare("UPDATE articles SET status = 'published' WHERE id = ?");
            $update->execute([$article['id']]);

            // Generate the static page
            // IMPORTANT: We need to pass the updated status implicitly or just treat it as published
            $article_data = $article; 
            // Reuse logic from save_article roughly, but pure generation
            
            generate_static_page($article_data);
            
            echo "Published: " . $article['title'] . "\n";
        }
    } else {
        echo "No scheduled articles to publish.\n";
    }

} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}
?>
