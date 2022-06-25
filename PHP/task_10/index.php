<?php
$str = '';
for($i = 0;$i < 5;$i++){
    $str .= "0";
}
echo "<br>",$str;
$str = '';
for ($i = 1; $i < 10;$i++){
    $str .= $i;
}
echo "<br>",$str;
$str = '';
for ($i = 9; $i > 1;$i--){
    $str .= $i;
}
echo "<br>",$str;
$str = '-';
for ($i = 1; $i < 10;$i++){
    $str .= $i."-";
}
echo "<br>",$str;
