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
    $arr = [];
    foreach ($entries as $pair) {
        $result = explode($delimiter, $pair);
        $arr[$result[0]] = $result[1];
    }
    if (array_key_exists($target, $arr)) {
        echo $arr[$target];
    } else {
        echo "None";
    }
}