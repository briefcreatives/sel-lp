# Backend API - REEF Energy Management

Express server for handling contact form submissions via SendGrid.

## 🚀 Quick Start

```bash
# 1. Configure environment variables
cp .env.example .env.local

# 2. Edit .env.local with your credentials
# SENDGRID_API_KEY=your_key_here
# TO_EMAIL=destination@example.com
# FROM_EMAIL=verified-sender@example.com
# PORT=3001

# 3. Start server
node server.js
```

**Server:** http://localhost:3001

## 📦 Scripts

```bash
# Start server
node server.js

# Start with auto-reload (if nodemon is installed)
nodemon server.js
```

## 🔧 Environment Variables

Create `.env.local` or `.env` file in this folder:

```bash
# SendGrid API Key
# Get it from: https://app.sendgrid.com/settings/api_keys
SENDGRID_API_KEY=SG.xxxxxxxxxxxxxxxxxxxxx

# Destination email (receives form submissions)
TO_EMAIL=contact@yourcompany.com

# Sender email (must be verified in SendGrid)
# Verify at: https://app.sendgrid.com/settings/sender_auth
FROM_EMAIL=noreply@yourcompany.com

# Server port (default: 3001)
PORT=3001
```

**Important:**
- Both `TO_EMAIL` and `FROM_EMAIL` must be verified in SendGrid
- Use `.env.local` for development
- Use `.env` for production or set environment variables directly

## 📡 API Endpoints

### POST `/api/send-email`

Send contact form submission via email.

**Request Body:**
```json
{
  "nome": "John Doe",
  "email": "john@example.com",
  "empresa": "ACME Corp",
  "posicao": "CEO",
  "pais": "US",
  "mensagem": "I'm interested in your solution"
}
```

**Success Response (200):**
```json
{
  "message": "Email sent successfully"
}
```

**Error Response (500):**
```json
{
  "error": "Failed to send email",
  "details": "Error message from SendGrid"
}
```

**Example with cURL:**
```bash
curl -X POST http://localhost:3001/api/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "Test",
    "email": "test@example.com",
    "empresa": "Test Co",
    "posicao": "Dev",
    "pais": "PT",
    "mensagem": "Testing"
  }'
```

## 🏗️ Architecture

```
server.js
├── Express server (ESModule)
├── CORS enabled
├── JSON body parser
├── SendGrid integration
└── Error handling
```

**Features:**
- ✅ SendGrid email integration
- ✅ CORS enabled for all origins
- ✅ Request logging
- ✅ Environment variable validation
- ✅ Detailed error messages
- ✅ Automatic `.env.local` and `.env` loading

## 🔒 SendGrid Setup

### 1. Create SendGrid Account
Sign up at [SendGrid](https://sendgrid.com/)

### 2. Create API Key
1. Go to [Settings → API Keys](https://app.sendgrid.com/settings/api_keys)
2. Click "Create API Key"
3. Give it a name (e.g., "REEF Landing Page")
4. Select "Full Access" or "Restricted Access" with Mail Send permissions
5. Copy the API key (you won't see it again!)

### 3. Verify Sender Email
1. Go to [Settings → Sender Authentication](https://app.sendgrid.com/settings/sender_auth)
2. Click "Single Sender Verification"
3. Fill in your email details
4. Verify the email you receive
5. Use this verified email as `FROM_EMAIL`

### 4. Test the Integration
```bash
# Start server
node server.js

# Send test email
curl -X POST http://localhost:3001/api/send-email \
  -H "Content-Type: application/json" \
  -d '{"nome":"Test","email":"test@test.com","empresa":"Test","posicao":"Dev","pais":"PT","mensagem":"Testing"}'
```

## 🐛 Troubleshooting

### SendGrid 403 Forbidden Error
**Problem:** `{ "errors": [{ "message": "The from address does not match a verified Sender Identity" }] }`

**Solution:**
- Verify your sender email at [SendGrid Dashboard](https://app.sendgrid.com/settings/sender_auth)
- Ensure `FROM_EMAIL` in `.env.local` matches the verified email

### Port 3001 Already in Use
```bash
# Kill process on port 3001
lsof -ti:3001 | xargs kill -9
```

### Environment Variables Not Loading
- Check file is named `.env.local` or `.env` in this folder
- Ensure no syntax errors in the file
- Restart the server after changes

### Cannot Connect from Frontend
- Ensure server is running on port 3001
- Check CORS configuration in `server.js`
- Verify frontend proxy in `frontend/vite.config.ts`

## 📦 Dependencies

**Runtime:**
- `express@5.1.0` - Web server framework
- `@sendgrid/mail@8.1.6` - SendGrid email client
- `cors@2.8.5` - Enable CORS
- `dotenv@17.2.3` - Environment variables

**Note:** No `package.json` in this folder. Dependencies are managed at root level or installed globally.

## 🌐 Production Deployment

### Environment Variables
Set these in your hosting platform:
```bash
SENDGRID_API_KEY=your_key
TO_EMAIL=destination@example.com
FROM_EMAIL=verified@example.com
PORT=3001
```

### Deployment Platforms

**Vercel (Serverless):**
- Use serverless function in `/api` folder
- Set environment variables in dashboard

**Heroku:**
```bash
heroku config:set SENDGRID_API_KEY=your_key
heroku config:set TO_EMAIL=destination@example.com
heroku config:set FROM_EMAIL=verified@example.com
```

**Railway / DigitalOcean:**
- Set environment variables in platform dashboard
- Deploy as Node.js application

### Health Check
```bash
# Check if server is running
curl http://localhost:3001/api/send-email
```

---

**Need frontend setup?** See [../frontend/README.md](../frontend/README.md)
