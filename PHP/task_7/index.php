<?php
$arr = ['a', 'b', 'c', 'd', 'e'];
foreach ($arr as $elem){
    echo $elem, "<br>";
}

$sum = 0;
$arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
foreach ($arr as $elem){
    $sum += $elem;
}
echo $sum, "<br>";

$sum = 0;
$arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
$i = 0;
foreach ($arr as $elem){
    $sum += $elem;
    $i++;
}
$sum /= $i;
echo $sum, "<br>";

$arr = ['green' => 'зеленый', 'red' => 'красный','blue' => 'голубой'];
foreach ($arr as $key => $elem){
    echo $elem." - ".$key, "<br>";
}

$arr = ['user1' => 30, 'user2' => 32, 'user3' => 33];
foreach ($arr as $key => $elem){
    echo $key." - "." возраст ".$elem." лет ";
}

$arr = [1, 2, 3, 4, 5];
foreach ($arr as $elem){
    if($elem % 2 !== 0){
        echo "<br>",$elem," ";
    }
}

echo "<br>";
$arr = [2, 5, 9, 15, 1, 4];
foreach ($arr as $elem){
    if($elem > 3 and $elem < 10){
        echo "<br>",$elem," ";
    }
}

echo "<br>";
echo "<br>";
$arr = [-2, 5, -9, 15, 1, 4];
$sum = 0;
foreach ($arr as $elem){
    if($elem > 0){
        $sum += $elem;
    }
}
echo $sum;

echo "<br>";
$days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
foreach ($days as $key => $day){
    if ($key !== 5 and $key !== 6){
        echo $day," ";
    }else if($key === 5 or $key === 6){
        echo "<b>",$day,"</b>"," ";
    }
}

echo "<br>";
$days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
$today = "Friday";
foreach ($days as $day){
    if ($day !== $today){
        echo $day," ";
    }else if($day === $today){
        echo "<i>",$day,"</i>"," ";
    }
}
