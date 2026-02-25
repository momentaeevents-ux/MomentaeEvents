document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let formMessage = document.getElementById("formMessage");

    if(name === "" || email === "" || message === "") {
        formMessage.innerHTML = "<span class='text-danger'>Please fill all fields!</span>";
    } else {
        formMessage.innerHTML = "<span class='text-success'>Message Sent Successfully!</span>";
        this.reset();
    }
});