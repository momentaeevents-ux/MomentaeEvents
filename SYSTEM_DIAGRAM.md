# 📊 EmailJS Integration Diagram

## How the Email System Works

```
┌─────────────────────────────────────────────────────────────────────┐
│                         MOMENTAE EVENTS WEBSITE                      │
│                                                                       │
│  ┌─────────────────────────┐         ┌──────────────────────────┐  │
│  │   CONTACT FORM          │         │   JavaScript Code        │  │
│  │                         │         │                          │  │
│  │ Name      [________]    │         │ js/script.js             │  │
│  │ Email     [________]    │────────▶│ • Validates form         │  │
│  │ Phone     [________]    │         │ • Collects data          │  │
│  │ EventType [dropdown]    │         │ • Sends to EmailJS       │  │
│  │ Message   [________]    │         │ • Shows success/error    │  │
│  │                         │         │                          │  │
│  │ [Send Message Button]   │         └──────────────┬───────────┘  │
│  └─────────────────────────┘                        │               │
│                                                     │               │
└─────────────────────────────────────────────────────┼───────────────┘
                                                      │
                                                      │ HTTPS Request
                                                      │
                        ┌─────────────────────────────▼──────────────────┐
                        │           EMAILJS SERVICE                       │
                        │      (www.emailjs.com)                          │
                        │                                                 │
                        │  • Receives form data                           │
                        │  • Uses your Public Key to authenticate         │
                        │  • Formats email with template                  │
                        │  • Sends via Gmail                              │
                        │                                                 │
                        └────────────┬──────────────────┬─────────────────┘
                                     │                  │
                    ┌────────────────▼─────┐   ┌───────▼──────────────┐
                    │  TO ADMIN             │   │  TO CLIENT (Optional)│
                    │                       │   │                      │
                    │ Gmail: Connected      │   │ Gmail: Auto Reply    │
                    │ Service: service_XXX  │   │ Template: reply      │
                    │ Template: template_XXX│   │                      │
                    │                       │   │                      │
                    │ momentaeevents@gmail.┐   │ client@example.com   │
                    │ com                  │   │                      │
                    └────────────────┬─────┘   └───────────┬──────────┘
                                     │                     │
                    ┌────────────────▼─────┐   ┌───────────▼──────────┐
                    │  EMAIL RECEIVED       │   │  CONFIRMATION SENT   │
                    │                       │   │                      │
                    │ Subject: New Event    │   │ Thank you message    │
                    │ Inquiry from John -   │   │ from Momentae Events │
                    │ Wedding              │   │                      │
                    │                       │   │                      │
                    │ [Professional HTML    │   │ [Client can reply    │
                    │  formatted email]     │   │  to confirm]         │
                    │                       │   │                      │
                    │ Click reply to        │   │                      │
                    │ contact client        │   │                      │
                    └───────────────────────┘   └──────────────────────┘
```

---

## System Components

### 1️⃣ Your Website (index.html, contact.html)
- Contact form with fields
- Collects user information
- Triggers form submission

### 2️⃣ JavaScript Code (js/script.js)
- Validates input
- Formats data
- Sends to EmailJS
- Shows user feedback

### 3️⃣ EmailJS Service
- Receives data securely
- Authenticates with Public Key
- Applies email template
- Connects to Gmail
- Sends the email

### 4️⃣ Gmail Service
- Receives email from EmailJS
- Delivers to your inbox
- momentaeevents@gmail.com

### 5️⃣ Email Template (template_momentae)
- Professional formatting
- Your brand colors
- All client details
- Reply link to client

---

## Data Flow

```
User Input
    ↓
[Validation in script.js]
    ↓
  Valid? No ──→ Show Error Message
    ↓ Yes
[Format Data]
    ↓
[Send HTTPS Request to EmailJS]
    ↓
[EmailJS receives data + Public Key]
    ↓
[Public Key validated]
    ↓
  Valid? No ──→ Show Error
    ↓ Yes
[Load email template: template_momentae]
    ↓
[Populate with client data]
    ↓
[Get Gmail credentials]
    ↓
[Send via Gmail SMTP]
    ↓
[Email arrives in momentaeevents@gmail.com]
    ↓
[Show success to user]
```

---

## File Dependencies

