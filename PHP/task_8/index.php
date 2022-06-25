<?php
$arr = [1,3,5,3,0];
foreach ($arr as $el){
    if($el !== 0){
        echo $el;
    }
    else if ($el === 0){
        break;
    }
}
echo "<br>";
$arr = [11,35,-5,23,10];
$sum = 0;
foreach ($arr as $el){
    if ($el > 0){
        $sum += $el;
    }else if($el < 0){
        break;
    }
}
echo $sum;

echo "<br>";
$arr = [1, 2, 3, 4, 5];
foreach ($arr as $key => $elem) {
    if ($elem == 3) {
        echo $key;
        break;
    }
}

echo "<br>";
$i = 1;
$sum = 0;
$j = 0;

while($sum <= 100){
    $sum += $i;
    $j++;
    $i++;
}
echo $j;

echo "<br>";
$arr = ['a', 'b', 'c', 'd', 'e'];
$flag = false;
foreach ($arr as $el){
    if($el === "c"){
        $flag = true;
        break;
    }
}
if ($flag){
    echo "Есть";
}else{
    echo "Нет";
}