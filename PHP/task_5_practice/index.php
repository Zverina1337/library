<?php
$month = 12;
if(($month >= "1") and ($month <= "2") or ($month === 12)){
    echo 'Зима';
}else if($month >= "3" and $month <= "5"){
    echo "Весна";
}else if($month >= "6" and $month <= "8"){
    echo "Лето";
}else if($month >= "9" and $month <= "11"){
    echo "Осень";
}
$str = 'abcde';

if ($str[0] === "a"){
    echo "<br>Первый символ строки: ", $str, " a";
}
$numbers = "12345";
if($numbers[0] === "1" or $numbers[0] === "2" or $numbers[0] === "3"){
    echo "<br> DA";
}
$numbers = "123";
$sum = $numbers[0] + $numbers[1] + $numbers[2];
echo "<br>",$sum;

$numbers = "123123";
$firstSum = $numbers[0] + $numbers[1] + $numbers[2];
$secondSum = $numbers[3] + $numbers[4] + $numbers[5];
if ($firstSum == $secondSum){
    echo "<br>Prikol";
}

