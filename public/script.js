document.addEventListener('DOMContentLoaded', (event) => {
    const loginLink = document.querySelector('a[href="#login"]');
    const welcomeLink = document.querySelector('a[href="#welcome"]');
    const profileLink = document.querySelector('a[href="#profile"]');
    const welcomeSection = document.getElementById('welcome');
    const loginSection = document.getElementById('login-section');
    const profileSection = document.getElementById('profile-section');

    // Function to hide all sections
    function hideAllSections() {
        welcomeSection.style.display = 'none';
        loginSection.style.display = 'none';
        profileSection.style.display = 'none';
    }

    // Function to show the login form
    function showLoginForm() {
        hideAllSections();
        loginSection.style.display = 'block';
    }

    // Function to show the welcome section
    function showWelcomeSection() {
        hideAllSections();
        welcomeSection.style.display = 'block';
    }

    // Function to show the profile section
    function showProfileSection() {
        hideAllSections();
        profileSection.style.display = 'block';
    }

    // Event listener for the login link
    loginLink.addEventListener('click', (e) => {
        e.preventDefault();
        showLoginForm();
    });

    // Event listener for the welcome link
    welcomeLink.addEventListener('click', (e) => {
        e.preventDefault();
        showWelcomeSection();
    });

    // Event listener for the profile link
    profileLink.addEventListener('click', (e) => {
        e.preventDefault();
        showProfileSection();
    });
});
