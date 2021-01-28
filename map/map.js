import { adventures } from '../data.js';

// get DOM element for ul in html
const ul = document.querySelector('ul');

// get user input from localStorage
const user = JSON.parse(localStorage.getItem('USER'));
console.log(user);
// if all adventures are completed, redirect to results page (boolean)
let completedAllAdventures = true;

for (let adventure of adventures) {
    // if this adventure is NOT in the completed object of user
    if (!user.completed[adventure.id]) {
        completedAllAdventures = false;
    }
}

// // If the user has <=0 health, redirect to the results page
if (user.health <= 0 || completedAllAdventures) {
    window.location = '../results';
}

for (let adventure of adventures) {
    const li = document.createElement('li');
    const a = document.createElement('a');

    a.textContent = adventure.title;
    a.href = `../adventure/?adventure=${adventure.id}`;
    // - If the quest has been completed, cross it out
    // - If the quest has NOT been completed it should be a link to the correct quest
    li.append(a);
    ul.append(li);


}