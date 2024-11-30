let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let displayTime = document.getElementById("displayTime");
let displayMilliseconds = document.getElementById("miliSec");
let timer = null;
let lastUpdateTime = null;

function stopwatch() {
    let now = Date.now();
    let deltaTime = now - lastUpdateTime;
    lastUpdateTime = now;

    milliseconds += deltaTime;

    while (milliseconds >= 1000) {
        milliseconds -= 1000;
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
            if (minutes >= 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds.toString().substring(0, 2);

    displayTime.innerHTML = h + ":" + m + ":" + s;
    displayMilliseconds.innerHTML = ":" + ms;
}


function watchStart() {
    if (timer === null) {
        lastUpdateTime = Date.now();
        timer = setInterval(stopwatch, 10);
    }
}

function watchStop() {
    clearInterval(timer);
    timer = null;
}

function watchReset() {
    clearInterval(timer);
    timer = null;
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    displayTime.innerHTML = "00:00:00";
    displayMilliseconds.innerHTML = ":00";
}