let time = localStorage.getItem('old_time');

if(!time){
    let time = Date.now();
    localStorage.setItem('old_time', time);
}else{
    let time = Date.now();
    console.log(Math.round(((time - localStorage.getItem("old_time")) / 1000) / 60));
}

/////////////////////////////////////////////////////////////
    let body = document.querySelector("body");
if(!localStorage.getItem("birthday")){
    window.onload = function (){
    let input = document.createElement("input");
    let p = document.createElement("p");
    p.innerHTML = "Введите дату рождения";
    input.type="date";
    input.addEventListener("blur",function(){
        if(this.value != ""){
            let birthday = this.value.match(/[0-9][0-9]\-[0-9][0-9]$/);
            localStorage.setItem("birthday", birthday[0]);
            this.remove();
            p.remove();
        }
    })
    body.appendChild(p);
    body.appendChild(input);  
};
}else{
    let birthday = localStorage.getItem("birthday");
    let now_day = new Date().getDate();
    let now_month = new Date().getMonth() + 1;
    let all_date = "0" + now_month + "-" + now_day;
    let answer = document.createElement("p");

    if(birthday == all_date){
       answer.innerHTML = "С днём рождения!";
    }else{
        answer.innerHTML = "Сегодня не твой день рождения(";
    }
    body.appendChild(answer);
}

