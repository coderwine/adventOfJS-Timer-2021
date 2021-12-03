/*
- Start the timer by clicking on the start link/button. (done)
- Once the user clicks start, the word start will change to stop. Then, the user can click on the stop button to make the timer stop. (WIP)
- Click on the gear icon to change the length (minutes and seconds) of the timer. (Need built)
- Once the timer finishes, the ring should change from green to red and an alert message is passed to the browser. (Need Built)
*/

const trigger = document.querySelector('.start');
const min = document.querySelector('.minutes').children[0];
const sec = document.querySelector('.seconds').children[0];
let stopper;

trigger.addEventListener('click', checkStatus);
// stopper.addEventListener('click', stopFunction);

let minutes = min.value;
let seconds = sec.value;
// let timer;

function checkStatus() {
    console.log(trigger.id);
    let id = trigger.id
    
    switch(id) {
        case id === 'stop':
            stopFunction();
            break;
        case id === 'start':
            countDown();
            break;
        default :
            countDown();    
    }

}

function countDown() {
    console.log('Count Down!')
    
    let timer = setInterval(sandTimer,1000);

    trigger.innerText = 'stop';
    trigger.setAttribute('id', 'stop');
    stopper = document.getElementById('stop').addEventListener('click', stopFunction);

    // setInterval(() => {
    function sandTimer() {
        if(seconds == 00) {
            min.value = minutes-1;
            seconds = 59
        } else {
            seconds-=1;
        }
        console.log(seconds)
        sec.value = seconds;
    }
    // },1000)

    function stopFunction () {
        console.log('Stop Timer!')
    
        clearInterval(timer);
    
        trigger.innerText = 'start';
        trigger.setAttribute('id', 'start');
    }
}

//NOTE Status - counting down.  Need to fix the stop, add a zero to single digit seconds, add styling for when the timer gets to zero and set up the gear.