document.addEventListener('DOMContentLoaded', (event) => {
    const loginLink = document.querySelector('a[href="#login"]');
    const welcomeLink = document.querySelector('a[href="#welcome"]');
    const mainSections = document.querySelectorAll('.main-section');
    const loginSection = document.getElementById('login-section');

    // Function to show the login form and hide main sections
    function showLoginForm() {
        mainSections.forEach(section => {
            section.style.display = 'none'; // Hide main sections
        });
        loginSection.style.display = 'block'; // Show login section
    }

    // Function to show the main sections and hide the login form
    function showMainSections() {
        mainSections.forEach(section => {
            section.style.display = 'block'; // Show main sections
        });
        loginSection.style.display = 'none'; // Hide login section
    }

    // Event listener for the login link
    loginLink.addEventListener('click', (e) => {
        e.preventDefault();
        showLoginForm();
    });

    // Event listener for the welcome link
    welcomeLink.addEventListener('click', (e) => {
        e.preventDefault();
        showMainSections();
    });
});
