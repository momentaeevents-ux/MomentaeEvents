# ⚡ EmailJS Setup - Quick Checklist

## 📋 What You Need to Do

### 1️⃣ Create Account (2 minutes)
- [ ] Visit https://www.emailjs.com/
- [ ] Click "Sign Up Free"
- [ ] Use email: momentaeevents@gmail.com
- [ ] Verify email

### 2️⃣ Get Public Key (1 minute)
- [ ] Log in to EmailJS Dashboard
- [ ] Go to: **Account → API Keys**
- [ ] Copy your **Public Key** (long alphanumeric string)

### 3️⃣ Connect Gmail (2 minutes)
- [ ] Go to: **Email Services**
- [ ] Click: **Add New Service**
- [ ] Select: **Gmail**
- [ ] Click: **Connect with Gmail**
- [ ] Sign in with momentaeevents@gmail.com
- [ ] Allow permissions
- [ ] Give it a name: "Gmail Service"
- [ ] Copy the **Service ID** shown

### 4️⃣ Create Template (3 minutes)
- [ ] Go to: **Email Templates**
- [ ] Click: **Create New Template**
- [ ] Set:
  - Name: `template_momentae`
  - Service: Gmail Service (from step 3)
  - Recipient: `{{to_email}}`

- [ ] Subject: `New Event Inquiry from {{from_name}} - {{event_type}}`

- [ ] Body:
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
Momentae Events
```

- [ ] Click **Save**

### 5️⃣ Update Code (2 minutes)
- [ ] Open: `js/script.js`
- [ ] Find line 4
- [ ] Replace: `c4fb40e0c3a2d3b4e5f6g7h8i9j0k1l2`
- [ ] With: YOUR Public Key from step 2
- [ ] Save file

---

## 🧪 Test It

1. Go to website contact page
2. Fill form:
   - Name: Test Name
   - Email: your-email@gmail.com
   - Phone: 9876543210
   - Event Type: Wedding
   - Message: Test message

3. Click "Send Message"
4. Check:
   - [ ] Success message appears
   - [ ] Email arrives in momentaeevents@gmail.com
   - [ ] Email looks professional (preview: email-template-preview.html)

---

## ❌ If Email Doesn't Send

**Check these in order:**

1. **Public Key wrong?**
   - Go to Account → API Keys
   - Copy exact key again (no spaces)
   - Update script.js line 4
   - Refresh website

2. **Service ID wrong?**
   - Go to Email Services
   - Check your Gmail service exists
   - Copy Service ID exactly
   - Compare with script.js line 27

3. **Template not found?**
   - Go to Email Templates
   - Check template is named exactly: `template_momentae`
   - Service is set to Gmail
   - Template is saved

4. **Gmail not connected?**
   - Go to Email Services
   - Check Gmail service shows "Connected"
   - If not, click it and reconnect

5. **Check Console Errors**
   - Open website
   - Press F12 (Developer Tools)
   - Go to Console tab
   - Try sending form
   - Look for error messages

---

## ✅ Troubleshooting Fixes

| Problem | Solution |
|---------|----------|
| Service not found | Verify Service ID in script.js matches EmailJS |
| Template not found | Template name must be exactly `template_momentae` |
| Email not arriving | Check Gmail is connected, try sending test from EmailJS |
| CORS error | Make sure you're using Public Key, not Private Key |
| No success message | Check browser console (F12) for JavaScript errors |

---

## 📧 Email Template Variables

Available in your template:
- `{{from_name}}` - Client's name
- `{{from_email}}` - Client's email
- `{{phone_number}}` - Client's phone
- `{{event_type}}` - Event type selected
- `{{message}}` - Client's message
- `{{to_email}}` - Your email (momentaeevents@gmail.com)
- `{{reply_to}}` - Automatically set to client's email

---

## 🔒 Security Reminders

✅ **Safe to share:** Public Key  
❌ **Never share:** Private Key  
✅ **Form is secure:** Uses EmailJS servers  
✅ **Data encrypted:** During transmission  

---

## 💡 Pro Tips

1. **Save your IDs:**
   - Public Key: ________________
   - Service ID: ________________
   - Template Name: template_momentae

2. **Test before launching:** Send test email from form

3. **Check spam folder:** If email not in inbox

4. **Add to contacts:** momentaeevents@gmail.com to prevent spam

5. **Create backup:** Keep copy of this checklist

---

## 📞 Need Help?

- **EmailJS Docs:** https://www.emailjs.com/docs/
- **Dashboard:** https://dashboard.emailjs.com/
- **Status Page:** https://www.emailjs.com/status/

---

## ⏱️ Total Setup Time: ~10 minutes

Once done, your contact form will work automatically! 🎉
