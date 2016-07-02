<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>First Steps Into PHP</title>
    <style>
        div {
            display: inline-block;
            margin: 5px;
            width: 20px;
            height: 20px;
        }
    </style>
</head>
<body>
<?php
$rowshade = 0;
$colshade = 0;
for ($i = 0; $i < 5; $i++) {
    for ($c = 0; $c < 10; $c++) {
        echo "<div style=\"background-color: rgb($colshade, $colshade, $colshade);\"></div>";
        $colshade += 5;
    }
    echo "<br>";
    $rowshade += 51;
    $colshade = $rowshade;
}
?>
</body>
</html>