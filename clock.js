let temptime = document.getElementsByClassName('nodes');

let he = new Date();
    temptime[2].innerHTML = he.getSeconds();
    temptime[1].innerHTML = he.getMinutes();
    temptime[0].innerHTML = hour(he.getHours()); //24 to 12 through function hour

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
    temptime[2].innerHTML = he.getSeconds();
    temptime[1].innerHTML = he.getMinutes();
    temptime[0].innerHTML = hour(he.getHours());
}