```
index.html
├── css/
│   └── style.css
├── js/
│   └── script.js ←─── EmailJS Library (CDN)
├── images/
│   └── logo.jpg
└── Bootstrap CSS (CDN)

script.js uses:
├── EmailJS Public Key ←─── From EmailJS Account
├── Service ID ←─── Gmail Service (from EmailJS)
└── Template ID ←─── template_momentae (from EmailJS)

EmailJS connects to:
├── momentaeevents@gmail.com (Gmail Account)
└── Recipient: momentaeevents@gmail.com
```

---

## Configuration Summary

```
┌─ YOUR EMAILJS ACCOUNT ─────────────────────────────────────┐
│                                                             │
│  Account: momentaeevents@gmail.com                          │
│  Public Key: Your_Public_Key_Here (in script.js line 4)    │
│                                                             │
│  ┌─ EMAIL SERVICES ────────────────────────────────────┐   │
│  │ Gmail Service                                        │   │
│  │ Service ID: service_momentae (in script.js line 27)│   │
│  │ Connected to: momentaeevents@gmail.com              │   │
│  └────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌─ EMAIL TEMPLATES ────────────────────────────────────┐  │
│  │ Template Name: template_momentae                     │  │
│  │ Service: Gmail Service                               │  │
│  │ Recipient: {{to_email}} = momentaeevents@gmail.com   │  │
│  │ Variables: {{from_name}}, {{from_email}}, etc.       │  │
│  └────────────────────────────────────────────────────┘  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Email Template Structure

```
┌──────────────────────────────────────────────────┐
│           EMAIL HEADER (Brand Colors)            │
│                                                  │
│    MOMENTAE EVENTS                               │
│    New Event Inquiry                             │
└──────────────────────────────────────────────────┘
┌──────────────────────────────────────────────────┐
│           EMAIL CONTENT                          │
│                                                  │
│  Hello,                                          │
│                                                  │
│  👤 Client Name: {{from_name}}                  │
│  📧 Email: {{from_email}}                       │
│  📱 Phone: {{phone_number}}                     │
│  🎉 Event: {{event_type}}                       │
│                                                  │
│  Message:                                        │
│  {{message}}                                    │
│                                                  │
│  [Reply Button] → {{reply_to}}                  │
└──────────────────────────────────────────────────┘
┌──────────────────────────────────────────────────┐
│           EMAIL FOOTER                           │
│  © 2026 Momentae Events                          │
│  All Rights Reserved                             │
└──────────────────────────────────────────────────┘
```

---

## Security Flow

```
┌─────────────────────────────────────┐
│  User submits form on website       │
└────────────────┬────────────────────┘
                 │
                 ↓ (HTTPS Encrypted)
        ┌────────────────────┐
        │  EmailJS Service   │
        │  (emailjs.com)      │
        └────────┬───────────┘
                 │
      ┌──────────┴──────────┐
      ↓                     ↓
   Verify              Format
   Public Key          Email
      │                 │
      └────────┬────────┘
               ↓
        ┌──────────────────┐
        │  Gmail SMTP      │ (Encrypted)
        │  Server          │
        └────────┬─────────┘
                 │
                 ↓ (HTTPS)
        ┌──────────────────┐
        │  Recipient Email │
        │  Momentae Events │
        └──────────────────┘
```

---

## Setup Verification

```
STEP 1: Account
[✓] EmailJS account created
[✓] Email verified
[✓] Logged in successfully

STEP 2: Public Key
[✓] Public Key copied from Account → API Keys
[✓] Public Key pasted in script.js line 4
[✓] No spaces or quotes issues

STEP 3: Gmail Service
[✓] Gmail added as Email Service
[✓] Gmail account connected (momentaeevents@gmail.com)
[✓] Service shows "Connected" status
[✓] Service ID copied

STEP 4: Email Template
[✓] Template created
[✓] Name set to: template_momentae
[✓] Service: Gmail Service
[✓] Recipient: {{to_email}}
[✓] All variables included
[✓] Template saved

STEP 5: Code Update
[✓] script.js line 4 has your Public Key
[✓] script.js line 27 has your Service ID
[✓] No syntax errors in code
[✓] Website refreshed

STEP 6: Test
[✓] Contact form filled
[✓] Submit button clicked
[✓] Success message shown
[✓] Email received in momentaeevents@gmail.com
[✓] Email has all user data
[✓] Email looks professional
```

---

Everything is connected! Just add your EmailJS credentials and it will work. 🎉
