<html>
<head>

</head>
<body>
<form>
    Delimiter: <input type="text" name="delimiter">
    Array-size: <input type="text" name="array-size">
    Input: <textarea name="key-value-pairs"></textarea>
    <input type="submit">
</form>
</body>
</html>
<?php
if (isset($_GET['key-value-pairs']) && isset($_GET['delimiter']) && isset($_GET['array-size'])) {
    $delimiter = $_GET['delimiter'];
    $size = $_GET['array-size'];
    $kvp = $_GET['key-value-pairs'];
    $kvp = explode("\n", $kvp);
    $kvp = array_map('trim', $kvp);
    $arr = array_fill(0, $size, 0);
    for ($i = 0; $i < count($kvp); $i++) {
        $splittedPair = explode($delimiter, $kvp[$i]);
        $arr[$splittedPair[0]] = $splittedPair[1];
    }
    foreach($arr as $pair){
        echo $pair."<br>";
    }
}