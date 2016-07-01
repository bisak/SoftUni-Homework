<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>First Steps Into PHP</title>
    <style>
        table * {
            border: 1px solid black;
            width: 50px;
            height: 50px;
        }
    </style>
</head>
<body>
<table>
    <tr>
        <td>
            Red
        </td>
        <td>
            Green
        </td>
        <td>
            Blue
        </td>
    </tr>
    <?php
    $red = 0;
    $green = 0;
    $blue = 0;

    for ($i = 0; $i < 5; $i++) {
        echo "<tr>";
        $red += 51;
        $green += 51;
        $blue += 51;
        for ($c = 0; $c < 3; $c++) {

            if ($c == 0) {
                echo "<td style='background-color:rgb($red,0,0)'>
            </td>";
            }
            if ($c == 1) {
                echo "<td style='background-color:rgb(0,$green,0)'>
            </td>";
            }
            if ($c == 2) {
                echo "<td style='background-color:rgb(0,0,$blue)'>
            </td>";
            }

        }
        echo "</tr>";
    }
    ?>
</table>
</body>
</html>