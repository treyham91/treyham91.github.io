window.onload = function () {
    document.getElementById("contact").addEventListener("submit",
        function (event) {
            emailjs.init("user_mlIJr0OHx7aFpvjOuYlvF");

            let firstName = document.getElementById("firstname-input").value;
            let lastName = document.getElementById("lastname-input").value;
            let email = document.getElementById("email-input").value;
            let message = document.getElementById("message-textarea").value;

            let firstFail = document.getElementById("first-fail");
            let lastFail = document.getElementById("last-fail");
            let emailFail = document.getElementById("email-fail");
            let messageFail = document.getElementById("message-fail");

            if (firstName === "") {
                firstFail.innerHTML = "Please enter your first name";
                firstFail.style.color = 'red';
            }

            if (lastName === "") {
                lastFail.innerHTML = "Please enter your last name";
                lastFail.style.color = 'red';
            }

            if (email === "") {
                emailFail.innerHTML = "Please enter a valid email";
                emailFail.style.color = 'red';
            }

            if (message === "") {
                messageFail.innerHTML = "You haven't typed a message yet";
                messageFail.style.color = 'red';
                if (window.innerWidth >= 1039) document.getElementById("contact-form-button").style.left = '1210px';
            }

            else {
                event.preventDefault();
                emailjs.sendForm('trey_hamilton21_gmail_com', 'template_ZYdWKszn', this);
            }
        })
}

// Make sure that error messages are hidden when the inputs gets focus
document.getElementById("firstname-input").onfocus(function () {
    document.getElementById("first-fail").remove();
});

document.getElementById("lastname-input").onfocus(function () {
    document.getElementById("last-fail").remove();
});

document.getElementById("email-input").onfocus(function () {
    document.getElementById("email-fail").remove();
});

document.getElementById("message-input").onfocus(function () {
    document.getElementById("message-fail").remove();
});
