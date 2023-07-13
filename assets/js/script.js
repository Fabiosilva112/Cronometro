let hundredths = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let control

let bt = document.getElementById("continues")

function start() {

    control = setInterval(function () {

        if ( hundredths < 99) {
            hundredths++;
            if (hundredths < 10) {
                hundredths = "0"+hundredths
            }

            Hundredths.innerHTML = ":"+hundredths;
        }

        if (
            hundredths == 99) {

            hundredths = -1;
        }

        if (
            hundredths == 0) {
            seconds++;
            if (seconds < 10) { seconds = "0" + seconds }
            Seconds.innerHTML = ":" + seconds;
        }

        if (seconds == 59) {
            seconds = -1;
        }

        if ((
            hundredths == 0) && (seconds == 0)) {
            minutes++;
            if (minutes < 10) { minutes = "0" + minutes }
            Minutes.innerHTML = ":" + minutes;
        }

        if (minutes == 59) {
            minutes = -1;
        }

        if ((
            hundredths == 0) && (seconds == 0) && (minutes == 0)) {
            hours++;
            if (hours < 10) { hours = "0" + hours }
            Hours.innerHTML = hours;
        }
    },10)


    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
    document.getElementById("continues").disabled = true;
}

function stop() {
    clearInterval(control);
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
    document.getElementById("continues").disabled = false;
}

function reset() {
    clearInterval(control);
    hundredths = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    Hundredths.innerHTML = ":00";
    Seconds.innerHTML = ":00";
    Minutes.innerHTML = ":00";
    Hours.innerHTML = "00";

    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
    document.getElementById("continues").disabled = true;
    
}

function reiniciar(){
    document.getElementById("continues").disabled = true; 
}

bt.addEventListener('click', reiniciar)
