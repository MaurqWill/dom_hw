// Array of products
let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];

// Function to display products
function displayProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        let productDiv = document.createElement('div');
        productDiv.innerHTML = `
            <h2>${product.name}</h2>
            <p>Price: $${product.price.toFixed(2)}</p>
            <p>${product.description}</p>
        `;
        productList.appendChild(productDiv);
    });
}

// Event listener to display products on page load
document.addEventListener('DOMContentLoaded', displayProducts);

// Form submission handling
document.getElementById('user-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let user = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    if (validateForm(user)) {
        console.log(user);
        alert("Form submitted successfully!");
    } else {
        alert("Please fill out all fields.");
    }
});

// Form validation function
function validateForm(user) {
    return user.name && user.email && user.message;
}

// Function to change color of the box element
function changeColor() {
    const box = document.getElementById('box');
    box.style.backgroundColor = box.style.backgroundColor === 'lightblue' ? 'lightgreen' : 'lightblue';
}

// Function for hover effect
function hoverEffect(element) {
    element.style.backgroundColor = 'lightyellow';
}

// Function to reset hover effect
function resetEffect(element) {
    element.style.backgroundColor = 'lightcoral';
}

// Function to change button style
function changeButtonStyle(button) {
    button.style.backgroundColor = 'lightblue';
    button.style.color = 'white';
    button.style.border = '2px solid blue';
}
