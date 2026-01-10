<?php
session_start();
require_once 'config/db_connect.php';

if (!isset($_SESSION['admin_logged_in'])) {
    header("location: login.php");
    exit;
}

$stmt = $pdo->query("SELECT * FROM articles ORDER BY created_at DESC");
$articles = $stmt->fetchAll();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard</title>
    <link rel="stylesheet" href="assets/style.css">
</head>
<body>
    <div class="header">
        <h1>Dashboard</h1>
        <div class="nav">
            <span>Welcome, <?php echo htmlspecialchars($_SESSION['admin_username']); ?></span>
            <a href="index.php">Articles</a>
            <a href="logout.php">Logout</a>
        </div>
    </div>

    <div class="container">
        <div class="card">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
                <h2 style="margin: 0;">Articles</h2>
                <a href="editor.php" class="btn">Add New Article</a>
            </div>

            <?php if (isset($_GET['msg'])): ?>
                <div class="alert alert-success" style="background: #d1fae5; color: #065f46; margin-bottom: 1rem;">
                    <?php 
                    if ($_GET['msg'] == 'saved') echo "Article saved successfully.";
                    if ($_GET['msg'] == 'deleted') echo "Article deleted successfully.";
                    ?>
                </div>
            <?php endif; ?>

            <table class="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Slug</th>
                        <th>Status</th>
                        <th>Publish Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <?php if (count($articles) > 0): ?>
                        <?php foreach($articles as $row): ?>
                            <tr>
                                <td><?php echo htmlspecialchars($row['title']); ?></td>
                                <td><?php echo htmlspecialchars($row['slug']); ?></td>
                                <td>
                                    <span class="status-badge status-<?php echo strtolower($row['status']); ?>">
                                        <?php echo htmlspecialchars($row['status']); ?>
                                    </span>
                                </td>
                                <td>
                                    <?php 
                                    if ($row['publish_date']) echo date('M d, Y H:i', strtotime($row['publish_date'])); 
                                    else echo '-';
                                    ?>
                                </td>
                                <td>
                                    <a href="editor.php?id=<?php echo $row['id']; ?>" class="btn btn-sm" style="margin-right: 0.5rem; background-color: var(--primary);">Edit</a>
                                    <form action="delete_article.php" method="POST" style="display:inline;" onsubmit="return confirm('Are you sure you want to delete this article?');">
                                        <input type="hidden" name="id" value="<?php echo $row['id']; ?>">
                                        <button type="submit" class="btn btn-sm btn-danger">Delete</button>
                                    </form>
                                    <?php if ($row['status'] == 'published'): ?>
                                        <a href="../articles/<?php echo $row['slug']; ?>.html" target="_blank" class="btn btn-sm" style="background-color: #6b7280; margin-left: 0.5rem;">View</a>
                                    <?php endif; ?>
                                </td>
                            </tr>
                        <?php endforeach; ?>
                    <?php else: ?>
                        <tr>
                            <td colspan="5" style="text-align: center;">No articles found.</td>
                        </tr>
                    <?php endif; ?>
                </tbody>
            </table>
        </div>
    </div>
</body>
</html>
