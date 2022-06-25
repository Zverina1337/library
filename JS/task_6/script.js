let array = [1,2,3,4,7];
console.log(array.every(elem => elem > 0));
console.log(array.every(function (elem,index){
    if(elem * index < 30){
        return true;
    }
}));
console.log(array.some(elem => elem > 0));
console.log(array.some(function (elem,index){
    if(elem * index < 30){
        return true;
    }
}));