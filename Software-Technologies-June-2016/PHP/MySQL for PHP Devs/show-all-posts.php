<!DOCTYPE html>
<html>
<head>
    <title>All Posts from MySQL</title>
    <style>
        th, td { background: #DDD;}
    </style>
</head>
<body>

<?php
$mysqli = new mysqli('localhost', 'root', '', 'blog');
$mysqli->set_charset("utf8");
if ($mysqli->connect_errno) die('Cannot connect to MySQL');
$result = $mysqli->query('SELECT * FROM posts ORDER BY date DESC');
if (!$result) die('Cannot read posts table from MySQL');
echo "<table>\n";
echo "<tr><th>Title</th><th>Content</th><th>Date</th></tr>\n";
while ($row = $result->fetch_assoc()) {
    $title = htmlspecialchars($row['title']);
    $content = htmlspecialchars($row['content']);
    $date = (new DateTime($row['date']))->format('d.m.Y');
    echo "<tr><td>$title</td><td>$content</td><td>$date</td></tr>\n";
}
echo "</table>\n";
?>
</body>
</html>
