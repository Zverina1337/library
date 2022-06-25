<?php
$arr = ['a', 'b', 'c', 'd', 'e'];
echo count($arr), "<br>";

$arr = ['a' => 1, 'b' => 2, 'c' => 3, 'd' => 4];
echo count($arr), "<br>";

$arr = ['a', 'b', 'c', 'd', 'e'];
echo $arr[count($arr) - 2], "<br>";

$arr = ['a' => 1, 'b' => 2, 'c' => 3];
$arr['a'] = 3;
$arr['b'] = 6;
$arr['c'] = 7;
var_dump($arr);
echo "<br>";

$arr = ['a' => 1, 'b' => 2, 'c' => 3];
$arr['a'] += 3;
$arr['b'] += 3;
$arr['c'] += 3;
var_dump($arr);
echo "<br>";

$arr = [];
$arr[] = 1;
$arr[] = 2;
$arr[] = 3;
$arr[] = 4;
$arr[] = 5;
$arr[] = 4;
$arr[] = 5;
var_dump($arr);
echo "<br>";

$arr = [];
$arr['year'] = 2022;
$arr['month'] = 01;
$arr['day'] = 26;
var_dump($arr);
echo "<br>";
