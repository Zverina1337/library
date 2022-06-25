let array = [-2,-3,5,1,-6,12,53];
let strArr = ["asdf","asfd","asdgaf","asdgerg","gasgfdgerg"];
let intArr = [1, 2, [3, 4], 5, [6, 7]];
console.log(array.filter(elem => elem > 0));
console.log(array.filter(elem => elem < 0));
console.log(array.filter(elem => elem > 0 && elem < 10));
console.log(strArr.filter(elem => elem.length > 5));
console.log(array.filter(function (elem,index){
    if(elem * index < 30){
        return true;
    }
}));
console.log(intArr.filter(function (elem,index){
    if(!(elem === [])){
        return true;
    }
}));
console.log(array.filter(elem => elem < 0).length);