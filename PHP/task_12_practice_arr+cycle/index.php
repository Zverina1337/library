<?php
$arr = [
    'employee1' => 100,
    'employee2' => 200,
    'employee3' => 300,
    'employee4' => 400,
    'employee5' => 500,
    'employee6' => 600,
    'employee7' => 700,
];
$length = count($arr);
for($i = 1;$i < $length;$i++){
    $key = 'employee'.$i;
    if ($arr[$key] <= 400){
        echo "<br>",$arr[$key] * 0.1 + $arr[$key];
    }else{
        echo "<br>",$arr[$key];
    }
}

$arr = [1 => 6, 2 => 7, 3 => 8, 4 => 9, 5 => 10];
$length = count($arr);
$keys = 0;
$values = 0;
for ($i = 1;$i <= $length;$i++){
    $keys += key($arr);
    next($arr);
    $values += $arr[$i];
}
$diff = $keys / $values;
echo "<br>","<br>",$keys;
echo "<br>","<br>",$values;
echo "<br>","<br>",$diff;

$arr = ['a' => 1, 'b' => 2, 'c' => 3, 'd' => 4, 'e' => 5];
$keys = [];
$values = [];
$str = '';

for ($i = 0;$i < $length;$i++){
    $key = key($arr);
    $values[$i] = $arr[$key];
    $str .= ",".$key;
    $keys = explode(',',$str);
    next($arr);
}
unset($keys[0]);
echo "<br>";
print_r($keys);
echo "<br>";
print_r($values);

$arr = [
    1 => 125,
    2 => 225,
    3 => 128,
    4 => 356,
    5 => 145,
    6 => 281,
    7 => 452,
];
$length = count($arr);
$el = 0;
for($i = 1;$i <= $length;$i++){
    $el = ",".$arr[$i];
    $el = explode(",",$el);
}
echo "<br>";
print_r($el);