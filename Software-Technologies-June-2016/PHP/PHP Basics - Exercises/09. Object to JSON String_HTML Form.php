<html>
<head>

</head>
<body>
<form>
    Input:
    <br>
    <textarea name="input"></textarea>
    <br>
    Delimiter:
    <br>
    <input type="text" name="delimiter">
    <br>
    <input type="submit">
</form>
</body>
</html>

<?php

class Person
{
    private $name;
    private $surname;
    private $age;
    private $grade;
    private $date;
    private $town;

    public function __construct(string $name, string $surname, int $age, float $grade, string $date, string $town)
    {
        $this->name = $name;
        $this->surname = $surname;
        $this->age = $age;
        $this->grade = $grade;
        $this->date = $date;
        $this->town = $town;
    }

    public function toJson() : string
    {
        return json_encode(get_object_vars($this), JSON_UNESCAPED_SLASHES);
    }
}

if (isset($_GET['input']) && isset($_GET['delimiter'])) {
    $input = $_GET['input'];
    $delimiter = $_GET['delimiter'];
    $Tokens = explode("\r\n", $input);
    $tokens = [];
    foreach ($Tokens as $token) {
        $tokens[] = explode($delimiter, $token)[1];
    }
    $person = new Person($tokens[0], $tokens[1], intval($tokens[2]), floatval($tokens[3]), $tokens[4], $tokens[5]);
    echo $person->toJson();
}
