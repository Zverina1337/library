let time = localStorage.getItem('time');

if(!time){
    let old_hours = new Date().getHours();
    let old_min = new Date().getMinutes();
    let old_sec = new Date().getSeconds();
    localStorage.setItem('hours', old_hours);
    localStorage.setItem('min', old_min);
    localStorage.setItem('sec', old_sec);
}else{
    let now_hours = new Date().getHours();
    let now_min = new Date().getMinutes();
    let now_sec = new Date().getSeconds();
    let old_hours = localStorage.getItem('hours');
    let old_min = localStorage.getItem('min');
    let old_sec = localStorage.getItem('sec');

    let time = (now_hours - old_hours) + ":" + (now_min - old_min) + ":" + (now_sec - old_sec);

    console.log(time);
}
