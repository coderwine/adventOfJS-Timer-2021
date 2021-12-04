/*
- Start the timer by clicking on the start link/button. (DONE)
- Once the user clicks start, the word start will change to stop. Then, the user can click on the stop button to make the timer stop. (DONE)
- Click on the gear icon to change the length (minutes and seconds) of the timer. (WIP)
- Once the timer finishes, the ring should change from green to red and an alert message is passed to the browser. (DONE)
*/

const settingOne = document.querySelector('button');
const min = document.querySelector('.minutes').children[0];
const sec = document.querySelector('.seconds').children[0];
const ring = document.querySelector('.ring');
const gear = document.querySelector('.settings');

settingOne.addEventListener('click',checkStatus);
gear.addEventListener('click', setNewTime);

let minutes = min.value;
let seconds = sec.value;
let timer;
let position = `start`;

//! CHECK STATE
function checkStatus() {
    
    // console.log('CHECK', position)

    if (position === 'start') {
        countDown();
    } else {
        stopFunction();
    }

}

//! START
function countDown() {
    // console.log('Count Down!')
    timer = setInterval(sandTimer,1000);
}

//! TIMER VALUE
function sandTimer() {
    if(seconds == 00) {
        if (min.value == 00 && sec.value == 00) {
            ring.className = 'ring ending circle'
            stopFunction();
        } else {
            min.value = minutes-1;
            seconds = 59
        }
    } else {
        sec.value.length === 1 ? 
            seconds = `0${(seconds - 1)}` :
            sec.value[0] == 0 || sec.value == 10 ?
            seconds = `0${(seconds - 1)}` :
            seconds -= 1;

    }

    sec.value = seconds.toString();
    position = 'stop'
}

//! STOP  
function stopFunction () {
    clearInterval(timer);
    position = `start`;
}

function setNewTime () {
    // Create Form
    const wrapper = document.querySelector('.wrapper');
    const div = document.createElement('div');
    const form = document.createElement('form');
    const p = document.createElement('p');
    const inputOne = document.createElement('input');
    const inputTwo = document.createElement('input');
    const btn = document.createElement('button');
    const close = document.createElement('button');
    
    // Attributes to Form
    div.style = `
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        height: 200px; 
        width: 500px; 
        background-color: rgba(0,0,0,.5); 
        position: fixed; 
        bottom: 10px;
        border: .01em solid white;
        border-radius: 10px;
        `
    form.setAttribute('onSubmit', (event) => changeTime(event))
        btn.setAttribute('type', 'submit')
        btn.innerText = 'Update Time'
        close.innerText = 'Cancel'

    // Build Form 
    form.appendChild(p)
    form.appendChild(inputOne)
    form.appendChild(inputTwo)
    form.appendChild(close)
    form.appendChild(btn)
    div.appendChild(form);
    wrapper.appendChild(div);
    console.log(form)
}

function changeTime(event) {    
    event.preventDefault();
    console.log('Changed Time HIT')
}


//NOTE : Need to build user input of custom timer.