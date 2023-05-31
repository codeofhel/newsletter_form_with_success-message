function nhe() {
    console.log(this);
}

nhe();

document.querySelector("[data-category=subscribe]").addEventListener("click", (evt) => {
    evt.preventDefault();
    const email = document.querySelector("#eml");
    const message = document.querySelector(".inputTitle p");

    function toggleEmailConfig(setStyle) {
        if (setStyle) {
            email.classList.add("emailErrorMessage");
            message.classList.replace("hide", "show");
        } else {
            email.classList.remove("emailErrorMessage");
            message.classList.replace("show", "hide");
        }
    }
    
    email.addEventListener("click", () => {
        toggleEmailConfig(false);
    })
    
    if (!validateEmail(email)) {
        toggleEmailConfig(true);
        return false;
    }

    toggleEmailConfig(false);
    showSuccessMessage();
})



function validateEmail(eml) {
    const mailFormat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (!eml.value.match(mailFormat)) {
        return false;
    }
    return true;
}

function showSuccessMessage() {
    const newsletter = document.querySelector(".newsletter")
    const successMessasge = document.querySelector(".successMessasge");
    newsletter.classList.replace("show", "hide");
    successMessasge.classList.replace("hide", "show");

    document.querySelector("[data-category=hideMessage]").addEventListener("click", () => {
        newsletter.classList.replace("hide", "show");
        successMessasge.classList.replace("show", "hide");
    })
}