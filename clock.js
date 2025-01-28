let temptime = document.getElementsByClassName('nodes');

let he = new Date();
    temptime[2].innerHTML = he.getSeconds();
    temptime[1].innerHTML = he.getMinutes();
    temptime[0].innerHTML = hour(he.getHours()); //24 to 12 through function hour

var time = setInterval(clock, 1000);
function hour(h) {
    if (h > 12) {
        return h - 12;
    } else {
        return h;
    }
}
function clock() {
    let he = new Date();
    temptime[2].innerHTML = he.getSeconds();
    temptime[1].innerHTML = he.getMinutes();
    temptime[0].innerHTML = hour(he.getHours());
}
document.getElementsByClassName('feature-bth')[0].addEventListener('click', ()=>
{
    clearInterval(time);
   
    let ms = 0;
    let s =  0;
    let m = 0;
    let h = 0;

    var time = setInterval(timer_start, 1000/60);
  
    function timer_start(){

        let he = new Date();
        temptime[2].innerHTML = ms;
        temptime[1].innerHTML = s;
        temptime[0].innerHTML = m;
        ms++;
        if(ms === 60) {ms=0; s++ }
        if(s === 60) {s=0; m++ }
        if(m === 60) {m=0; h++ }
    }

});


