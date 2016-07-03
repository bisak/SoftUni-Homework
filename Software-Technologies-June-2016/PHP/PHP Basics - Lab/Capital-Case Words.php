<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Capital Case Words</title>
</head>
<body>
<?php
$outputText = "";
if (isset($_GET['text'])) {
    $text = $_GET['text'];
    preg_match_all('/\w+/', $text, $words);
    $words = $words[0];
    $upperWords = array_filter($words, function($word){
        return strtoupper($word) == $word;
    });
    $outputText = implode(', ', $upperWords);
}

?>
<form>
    <textarea name="text"><?= $outputText ?></textarea>
    <input type="submit" value="Convert">
</form>
</body>
</html>