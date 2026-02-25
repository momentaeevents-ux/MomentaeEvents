# 📧 Complete EmailJS Setup Guide - Momentae Events

## Quick Start (5 Minutes)

### Step 1: Create EmailJS Account
1. Visit: https://www.emailjs.com/
2. Click "Sign Up Free"
3. Sign up using your email (momentaeevents@gmail.com recommended)
4. Verify your email

### Step 2: Get Public Key
1. Log in to EmailJS Dashboard
2. Go to: Account → API Keys
3. Copy the **Public Key** (it's a long alphanumeric string)

### Step 3: Update Code
1. Open: `js/script.js`
2. Find line 4: `emailjs.init("c4fb40e0c3a2d3b4e5f6g7h8i9j0k1l2");`
3. Replace the key with YOUR actual public key
4. Save the file

---

## Step-by-Step Complete Setup

### Setup Email Service (Gmail)

1. **In EmailJS Dashboard:**
   - Go to: **Email Services** (left menu)
   - Click: **Add New Service**
   - Select: **Gmail**
   - Click: **Connect with Gmail**
   - Sign in with your Google account (momentaeevents@gmail.com)
   - Allow permissions
   - Give service a name: **Gmail Service** (or any name)
   - Copy the **Service ID** shown (looks like: `service_abc123def456`)

2. **Save this ID** - you'll need it next

---

### Create Email Template

1. **In EmailJS Dashboard:**
   - Go to: **Email Templates** (left menu)
   - Click: **Create New Template**

2. **Fill in Template Details:**

   **Template Name:** `template_momentae`
   
   **Service:** Select the Gmail service you just created
   
   **Email Recipient:** `{{to_email}}`
   
   **Email Subject:**
   ```
   New Event Inquiry from {{from_name}} - {{event_type}}
   ```

   **Email Content (Plain Text):**
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
   ```

3. Click **Save** template

---

### Update script.js with Your IDs

1. Open: `js/script.js`

2. **Line 4:** Update with YOUR Public Key
   ```javascript
   emailjs.init("YOUR_PUBLIC_KEY_HERE");
   ```

3. **Line 27:** Make sure Service ID matches (or update if different)
   ```javascript
   emailjs.send("service_momentae", "template_momentae", {
   ```
   - Change `"service_momentae"` to your actual Service ID if different
   - Keep `"template_momentae"` as is (or match your template name)

---

## Test Your Setup

1. Go to your website: http://localhost (or your domain)
2. Fill out Contact Form:
   - Name: Test Name
   - Email: your-email@gmail.com
   - Phone: 9876543210
   - Event Type: Wedding
   - Message: Test message

3. Click "Send Message"
4. Check:
   - You should see "✅ Message Sent Successfully"
   - Email should arrive in momentaeevents@gmail.com within 30 seconds
   - Email should arrive at your test email (reply-to)

---

## Email Template Variables

| Variable | Description |
|----------|-------------|
| `{{from_name}}` | Client's full name |
| `{{from_email}}` | Client's email address |
| `{{phone_number}}` | Client's phone number |
| `{{event_type}}` | Type of event (Wedding/Corporate/etc) |
| `{{message}}` | Client's message/inquiry |
| `{{to_email}}` | Your email (momentaeevents@gmail.com) |
| `{{reply_to}}` | Auto-set to client's email |

---

## Troubleshooting

### ❌ "Service not found" Error
- Check Service ID in script.js matches EmailJS dashboard
- Create a new service if unsure
- Copy exact Service ID again

### ❌ "Template not found" Error
- Template name must be exactly: `template_momentae`
- Go to Email Templates and verify name
- Create a new template if needed

### ❌ Emails not arriving
- Check Gmail is connected in Email Services
- Verify Gmail account isn't blocking emails
- Check spam folder
- Try test email from EmailJS dashboard

### ❌ CORS Error in Console
- Public Key might be wrong
- Double-check you're using Public Key, not Private Key
- Try refreshing the page

### ✅ Email goes to spam?
- Add yourself to contacts in Gmail
- Create a filter to mark as "Not Spam"
- Check email formatting in template

---

## Advanced: Auto-Reply to Customer

To send confirmation email to customer, add this in `script.js` after first email:

```javascript
// Send confirmation email to customer
emailjs.send("service_momentae", "template_customer_reply", {
    to_email: email,
    from_name: name,
});
```

Create new template: `template_customer_reply` with customer message.

---

## Security Notes

- ✅ **Public Key is safe** - it's meant to be shared
- ❌ **Never share Private Key** - keep it secret
- ✅ Your form won't send without proper setup
- ✅ All data is secure through EmailJS

---

## Support & Resources

- **EmailJS Docs:** https://www.emailjs.com/docs/
- **EmailJS Dashboard:** https://dashboard.emailjs.com/
- **Gmail Integration:** https://www.emailjs.com/docs/services/gmail/
- **Template Guide:** https://www.emailjs.com/docs/template/

---

## Contact Form Fields (index.html)

```html
<form id="contactForm">
    <input id="name" placeholder="Your Name" required>
    <input id="email" placeholder="Your Email" type="email" required>
    <input id="phone" placeholder="Your Phone Number">
    <select id="eventType">
        <option value="Wedding">Wedding</option>
        <option value="Corporate Event">Corporate Event</option>
        <option value="Birthday Party">Birthday Party</option>
        <option value="Other">Other</option>
    </select>
    <textarea id="message" placeholder="Your Message" required></textarea>
</form>
```

---

## Testing Checklist

- [ ] EmailJS account created
- [ ] Public Key added to script.js
- [ ] Email Service (Gmail) connected
- [ ] Email Template created
- [ ] Service ID correct in script.js
- [ ] Template name: `template_momentae`
- [ ] Test form submission
- [ ] Email received in momentaeevents@gmail.com
- [ ] Website shows success message

---

**Once all setup is complete, your contact form will work automatically!** 🎉

