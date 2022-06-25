let numParent = document.getElementById("numbers");
let months = ["Январь","Февраль","Март","Апрель","Май","Июнь",
              "Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];
let idMonth = document.getElementById("month_year");
let year = 2022;
let k = 0;
function changeNums(countDays){
    let numUl = document.createElement("ul");

    if (numParent.childNodes.length !== 1){
        let oldNumUl = numParent.removeChild(numUl);
        numParent.removeChild(oldNumUl);
    }

    numParent.appendChild(numUl);
    if (numUl.childNodes.length !== 0){
        for (let i = 0;i < countDays;i++){
            let num = document.getElementById(String(i+1));
            let oldNum = numUl.removeChild(num);
            numUl.appendChild(oldNum);
        }
    }
    for (let i = 0;i < countDays;i++){
        let num = document.createElement("li");
        num.id = String(i+1);
        num.innerText = String(i + 1);
        numUl.appendChild(num);
    }

}
changeNums(31);
function btn_1(){
    if(k === 0){
        k = 12;
        year--;
    }
    k--;
    idMonth.innerText = months[k] + " " + year;
    if(k % 2 === 0){
        changeNums(31);
    }else if(!k % 2 === 0){
        changeNums(30);
    }
}
function btn_2(){
    k++;
    if(k === 12){
        k = 0;
        year++;
    }
    idMonth.innerText = months[k] + " " + year;
}
idMonth.innerText = months[0] + " " + year;