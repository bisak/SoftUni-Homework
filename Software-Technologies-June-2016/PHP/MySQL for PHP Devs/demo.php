<?php
$hostname = 'localhost';
$username = 'root';
$password = '';
$dbname = 'blog';

$mysqli = new mysqli($hostname, $username, $password, $dbname);

if ($mysqli->connect_errno) {
    die("Error! Failed to connect to MySQL");
}

$mysqli->set_charset("utf8");
$query = "SELECT * FROM posts";
$result = $mysqli->query($query);
if (!$result) {
    die('Error! Failed to process query');
}

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo "<strong>Id:</strong> " . htmlspecialchars($row['id']) . "<br>" .
            "<strong>title:</strong> " . htmlspecialchars($row['title']) . "<br>" .
            "<strong>content:</strong> " . htmlspecialchars($row['content']) . "<br>" .
            "<strong>date:</strong> " . htmlspecialchars('date') . "<br><hr>";
    }
} else {
    echo "0 results";
}

?>