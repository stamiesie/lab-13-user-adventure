import { adventures } from '../data.js';
import { findById } from '../utils.js';

// get DOM elements
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const img = document.querySelector('img');
const form = document.querySelector('form');

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
    label.type = choice.id;
    radio.name = 'choices';

    label.append(span, radio);
    form.append(label);
}