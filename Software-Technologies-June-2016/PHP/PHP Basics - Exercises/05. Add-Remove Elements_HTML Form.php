<html>
<head>

</head>
<body>
<form>
    Delimiter: <input type="text" name="delimiter">
    Input: <textarea name="commands"></textarea>
    <input type="submit">
</form>
</body>
</html>

<?php
if (isset($_GET['commands']) && isset($_GET['delimiter'])) {
    $delimiter = $_GET['delimiter'];
    $entries = $_GET['commands'];
    $entries = explode("\n", $entries);
    $entries = array_map('trim', $entries);
    $arr = [];
    for ($i = 0; $i < count($entries); $i++) {
        $command = explode($delimiter, $entries[$i])[0];
        $value = explode($delimiter, $entries[$i])[1];
        if ($command == "add") {
            array_push($arr, $value);
        }
        if ($command == "remove") {
            array_splice($arr, $value, 1);
        }
    }
    foreach($arr as $val){
        echo "$val<br>";
    }
}
