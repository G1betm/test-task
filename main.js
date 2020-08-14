document.addEventListener("DOMContentLoaded", function () {
    const navBtn = document.querySelector(".nav__btn");
    const nav = document.querySelector(".nav__list");

    navBtn.addEventListener("click", function () {
        navBtn.classList.toggle("close");
        nav.classList.toggle("active");
    });
});

const form = document.getElementById("form");
const email = document.getElementById("email");

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
}

function showSucces(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function checkEmail(input) {
    const regular = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regular.test(input.value.trim())) {
        showSucces(input);
    } else {
        showError(input, "Email is invalid");
    }
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    checkEmail(email);
});
