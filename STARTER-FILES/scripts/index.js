/*
NOTE: Tasks
- Start the timer by clicking on the start link/button. (DONE)
- Once the user clicks start, the word start will change to stop. Then, the user can click on the stop button to make the timer stop. (DONE)
- Click on the gear icon to change the length (minutes and seconds) of the timer. (DONE)
- Once the timer finishes, the ring should change from green to red and an alert message is passed to the browser. (DONE)
*/

// Targetting current elements.
const settingOne = document.querySelector('button');
const min = document.querySelector('.minutes').children[0];
const sec = document.querySelector('.seconds').children[0];
const ring = document.querySelector('.ring');
const gear = document.querySelector('.settings');
const wrapper = document.querySelector('.wrapper');

// Create Form / Custom time settings.
const div = document.createElement('div');
const form = document.createElement('form');
const p = document.createElement('p');
const inputOne = document.createElement('input');
const inputTwo = document.createElement('input');
const btnWrap = document.createElement('div');
const btn = document.createElement('button');
const close = document.createElement('button');

// Event listeners
settingOne.addEventListener('click',checkStatus);
gear.addEventListener('click', setNewTime);
let setTime; // placeholder variables to detail form event listeners
let cancelBtn;

let minutes;
let seconds;
let timer;
let position = `start`;

//! CHECK STATE
function checkStatus() {
    minutes = min.value;
    seconds = sec.value;

    if (position === 'start') {
        countDown();
    } else {
        stopFunction();
    }

}

//! START
function countDown() {
    timer = setInterval(sandTimer,1000);
    position = 'stop';
    settingOne.textContent = position;
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
}

//! STOP  
function stopFunction () {
    clearInterval(timer);
    position = `start`;
    settingOne.textContent = position;
}

function setNewTime () {

    // Checks to see if form is already open.  If true, won't stack.
    wrapper.children[2] ? wrapper.removeChild(wrapper.children[2]) : null;
    
    // Attributes to Form
    div.style = `
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        height: 150px; 
        width: 500px; 
        background-color: rgba(0,0,0,.5); 
        position: fixed; 
        bottom: 10px;
        border: .01em solid white;
        border-radius: 10px;
        padding: .25em;
        `

    setTime = form.addEventListener('submit', changeTime);
    form.style = `
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 80%;
    `
    p.innerText = 'Please input your preferred time.';
    p.style = `color: whitesmoke;`;
    inputOne.setAttribute('placeholder', 'set minutes');
    inputOne.id = 'inputOne';
    inputOne.type = 'number';
    inputTwo.setAttribute('placeholder', 'set seconds');
    inputTwo.id = 'inputTwo';
    inputTwo.type = 'number';
    btnWrap.id = 'button-wrap';
    btn.setAttribute('type', 'submit');
    btn.innerText = 'Update Time';
    close.innerText = 'Cancel';
    cancelBtn = close.addEventListener('click', clearForm);

    // Build Form 
    form.appendChild(p);
    form.appendChild(inputOne);
    form.appendChild(inputTwo);
    btnWrap.appendChild(close);
    btnWrap.appendChild(btn);
    form.appendChild(btnWrap);
    div.appendChild(form);
    wrapper.appendChild(div);

}

function changeTime(event) {    
    event.preventDefault();
    const newMinutes = document.getElementById('inputOne');
    const newSeconds = document.getElementById('inputTwo');
    min.value = newMinutes.value;
    sec.value = newSeconds.value;
    stopFunction()
    clearForm()
}

function clearForm() {
    div.style = 'display: none'
}
