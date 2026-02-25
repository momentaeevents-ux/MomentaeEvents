// Initialize EmailJS with your Public Key
// Get your public key from https://dashboard.emailjs.com/account
emailjs.init("c4fb40e0c3a2d3b4e5f6g7h8i9j0k1l2"); // Replace with your actual Public Key

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone") ? document.getElementById("phone").value.trim() : "Not provided";
    let eventType = document.getElementById("eventType") ? document.getElementById("eventType").value : "General Inquiry";
    let message = document.getElementById("message").value.trim();
    let formMessage = document.getElementById("formMessage");

    // Validation
    if(name === "" || email === "" || message === "") {
        formMessage.innerHTML = "<span class='text-danger' style='font-weight: bold;'>❌ Please fill all required fields!</span>";
        return;
    }

    // Show loading state
    formMessage.innerHTML = "<span class='text-info'>Sending your message...</span>";

    // Send email using EmailJS
    // Make sure to use the correct service ID and template ID from your EmailJS account
    emailjs.send("service_momentae", "template_momentae", {
        from_name: name,
        from_email: email,
        phone_number: phone,
        event_type: eventType,
        message: message,
        to_email: "momentaeevents@gmail.com",
        reply_to: email
    }).then(function(response) {
        console.log("Email sent successfully:", response);
        formMessage.innerHTML = "<span class='text-success' style='font-weight: bold; font-size: 16px;'>✅ Message Sent Successfully! We'll contact you soon.</span>";
        document.getElementById("contactForm").reset();
        
        // Clear message after 5 seconds
        setTimeout(function() {
            formMessage.innerHTML = "";
        }, 5000);
    }, function(error) {
        console.error("Email sending failed:", error);
        formMessage.innerHTML = "<span class='text-danger' style='font-weight: bold;'>⚠️ Error sending message. Please try again or contact us directly.</span>";
    });
});