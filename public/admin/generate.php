<?php
// public/admin/generate.php

function get_article_html($article_data) {
    $template_path = __DIR__ . '/article_template.html';
    
    if (!file_exists($template_path)) {
        return "ERROR: Template missing at $template_path";
    }

    $template = file_get_contents($template_path);

    // Replace placeholders
    return str_replace(
        ['{{title}}', '{{meta_title}}', '{{meta_description}}', '{{publish_date}}', '{{content}}'],
        [
            htmlspecialchars($article_data['title']),
            htmlspecialchars($article_data['meta_title']),
            htmlspecialchars($article_data['meta_description']),
            date('F j, Y', strtotime($article_data['publish_date'])),
            $article_data['content'] // Content is assumed to be safe HTML from editor
        ],
        $template
    );
}

function generate_static_page($article_data) {
    $output_dir = __DIR__ . '/../articles/';
    
    // Ensure output directory exists
    if (!file_exists($output_dir)) {
        mkdir($output_dir, 0755, true);
    }

    $content = get_article_html($article_data);
    
    // Save to file
    $filename = $output_dir . $article_data['slug'] . '.html';
    return file_put_contents($filename, $content) !== false;
}

function delete_static_page($slug) {
    $file = __DIR__ . '/../articles/' . $slug . '.html';
    if (file_exists($file)) {
        unlink($file);
    }
}
?>
