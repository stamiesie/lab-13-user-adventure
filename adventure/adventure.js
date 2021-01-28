import { adventures } from '../data.js';
import { findById } from '../utils';



// get DOM elements
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const img = document.querySelector('img');
const form = document.querySelector('form');

// get the adventure id from the URL
const params = new URLSearchParams(window.location.search);

// get the value of the id key in the URL query string
const adventureId = params.get('id');

// use URL id to `findById` in adventure data (import)

