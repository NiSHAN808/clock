let temptime = document.getElementsByClassName('nodes');

setInterval(clock, 1000);
function hour(h) {
    if (h > 12) {
        return h - 12;
    } else {
        return h;
    }
}
function clock() {
    let he = new Date();
    console.log(he);
    hou = he.getHours();
    _12hours=hour(hou);
    minute = he.getMinutes();
    second = he.getSeconds();
    temptime[2].innerHTML = second;
    temptime[1].innerHTML = minute;
    temptime[0].innerHTML = _12hours;
}

