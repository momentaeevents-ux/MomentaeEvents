# 🔐 Complete Code Reference

## Current js/script.js (Updated and Ready)

Your `js/script.js` file is already updated with everything needed!

### What to Change:

**Line 4:** Replace this placeholder with your PUBLIC KEY

```javascript
// BEFORE (Current):
emailjs.init("c4fb40e0c3a2d3b4e5f6g7h8i9j0k1l2");

// AFTER (Replace with your key):
emailjs.init("YOUR_ACTUAL_PUBLIC_KEY_HERE");

// EXAMPLE:
emailjs.init("abc123def456ghi789jkl012mnop345");
```

### Line 27: Verify Service ID and Template ID

```javascript
// CURRENT (should work as-is if you use exact template names):
emailjs.send("service_momentae", "template_momentae", {

// If you named them differently, update accordingly:
emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_NAME", {
```

---

## How to Get Your Public Key

### Method 1: From EmailJS Dashboard (Easiest)
1. Go to: https://dashboard.emailjs.com/
2. Log in
3. Click: **Account** (top right)
4. Click: **API Keys** (left menu)
5. Copy the **Public Key** (long alphanumeric string)

### Method 2: From EmailJS Website
1. Go to: https://www.emailjs.com/
2. Click: **Manage Service** or **Dashboard**
3. Follow to Account → API Keys

---

## Complete js/script.js Content

Here's what your file looks like (DO NOT CHANGE unless instructed):

```javascript
// Initialize EmailJS with your Public Key
// Get your public key from https://dashboard.emailjs.com/account
emailjs.init("c4fb40e0c3a2d3b4e5f6g7h8i9j0k1l2"); // ← REPLACE THIS

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
```

---

## Email Template Configuration

### In EmailJS Dashboard:

**Go to:** Email Templates → Create New Template

**Fill these fields:**

#### Template Name
```
template_momentae
```

#### Service
```
Select: Your Gmail Service
```

#### Email To
```
{{to_email}}
```

#### Subject Line
```
New Event Inquiry from {{from_name}} - {{event_type}}
```

#### Email Body
```
Hello,

You have received a new event inquiry from your website.

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone_number}}
Event Type: {{event_type}}

Message:
{{message}}

---
Reply to: {{from_email}}
Momentae Events Contact Form
© 2026 All Rights Reserved
```

#### Settings
- Format: Text
- Charset: UTF-8

---

## Form HTML Code

Your contact form in HTML (already in contact.html):

```html
<form id="contactForm">
    <div class="mb-3">
        <input type="text" class="form-control" id="name" 
               placeholder="Your Name" required>
    </div>
    
    <div class="mb-3">
        <input type="email" class="form-control" id="email" 
               placeholder="Your Email" required>
    </div>
    
    <div class="mb-3">
        <input type="tel" class="form-control" id="phone" 
               placeholder="Your Phone Number">
    </div>
    
    <div class="mb-3">
        <select class="form-control" id="eventType">
            <option value="">Select Event Type</option>
            <option value="Wedding">Wedding</option>
            <option value="Corporate Event">Corporate Event</option>
            <option value="Birthday Party">Birthday Party</option>
            <option value="Concert">Concert</option>
            <option value="Other">Other</option>
        </select>
    </div>
    
    <div class="mb-3">
        <textarea class="form-control" id="message" rows="5" 
                  placeholder="Your Message" required></textarea>
    </div>
    
    <button type="submit" class="btn btn-warning w-100">Send Message</button>
</form>

<div id="formMessage" class="mt-3 text-center"></div>
```

---

## HTML Head (Already Updated)

Your HTML files already have this in the `<head>` section:

```html
<!-- Favicon -->
<link rel="icon" type="image/x-icon" href="images/logo.jpg">
<link rel="shortcut icon" type="image/x-icon" href="images/logo.jpg">

<!-- Bootstrap CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">

<!-- Custom CSS -->
<link rel="stylesheet" href="css/style.css">
```

---

## HTML Footer (Already Updated)

Your HTML files already have this before `</body>`:

```html
<!-- Bootstrap JS -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>

<!-- EmailJS -->
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/index.min.js"></script>

<!-- Custom JS -->
<script src="js/script.js"></script>
```

---

## Quick Checklist

```
ONLY 3 THINGS TO DO:

1. [ ] Get Public Key from EmailJS
   - Dashboard → Account → API Keys
   - Copy the Public Key

2. [ ] Update js/script.js Line 4
   - Replace: c4fb40e0c3a2d3b4e5f6g7h8i9j0k1l2
   - With: YOUR actual Public Key
   - Save file

3. [ ] Create Email Template in EmailJS
   - Go to: Email Templates
   - Create New Template
   - Use values from "Email Template Configuration" above
   - Save template

That's it! Email will work! ✅
```

---

## Email Variables Mapping

```
Contact Form Field  →  Email Variable  →  Shows In Email
─────────────────────────────────────────────────────────
Your Name           →  {{from_name}}    →  Client Name: John Doe
Your Email          →  {{from_email}}   →  Email: john@example.com
Your Phone          →  {{phone_number}} →  Phone: 9876543210
Event Type          →  {{event_type}}   →  Event Type: Wedding
Your Message        →  {{message}}      →  Message: [client text]
                       {{to_email}}     →  (hidden - recipient)
                       {{reply_to}}     →  (hidden - reply address)
```

---

## Testing

To test everything works:

1. Open your website
2. Go to Contact page
3. Fill form:
   ```
   Name: Test User
   Email: your-email@gmail.com
   Phone: 9876543210
   Event Type: Wedding
   Message: This is a test message
   ```
4. Click "Send Message"
5. Check:
   - ✅ Success message appears
   - ✅ Form clears
   - ✅ Email arrives in momentaeevents@gmail.com
   - ✅ Email looks professional
   - ✅ Can reply to client's email

---

## Error Messages You Might See

### "emailjs is not defined"
- Solution: Verify EmailJS script is loaded
- Check: All HTML files have EmailJS library in footer

### "Service not found"
- Solution: Service ID doesn't match
- Fix: Copy exact Service ID from Email Services
- Update: script.js line 27

### "Template not found"
- Solution: Template name doesn't match
- Fix: Use exactly: `template_momentae`
- Check: Email Templates in EmailJS

### "Invalid Public Key"
- Solution: Wrong Public Key
- Fix: Copy from Account → API Keys (NOT Private Key)
- Update: script.js line 4

---

## Default Credentials

Already in your code:

```
Admin Email: momentaeevents@gmail.com
Template Name: template_momentae
Service ID: service_momentae
Reply To: Client's Email (automatic)
```

---

## You're All Set! 🎉

Everything is configured. Just:
1. Add your Public Key to js/script.js
2. Create the email template in EmailJS
3. Test it

Then your contact form will send emails automatically!
