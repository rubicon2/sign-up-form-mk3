const SIGNUP_FORM = document.querySelector("#signup-form");
const PASSWORD_INPUT = document.querySelector("#password");
const PASSWORD_CONFIRM_INPUT = document.querySelector("#password-confirm");
const PASSWORD_CONFIRM_ERROR = document.querySelector("#password-confirm + .form-error");

SIGNUP_FORM.addEventListener("submit", (e) => {
    e.stopPropagation();
    e.preventDefault();
    checkPasswords(e);
})

PASSWORD_INPUT.addEventListener("input", (e) => {
    checkPasswords(e);
})

PASSWORD_CONFIRM_INPUT.addEventListener("input", (e) => {
    checkPasswords(e);
})

function checkPasswords(e) {
    if (PASSWORD_INPUT.value != "") {
        if (PASSWORD_INPUT.value === PASSWORD_CONFIRM_INPUT.value) {
            PASSWORD_CONFIRM_INPUT.classList.remove("input-error");
            PASSWORD_CONFIRM_ERROR.classList.add("invisible");
            if (e.currentTarget === SIGNUP_FORM) {
                SIGNUP_FORM.submit();
            }
        } else if (PASSWORD_CONFIRM_INPUT.value != "") {
            PASSWORD_CONFIRM_INPUT.classList.add("input-error");
            PASSWORD_CONFIRM_ERROR.classList.remove("invisible");
        }
    } 
}