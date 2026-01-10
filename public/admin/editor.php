<?php
session_start();
require_once 'config/db_connect.php';

if (!isset($_SESSION['admin_logged_in'])) {
    header("location: login.php");
    exit;
}

$article = [
    'id' => '',
    'title' => '',
    'slug' => '',
    'content' => '',
    'meta_title' => '',
    'meta_description' => '',
    'status' => 'draft',
    'publish_date' => ''
];

if (isset($_GET['id'])) {
    $stmt = $pdo->prepare("SELECT * FROM articles WHERE id = ?");
    $stmt->execute([$_GET['id']]);
    $fetched = $stmt->fetch();
    if ($fetched) {
        $article = $fetched;
        // Format date for datetime-local input
        if ($article['publish_date']) {
            $article['publish_date'] = date('Y-m-d\TH:i', strtotime($article['publish_date']));
        }
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Article Editor</title>
    <link rel="stylesheet" href="assets/style.css">
    
    <!-- Simple WYSIWYG: Summernote Lite -->
    <link href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-lite.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-lite.min.js"></script>
</head>
<body>
    <div class="header">
        <h1><?php echo $article['id'] ? 'Edit Article' : 'New Article'; ?></h1>
        <div class="nav">
            <a href="index.php">← Back to Dashboard</a>
        </div>
    </div>

    <div class="container">
        <form action="save_article.php" method="POST">
            <input type="hidden" name="id" value="<?php echo $article['id']; ?>">
            
            <div class="editor-layout">
                <div class="main-content">
                    <div class="card">
                        <div class="form-group">
                            <label>Title</label>
                            <input type="text" name="title" id="title" class="form-control" value="<?php echo htmlspecialchars($article['title']); ?>" required>
                        </div>
                        <div class="form-group">
                            <label>Slug (URL) - Leave empty to auto-generate</label>
                            <input type="text" name="slug" id="slug" class="form-control" value="<?php echo htmlspecialchars($article['slug']); ?>">
                        </div>
                        <div class="form-group">
                            <label>Content</label>
                            <textarea name="content" id="content" required><?php echo htmlspecialchars($article['content']); ?></textarea>
                        </div>
                    </div>
                </div>

                <div class="sidebar">
                    <div class="card">
                        <h3>Publish Settings</h3>
                        <div class="form-group">
                            <label>Status</label>
                            <select name="status" class="form-control">
                                <option value="draft" <?php if($article['status']=='draft') echo 'selected'; ?>>Draft</option>
                                <option value="scheduled" <?php if($article['status']=='scheduled') echo 'selected'; ?>>Scheduled</option>
                                <option value="published" <?php if($article['status']=='published') echo 'selected'; ?>>Published</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Publish Data/Time</label>
                            <input type="datetime-local" name="publish_date" class="form-control" value="<?php echo $article['publish_date']; ?>">
                        </div>
                        
                        <div class="form-group" style="margin-top: 20px;">
                             <!-- Main Save Button -->
                             <button type="submit" class="btn" onclick="this.form.action='save_article.php'; this.form.target='_self';" style="width: 100%; margin-bottom: 10px;">Save Article</button>
                             
                             <!-- Preview Button -->
                             <button type="button" class="btn" style="width: 100%; background-color: #6b7280;" onclick="previewArticle(this.form)">Preview</button>
                        </div>
                    </div>

                    <div class="card">
                        <h3>SEO (Search Engine Optimization)</h3>
                        <p style="font-size: 12px; color: #666; margin-bottom: 15px;">These fields help your article appear better in Google search results.</p>
                        
                        <div class="form-group">
                            <label>Meta Title</label>
                            <small style="display:block; color:#888;">The blue clickable link text in Google.</small>
                            <input type="text" name="meta_title" class="form-control" value="<?php echo htmlspecialchars($article['meta_title']); ?>">
                        </div>
                        <div class="form-group">
                            <label>Meta Description</label>
                            <small style="display:block; color:#888;">The short summary under the link in Google.</small>
                            <textarea name="meta_description" class="form-control" style="height: 100px; min-height: auto;"><?php echo htmlspecialchars($article['meta_description']); ?></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>

    <script>
        $('#content').summernote({
            placeholder: 'Write your article here...',
            tabsize: 2,
            height: 400
        });

        // Auto-slug generation
        const titleInput = document.getElementById('title');
        const slugInput = document.getElementById('slug');

        if (titleInput && slugInput) {
            titleInput.addEventListener('input', function() {
                if (slugInput.value === '') {
                    // Only auto-generate if slug is empty
                    slugInput.value = this.value.toLowerCase()
                        .replace(/[^\w ]+/g, '')
                        .replace(/ +/g, '-');
                }
            });
        }

        // Preview Function
        function previewArticle(form) {
            // Point to preview script
            const originalAction = form.action;
            const originalTarget = form.target;

            form.action = 'preview.php'; 
            form.target = '_blank'; // Open in new tab
            form.submit();
            
            // Reset back immediately
            form.action = 'save_article.php';
            form.target = '_self';
        }
    </script>
</body>
</html>
