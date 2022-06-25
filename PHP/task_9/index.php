<?php
$num = 31;
$flag = true;

for ($i = 2;$i < $num;$i++){
    if ($num % $i === 0){
        $flag = false;
        break;
    }
}
echo $flag;

$num = 2;
$i = 0;

while($num < 1000){
    $num *= 3;
    $i++;
}

echo '<br>',$i;
echo '<br>',$num;

for ($num = 2, $i = 0; $num < 1000; $num *= 3,$i++){
    echo '<br>',$num, " ",$i;
}