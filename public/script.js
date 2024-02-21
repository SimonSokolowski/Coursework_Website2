document.addEventListener('DOMContentLoaded', (event) => {
    const loginLink = document.querySelector('a[href="#login"]');
    const welcomeLink = document.querySelector('a[href="#welcome"]');
    const profileLink = document.querySelector('a[href="#profile"]');
    const feedLink = document.querySelector('a[href="#feed"]');
    const welcomeSection = document.getElementById('welcome');
    const loginSection = document.getElementById('login-section');
    const profileSection = document.getElementById('profile-section');
    const signupSection = document.getElementById('signup-section');
    const feedSection = document.getElementById('feed-section');

    // Function to hide all sections
    function hideAllSections() {
        welcomeSection.style.display = 'none';
        loginSection.style.display = 'none';
        profileSection.style.display = 'none';
        signupSection.style.display = 'none';
        feedSection.style.display = 'none';
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

    // Function to show the welcome section
    function showFeedSection() {
        hideAllSections();
        feedSection.style.display = 'block';
    }

    // Function to show the profile section
    function showProfileSection() {
        hideAllSections();
        profileSection.style.display = 'block';
    }

    // Function to show the signup form
    function showSignUpForm() {
        hideAllSections();
        signupSection.style.display = 'block';
    }

    // Event listener for the login link
    loginLink.addEventListener('click', (e) => {
        e.preventDefault();
        showLoginForm();
    });

    // Event listener for the login link
    feedLink.addEventListener('click', (e) => {
        e.preventDefault();
        showFeedSection();
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

    const showSignUpButton = document.getElementById('showSignUpButton');
    const showLoginFormButton = document.getElementById('showLoginForm');

    if (showSignUpButton) {
        showSignUpButton.addEventListener('click', showSignUpForm);
    }

    if (showLoginFormButton) {
        showLoginFormButton.addEventListener('click', showLoginForm);
    }
});
// Get the modal
var modal = document.getElementById('upload-modal');

// Get the button that opens the modal
var btn = document.getElementById('upload-btn');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close-btn')[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = 'block';
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = 'none';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}
