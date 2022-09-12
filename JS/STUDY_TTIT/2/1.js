// 1
let object = new Object();
console.log(object);
object.name = 'John';
console.log(object);
object.surname = 'Smith';
console.log(object);
object.name = 'Pete';
console.log(object);
delete object.name;
console.log(object);
// 2
function isEmpty(obj){
    if(Object.keys(obj).length !== 0){
        console.log(true);
    }else{
        console.log(false);
    }
}
let obj = {};
isEmpty(obj);
// 3
let calculator = {
    a : 0,
    b : 0,
    read(){
        let a = prompt('Введите число a');
        let b = prompt('Введите число b');
        this.a = a;
        this.b = b;
    },
    sum(){
        console.log(Number(this.a) + Number(this.b));
    },
    mul(){
        console.log(this.a * this.b);
    }
};
console.log(calculator)
calculator.read();
console.log(calculator)
calculator.sum();
console.log(calculator)
calculator.mul();
// 4
let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep() {
      alert( this.step );
      return this;
    }
};

ladder.up().up().showStep();
// 5

function Calculator(){
        this.a = 0;
        this.b = 0;
        this.read = function(){
            let a = prompt('Введите число a');
            let b = prompt('Введите число b');
            this.a = a;
            this.b = b;
        };
        this.sum = function(){
            console.log(Number(this.a) + Number(this.b));
        }
        this.mul = function(){
            console.log(this.a * this.b);
        }
    }
let calc = new Calculator();

calc.read();
// 6
function Accumulator(startingValue){
    this.value = startingValue;
    this.read = function(){
        let a = prompt('Введите число');
        this.value += Number(a);
        console.log(this.value);
    }
}
let acc = new Accumulator(1);
acc.read();
// 7
let arr = [];
function sumInput(){
    let num = prompt('Введите число в массив');
    if(num !== null && !isNaN(num)){
        arr.push(num);
        console.log(arr);
        sumInput();
    }
}

sumInput();

// 8

