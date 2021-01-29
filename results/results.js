import { healthyMessages, deadMessages, aliveMessages } from './messages.js';
import { healthResult, coolResult } from './result-utils.js';

// get user info from localStorage
const user = JSON.parse(localStorage.getItem('USER'));

// get dom elements for results
const resultMessage = document.getElementById('result-message');

// call healthResult with the users health score to get corresponding message from function
const finalHealth = healthResult(user.health);

// call coolResult with the users health score to get corresponding message from function
const finalCool = coolResult(user.coolness);

// go into result messages object and get corresponding message based on users scores
const aliveMessage = aliveMessages[finalHealth];

// if the user is dead, only display dead messages.  If healthy, only display the healthy messages
let coolMessages = null;

if (finalHealth === 'dead') {
    coolMessages = deadMessages;
} else {
    coolMessages = healthyMessages;
}

// get coolness messages from the message object
const coolnessMessage = coolMessages[finalCool];

// create outcome message to inject into html
const outcome = `Well, ${user.name} the ${user.animal}, ${aliveMessage}. ${coolnessMessage}`;

resultMessage.textContent = outcome;

const resetButton = document.getElementById('reset');

resetButton.addEventListener('click', () => {
    localStorage.clear();
    window.location = '../';
});
