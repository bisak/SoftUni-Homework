<html>
<head>

</head>
<body>
<form>
    Start Date:
    <br>
    <input type="text" name="date">

    <br>
    Output Format:
    <br>
    <input type="text" name="format">
    <br>
    Commands:
    <br>
    <textarea name="commands"></textarea>
    <br>
    <input type="submit">
</form>
</body>
</html>

<?php
if (isset($_GET['commands']) && isset($_GET['date']) && isset($_GET['format'])) {
    $cmds = $_GET['commands'];
    $inputDate = $_GET['date'];
    $date = DateTime::createFromFormat('d/m/Y', "$inputDate");

    $format = $_GET['format'];

    $cmd = explode(" ", $cmds)[0];
    $val = explode(" ", $cmds)[1];

    if ($cmd == 'add') {
        $inputDate = '+' . $val . " " . 'day';
        $date = $date->modify($inputDate);

    } else {
        $inputDate = '-' . $val . " " . 'day';
        $date = $date->modify($inputDate);

    }
    echo $date->format($format);
}
