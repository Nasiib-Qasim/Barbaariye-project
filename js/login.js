let login_title = document.querySelector("#login-title");
const formLogin = document.querySelector("#regester");
const username = document.querySelector("#username");
const username_container = document.querySelector(".username-container");
const email = document.querySelector("#email");
const email_container = document.querySelector(".email-container");
const password = document.querySelector("#password");
const password_container = document.querySelector(".password-container");
const confirmPassword = document.querySelector("#confirmPassword");
const confirmPassword_container = document.querySelector(".confirmPassword-container");
const swich_text = document.querySelector("#swich-author");
const swich_from = document.querySelector("#swich-from");
const btn = document.querySelector("#btn");

let singIn = true;

document.body.addEventListener("click", (e) => {
    if (e.target.id !== "swich-from") {
        return;
    }
    swichFrom();
});

function swichFrom() {
    singIn = !singIn;

    // Nadiifi fariimaha qaladka iyo guusha
    clearMessages();

    if (singIn) {
        login_title.textContent = "Welcome Back";
        username_container.style.display = "none";
        confirmPassword_container.style.display = "none";
        username.value = "";
        confirmPassword.value = "";
        swich_text.innerHTML = `Do not have an account? <a href="#" id="swich-from">Register now</a>`;
        btn.textContent = "Sign In";
    } else {
        login_title.textContent = "Registration";
        username_container.style.display = "block";
        confirmPassword_container.style.display = "block";
        btn.textContent = "Register";
        swich_text.innerHTML = `Already have an account? <a href="#" id="swich-from">Sign In</a>`;
    }
}

// Hawl cusub oo nadiifinaysa fariimaha qaladka iyo guusha
function clearMessages() {
    const inputs = [username, email, password, confirmPassword];
    inputs.forEach(input => {
        let parentElement = input.parentElement;
        parentElement.classList.remove("error");
        parentElement.classList.remove("success");
        let small = parentElement.querySelector("small");
        small.textContent = ""; // Nadiifi qoraalka
        small.style.display = "none"; // Qari qoraalka
    });
}

// Validation 
const checkEmpty = (elements) => {
    let isEmpty = false;
    elements.forEach(element => {
        if (element.value.trim() === '') {
            showError(element, 'Input is required');
            isEmpty = true;
        } else {
            showSeccuss(element);
        }
    });
    return isEmpty;
};

function showError(input, message) {
    let parentElement = input.parentElement;
    parentElement.classList.add("error");
    let small = parentElement.querySelector("small");
    small.textContent = message;
    small.style.display = "block"; // Muujin qoraalka
}

function showSeccuss(input) {
    let parentElement = input.parentElement;
    parentElement.classList.add("success");
}

function checkEmail(input) {
    let reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (reg.test(input.value)) {
        showSeccuss(input);
        return true;
    } else {
        showError(input, 'Please enter a valid email');
        return false;
    }
}

function checkPassword(input, min, max) {
    if (input.value.length < min) {
        showError(input, `Please enter at least ${min} characters`);
        return false;
    } else if (input.value.length > max) {
        showError(input, `Please enter a maximum of ${max} characters`);
        return false;
    } else {
        showSeccuss(input);
        return true;
    }
}

function checkSimilarPassword(confirmPassword, password) {
    if (password.value !== confirmPassword.value) {
        showError(confirmPassword, "Passwords do not match");
        return false;
    } else {
        showSeccuss(confirmPassword);
        return true;
    }
}

formLogin.addEventListener("submit", function(e) {
    e.preventDefault();
    const user = {
        username: singIn ? undefined : username.value,
        email: email.value,
        password: singIn ? undefined : password.value,
    };

    if (singIn) {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const existingUser = users.find((user) => 
            user.email === email.value && user.password === password.value
        );

        if (existingUser) {
            localStorage.setItem("onlineUser", JSON.stringify(existingUser));
            window.location.href = 'index.html';
        } else {
            showError(email, "User does not exist");
            showError(password, "User does not exist");
        }
    } else {
        const usersFromLocal = JSON.parse(localStorage.getItem("users")) || [];
        const existingUser = usersFromLocal.find((user) => 
            user.email === email.value
        );

        if (existingUser) {
            showError(email, "User already exists");
            email.value = "";
            password.value = "";
            return;
        }
        
        const isEmpty = checkEmpty([username, email, password, confirmPassword]);
        const isEmailValid = checkEmail(email);
        const isPasswordValid = checkPassword(password, 6, 10);
        const doPasswordsMatch = checkSimilarPassword(confirmPassword, password);

        if (isEmpty || !isEmailValid || !isPasswordValid || !doPasswordsMatch) {
            return
        } else {
            usersFromLocal.push(user);
            localStorage.setItem('users', JSON.stringify(usersFromLocal));
            alert("Registration Successful");
            swichFrom();
        }
    }
});