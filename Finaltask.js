
const greeting = document.getElementById('greeting');
const greetings = [
    'Welcome to My Restaurant!',
    'Enjoy Our Delicious Dishes!',
    'Savor the Best Tastes in Town!',
    'Your Culinary Adventure Awaits!'
];
let index = 0;

setInterval(() => {
    index = (index + 1) % greetings.length;
    greeting.textContent = greetings[index];
}, 4000);


const prices = document.querySelectorAll('.price');
prices.forEach(price => {
    price.addEventListener('mouseover', () => {
        price.style.fontSize = '1.5rem';
    });
    price.addEventListener('mouseout', () => {
        price.style.fontSize = '1.2rem';
    });
});


const buyButtons = document.querySelectorAll('.buy');
buyButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const card = button.parentElement;
        const image = card.querySelector('img');
        image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgvC3F9_2K5vCBxWMe1E5w0b_UvlgWxTLKkw&s';
    });
});


const form = document.getElementById('form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validate inputs
    const inputs = form.querySelectorAll('input, textarea');
    let valid = true;

    inputs.forEach(input => {
        if (!input.value) {
            valid = false;
            input.style.borderColor = 'red';
        } else {
            input.style.borderColor = '#ddd';
        }
    });

    if (valid) {
        const inputs = document.querySelectorAll('#myForm input');

// Add an event listener to each input field
      
        inputs.forEach(input => {
            input.addEventListener('change', () => {
                input.value = input.value.toUpperCase();
                input.style.color = 'blue';
            });
        });

       
        formMessage.textContent = 'Form submitted successfully!';
        formMessage.style.color = 'green';
    } else {
        formMessage.textContent = 'Please fill in all fields.';
        formMessage.style.color = 'red';
    }
});

//....
// Get all input fields inside the form
const inputs = document.querySelectorAll('#form input');

// Add an event listener to each input field for the "input" event
inputs.forEach(input => {
    input.addEventListener('input', () => {
        input.value = input.value.toUpperCase(); // Convert text to uppercase
        input.style.color = 'blue'; // Set text color to blue
    });
});


