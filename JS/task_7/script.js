let arr = [1, 2, 3, 4, 5];
function func(num1, num2, num3, num4, num5) {
    return num1 + num2 + num3 + num4 + num5;
}
console.log(func(...arr));
console.log(Math.min(...arr));

function averageNum(...nums){
    let sum = 0;
    let average = 0;
    let i = 0;
    for (let num of nums){
        sum += num;
        i++;
    }
    average = sum / i;
    return average;
}
console.log(averageNum(...arr));
function unite (...arr){
    let newArray = [];
    let i = 0;
    for (let val of arr){
        newArray[i] = [val];
        i++;
    }
    return newArray;
}
console.log(unite([1,2,3],[4,5,6],[7,8,9]));
