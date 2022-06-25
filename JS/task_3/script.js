let array = [1,2,3,4,5];
let quadArray = array.map(function (elem){
    return elem * elem;
})
let strArray = ["asdf","adsfg","asdgf","fsad"];
let strArray2 = strArray.map(function (elem) {
    return elem + "!";
})

let reverseArray = strArray.map(function (elem){
    return elem.split("").reverse().join('');
})

let arr = ['123', '456', '789'];
let newArr = arr.map(function (elem) {
    return elem.split('');
});
let newArray = array.map(function(elem,index){
    return elem * index;
})
console.log(quadArray,strArray2,reverseArray,newArr,newArray);
