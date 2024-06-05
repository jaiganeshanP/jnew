// Function to handle 'Call' button click
function callContact() {
    window.location.href = "tel:120-240-9600";
}

// Function to handle 'Let's Work Together' button click
function workTogether() {
    window.location.href = "#contact";
}

// Function to toggle the navigation menu on smaller screens
function toggleMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('show');
}

// Event listener for the menu toggle button (if you have one)
document.querySelector('.menu-toggle').addEventListener('click', toggleMenu);

// Function to handle form submission (if you want to add any validation or actions)
document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;
    const services = [...event.target.service].filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    console.log('Form submitted', { name, email, services, message });

    // Perform AJAX request or other actions here
    alert('Form submitted successfully!');
    
    // Clear the form
    event.target.reset();
});
