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

    // Validasi input nama menggunakan pattern regex
    var namePattern = /^[A-Za-z ]+$/;
    if (!namePattern.test(nameInput.value)) {
        nameInput.classList.add("error"); // Tambahkan class "error" untuk merubah border menjadi merah
        showErrorMessage(nameInput, "Please enter your name using alphabets only.");
        return false;
    } else {
        nameInput.classList.remove("error"); // Hilangkan class "error" jika input valid
    }

    // Validasi email menggunakan input type="email"
    if (!emailInput.checkValidity()) {
        emailInput.classList.add("error"); // Tambahkan class "error" untuk merubah border menjadi merah
        showErrorMessage(emailInput, "Please enter a valid email address.");
        return false;
    } else {
        emailInput.classList.remove("error"); // Hilangkan class "error" jika input valid
    }

    // Validasi dropdown box
    if (interestInput.value === "") {
        interestInput.classList.add("error"); // Tambahkan class "error" untuk merubah border menjadi merah
        showErrorMessage(interestInput, "Please select an option from the dropdown.");
        return false;
    } else {
        interestInput.classList.remove("error"); // Hilangkan class "error" jika input valid
    }

    // Formulir valid, dapatkan data dari formulir dan kirim ke server
    // Contoh: var formData = new FormData(document.querySelector('form'));
    // Kirimkan formData ke server menggunakan AJAX atau submit form biasa
    return true;
}

function showErrorMessage(inputElement, message) {
    var errorMessageElement = document.createElement("div");
    errorMessageElement.className = "error-message";
    errorMessageElement.textContent = message;

    var container = inputElement.parentElement;
    container.appendChild(errorMessageElement);
}
