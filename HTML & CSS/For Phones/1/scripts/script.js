let btn_start_now = document.querySelector(".btn_start_now");

window.onload = function (){
    btn_start_now.classList.add("anim_opacity_btn");
}
setTimeout(function (){
    btn_start_now.classList.remove("anim_opacity_btn");
},1500)

let input_range = document.getElementById("input_range");
let p = document.getElementById("percents");
let value = 0;

setInterval(function (){
    if (value === 100){
        value = 100;
    }
    else{
        value++;
    }
},100);

setInterval(function (){
    input_range.value = value;
    p.innerText = String(value) + "% Files Loading...";
    if (value === 100){
        p.innerText = "Files downloaded"
    }
},100);

let page1 = document.querySelector(".page1");
let page2 = document.querySelector(".page2");
let phone = document.querySelector(".phone");
function hidden_page1(){
    for (let i = 0; i < page1.children.length; i++) {
        page1.children[i].classList.add("hidden");
    }
    phone.classList.add("bg_phone_2");
    page2.classList.remove("hidden");
}