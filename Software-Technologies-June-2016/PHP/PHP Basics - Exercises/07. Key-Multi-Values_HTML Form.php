<html>
<head>

</head>
<body>
<form>
    Delimiter: <input type="text" name="delimiter">
    Input: <textarea name="key-value-pairs"></textarea>
    Target Key: <input type="text" name="target-key">
    <input type="submit">
</form>
</body>
</html>

<?php
if (isset($_GET['delimiter']) && isset($_GET['key-value-pairs']) && isset($_GET['target-key'])) {
    $entries = $_GET['key-value-pairs'];
    $delimiter = $_GET['delimiter'];
    $target = $_GET['target-key'];
    $entries = explode("\n", $entries);
    $entries = array_map('trim', $entries);
    $arr = [];
    for ($i = 0; $i < count($entries); $i++) {
        $result = explode($delimiter, $entries[$i]);
        if (isset($arr[$result[0]])) {
            array_push($arr[$result[0]], $result[1]);
        } else {
            $arr[$result[0]] = [];
            array_push($arr[$result[0]], $result[1]);
        }
    }
    if (array_key_exists($target, $arr)) {
        echo implode("<br>", $arr[$target]);
    } else {
        echo "None";
    }


}