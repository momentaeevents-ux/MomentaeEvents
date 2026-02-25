# EmailJS Email Template - Copy & Paste Ready

## Template Name
```
template_momentae
```

## Email Subject (Copy exactly)
```
New Event Inquiry from {{from_name}} - {{event_type}}
```

## Email Body (Copy exactly)
```
Hello,

You have received a new event inquiry from your website. Here are the details:

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

---

## Step-by-Step in EmailJS

1. Go to: **Email Templates**
2. Click: **Create New Template**
3. Fill in:

### Template Name
```
template_momentae
```

### Service
Select: **Your Gmail Service**

### Email Recipient
```
{{to_email}}
```

### Email Subject
```
New Event Inquiry from {{from_name}} - {{event_type}}
```

### Email Content (Text)
```
Hello,

You have received a new event inquiry from your website. Here are the details:

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

4. Click: **Save Template**

---

## Variables Reference

| Variable | Where it comes from |
|----------|-------------------|
| `{{from_name}}` | Contact form "Your Name" field |
| `{{from_email}}` | Contact form "Your Email" field |
| `{{phone_number}}` | Contact form "Your Phone Number" field |
| `{{event_type}}` | Contact form "Event Type" dropdown |
| `{{message}}` | Contact form "Your Message" textarea |
| `{{to_email}}` | momentaeevents@gmail.com (hardcoded) |
| `{{reply_to}}` | Automatically set to client's email |

---

## JavaScript Code in script.js

The form sends this data (you don't need to change this):

```javascript
emailjs.send("service_momentae", "template_momentae", {
    from_name: name,              // "Raj Kumar"
    from_email: email,            // "raj@example.com"
    phone_number: phone,          // "9876543210"
    event_type: eventType,        // "Wedding"
    message: message,             // "I want to book..."
    to_email: "momentaeevents@gmail.com",  // recipient
    reply_to: email               // reply goes to client
});
```

---

## Your IDs to Update

### In js/script.js Line 4:
Replace this:
```javascript
emailjs.init("c4fb40e0c3a2d3b4e5f6g7h8i9j0k1l2");
```

With your Public Key:
```javascript
emailjs.init("YOUR_PUBLIC_KEY_HERE");
```

### In js/script.js Line 27:
Make sure these match your EmailJS setup:
```javascript
emailjs.send("service_momentae", "template_momentae", {
    //    ↑ Your Service ID from Email Services
    //                            ↑ Template name (should be: template_momentae)
```

---

## Quick Reference Card

Save this for quick lookup:

```
EMAILJS SETUP

Public Key Location: Account → API Keys
Service ID Location: Email Services → Your Gmail Service
Template Location: Email Templates → template_momentae

Files to Update:
- js/script.js (Line 4: Public Key)
- js/script.js (Line 27: Verify Service ID)

Test Email To: momentaeevents@gmail.com
Customer Reply To: Their email address (automatic)

Contact Form Fields:
- name (required)
- email (required) 
- phone (optional)
- eventType (optional)
- message (required)
```

---

## Common Issues

**Q: Email not sending?**
A: Check these in order:
1. Public Key correct in script.js line 4?
2. Gmail connected in Email Services?
3. Template exists and is named exactly "template_momentae"?
4. All variables are `{{like_this}}`?

**Q: Email arrives but looks wrong?**
A: Check template doesn't have HTML enabled if you want plain text

**Q: Where's my email?**
A: Check spam folder, add momentaeevents@gmail.com to contacts

**Q: Do I need to pay?**
A: No, EmailJS free tier allows 200 emails/month

---

## Testing Template

Before deploying, test it:
1. Go to Email Templates
2. Click your template
3. Click "Test It" button
4. Fill in sample values
5. Check if email arrives

---

Done! Your email system is ready to receive inquiries! 🎉
