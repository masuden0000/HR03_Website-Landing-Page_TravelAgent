// HAMBUGER MENU
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach((n) => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// VALIDATION FORM
function validateForm() {
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var interestInput = document.getElementById("interest");

    var namePattern = /^[A-Za-z ]+$/;
    if (!namePattern.test(nameInput.value)) {
        showErrorMessage(nameInput, "Please enter your name using alphabets only.");
        return false;
    }

    if (!emailInput.checkValidity()) {
        showErrorMessage(emailInput, "Please enter a valid email address.");
        return false;
    }

    if (interestInput.value === "") {
        showErrorMessage(interestInput, "Please select an option from the dropdown.");
        return false;
    }

    return true;
}

// REVEAL SCROLL ANIMATION
const sr = ScrollReveal({
    distance: "30px",
    duration: 1800,
    reset: true,
});

sr.reveal(
    `.title, .our-package-title, .point, .call-us-title, .call-us-paragraph`, {
        origin: "top",
        interval: 200,
    }
);

sr.reveal(`.home__footer, .fitur_container`, {
    origin: "bottom",
    interval: 300,
});

sr.reveal(`figure, footer`, {
    origin: "left",
    delay: 400,
});

sr.reveal(`footer`, {
    origin: "left",
});

sr.reveal(`aside`, {
    origin: "right",
    delay: 800,
});