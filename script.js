let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;
let isRunning = false;

function startStopwatch() {
    if (!isRunning) {
        timer = setInterval(updateStopwatch, 1000);
        isRunning = true;
        document.querySelector('button:nth-child(1)').textContent = 'Pause';
    } else {
        clearInterval(timer);
        isRunning = false;
        document.querySelector('button:nth-child(1)').textContent = 'Resume';
    }
}

function updateStopwatch() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    updateDisplay();
}

function pauseStopwatch() {
    clearInterval(timer);
    isRunning = false;
    document.querySelector('button:nth-child(1)').textContent = 'Start';
}



function resetStopwatch() {
    clearInterval(timer);
    // Remove all laps
    const lapList = document.getElementById('lapList');
    while (lapList.firstChild) {
        lapList.removeChild(lapList.firstChild);
    }
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
    document.querySelector('button:nth-child(1)').textContent = 'Start';

}



function recordLap() {
    const lapTime = formatTime(hours, minutes, seconds);
    const lapList = document.getElementById('lapList');
    const lapItem = document.createElement('li');
    lapItem.textContent = lapTime;
    lapList.insertBefore(lapItem, lapList.firstChild);
}

function updateDisplay() {
    const formattedTime = formatTime(hours, minutes, seconds);
    document.querySelector('.display').textContent = formattedTime;
}

function formatTime(h, m, s) {
    return (
        (h < 10 ? '0' + h : h) +
        ':' +
        (m < 10 ? '0' + m : m) +
        ':' +
        (s < 10 ? '0' + s : s)
    );
}
