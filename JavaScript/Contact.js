window.onload = function () {
    document.getElementById("contact-form-button").addEventListener("click",
        async function (event) {
            emailjs.init("user_mlIJr0OHx7aFpvjOuYlvF");
            let formStatus = true;

            let firstName = document.getElementById("firstname-input");
            let lastName = document.getElementById("lastname-input");
            let email = document.getElementById("email-input");
            let message = document.getElementById("message-textarea");

            let firstFail = document.getElementById("first-fail");
            let lastFail = document.getElementById("last-fail");
            let emailFail = document.getElementById("email-fail");
            let messageFail = document.getElementById("message-fail");

            let firstLabel = document.getElementById("firstname-label");
            let lastLabel = document.getElementById("lastname-label");
            let emailLabel = document.getElementById("email-label");
            let messageLabel = document.getElementById("message-label");

            if (firstName.value === "") {
                firstLabel.style.color = 'red';
                firstFail.innerHTML = "Please enter a first name";
                formStatus = false;
            }

            if (lastName.value === "") {
                lastLabel.style.color = 'red';
                lastFail.innerHTML = "Please enter a last name";
                formStatus = false;
            }

            if (email.value === "") {
                emailLabel.style.color = 'red';
                emailFail.innerHTML = "Please enter your email";
                formStatus = false;
            }

            if (message.value === "") {
                messageLabel.style.color = 'red';
                messageFail.innerHTML = "You haven't typed a message yet";
                formStatus = false;
            }

            if (formStatus) {
                event.preventDefault();
                await emailjs.sendForm('trey_hamilton21_gmail_com', 'template_ZYdWKszn', this);
            }

            else {
                return formStatus;
            }
        })
}

function handleInputChange(label, failMessage) {
    if (failMessage.innerHTML != "") {
        failMessage.remove();
    }

    if (failMessage.innerHTML === null) {

    }

    label.style.color = 'white';
}