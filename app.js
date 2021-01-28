// get user information from form on homepage
const form = document.querySelector('form');

// event listener for play button
form.addEventListener('submit', (e) => {
    // not 1996
    e.preventDefault();

    // create a FormData object with the user inputs
    const formData = new FormData(form);

    // user start game info
    const user = {
        name: formData.get('name'),
        animal: formData.get('animal'),
        health: 10,
        coolness: 10,
        completed: {},
    };

    // put user into local storage
    const stringedUser = JSON.stringify(user);
    localStorage.setItem('USER', stringedUser);

    // redirect to map page
    window.location = './map';
});
