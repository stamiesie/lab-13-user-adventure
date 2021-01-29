import { adventures } from '../data.js';
import { findById } from '../utils.js';

// get DOM elements
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const img = document.querySelector('img');
const form = document.querySelector('form');
const resultsSpan = document.querySelector('#results-span');
const backToMap = document.querySelector('#back-to-map');

const USER = 'USER';

// get the adventure id from the URL
const params = new URLSearchParams(window.location.search);

// get the value of the id key in the URL query string
const adventureId = params.get('adventure');

// use URL id to `findById` (match) in adventure data (import)
const adventure = findById(adventures, adventureId);

// populate the html elements with the matched adventure
h1.textContent = adventure.title;
p.textContent = adventure.description;
img.src = `../assets/${adventure.image}`;

// loop through choices to populate on page
for (let choice of adventure.choices) {
    const radio = document.createElement('input');
    const label = document.createElement('label');
    const span = document.createElement('span');

    span.textContent = choice.description;

    radio.type = 'radio';
    radio.value = choice.id;
    radio.name = 'choices';

    label.append(span, radio);
    form.append(label);
}

// submit button
const button = document.createElement('button');
button.classList.add('button');
button.textContent = 'Choose';

form.append(button);

// event listener
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // get user choice from form
    const formData = new FormData(form);

    // on submit, recalculate user's health and cool points
    const selectionId = formData.get('choices');

    // get data from localStorage about this choice
    const choice = findById(adventure.choices, selectionId);
    const user = JSON.parse(localStorage.getItem('USER'));

    // update user points
    user.health += choice.health;
    user.coolness += choice.coolness;

    // inject result message into hidden span
    resultsSpan.textContent = choice.result;

    // use adventureId to update completed adventures dynamically
    user.completed[adventureId] = true;

    // put new stats in localStorage (stringified)
    localStorage.setItem('USER', JSON.stringify(user));

    // back to map button
    backToMap.addEventListener('click', () => {
        window.location = '../map';
    });
});
