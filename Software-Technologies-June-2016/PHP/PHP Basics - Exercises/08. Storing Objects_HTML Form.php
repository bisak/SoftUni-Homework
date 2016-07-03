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

class Student
{
    protected $name;
    protected $age;
    protected $grade;

    function __construct($name, $age, $grade)
    {
        $this->name = $name;
        $this->age = $age;
        $this->grade = $grade;
    }

    public function __toString()
    {
        return "<ul><li>Name: $this->name</li><li>Age: $this->age</li><li>Grade: $this->grade</li></ul>";
    }

}

if (isset($_GET['input']) && isset($_GET['delimiter'])) {
    $entries = $_GET['input'];
    $entries = explode("\n", $entries);
    $entries = array_map('trim', $entries);
    $delimiter = $_GET['delimiter'];
    for ($i = 0; $i < count($entries); $i++) {
        $name = explode("$delimiter", $entries[$i])[0];
        $age = explode("$delimiter", $entries[$i])[1];
        $grade = explode("$delimiter", $entries[$i])[2];
        $grade = round($grade, 2);
        $student[$i] = new Student($name, $age, $grade);
    }
    for ($i = 0; $i < count($student); $i++) {
        echo $student[$i];
    }
}