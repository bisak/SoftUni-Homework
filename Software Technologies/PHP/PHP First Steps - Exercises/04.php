<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>First Steps Into PHP</title>

</head>
<body>
<form>
    X: <input type="text" name="num1"/>
    Y: <input type="text" name="num2"/>
    Z: <input type="text" name="num3"/>
    <input type="submit"/>
</form>
<?php
if (isset($_GET['num1']) && isset($_GET['num2']) && isset($_GET['num3'])) {
    $one = intval($_GET['num1']);
    $two = intval($_GET['num2']);
    $three = intval($_GET['num3']);
    $count=0;
    if ($one < 0) $count++;
    if ($two < 0) $count++;
    if ($three < 0) $count++;
    if ($one == 0 || $two == 0 || $three == 0) echo 'Positive';
    else if ($count % 2 == 0) {
        echo 'Positive';
    } else {
        echo "negative";
    }
}
?>
</body>
</html>