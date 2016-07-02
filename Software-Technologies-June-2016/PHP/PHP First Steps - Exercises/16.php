<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>First Steps Into PHP</title>
</head>
<body>
<?php
for ($i = 0; $i < 9; $i++) {
    for ($c = 0; $c < 5; $c++) {
        if ($i <= 4) {
            if ($i == 0 || $i == 4 || $i == 8 || $c == 0) {
                echo "<button style='background-color: blue'>1</button>";
            } else {
                echo "<button>0</button>";
            }
        } else {
            if ($i == 0 || $i == 4 || $i == 8 || $c == 4) {
                echo "<button style='background-color: blue'>1</button>";
            } else {
                echo "<button>0</button>";
            }
        }
    }
    echo "<br>";
}
?>
</body>
</html>