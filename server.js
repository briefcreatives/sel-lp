import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import sgMail from '@sendgrid/mail';

console.log('Starting backend...');
dotenv.config({ path: '.env.local' });

// Debug: verificar se as variáveis foram carregadas
console.log('Environment variables loaded:');
console.log('- SENDGRID_API_KEY:', process.env.SENDGRID_API_KEY ? '✓ Set' : '✗ Missing');
console.log('- TO_EMAIL:', process.env.TO_EMAIL || '✗ Missing');
console.log('- FROM_EMAIL:', process.env.FROM_EMAIL || '✗ Missing');

const app = express();
const PORT = process.env.PORT || 3001;

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(cors());
app.use(express.json());

// Log all requests
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

app.post('/api/send-email', async (req, res) => {
  console.log('Request received at /api/send-email');
  try {
    console.log('Body received:', req.body);
    const { nome, email, empresa, posicao, pais, mensagem } = req.body;

    if (!nome || !email || !empresa) {
      console.log('Required fields missing');
      return res.status(400).json({ error: 'Required fields: nome, email, empresa' });
    }

    // Validar variáveis de ambiente
    if (!process.env.TO_EMAIL || !process.env.FROM_EMAIL) {
      console.error('Missing TO_EMAIL or FROM_EMAIL in environment variables');
      return res.status(500).json({ error: 'Server configuration error: missing email addresses' });
    }

    const msg = {
      to: process.env.TO_EMAIL,
      from: process.env.FROM_EMAIL,
      subject: `New contact from Landing Page: ${nome}`,
      text: `Name: ${nome}\nEmail: ${email}\nCompany: ${empresa}\nPosition: ${posicao || 'N/A'}\nCountry: ${pais || 'N/A'}\nMessage: ${mensagem || 'N/A'}`,
      html: `<h2>New Contact from Landing Page</h2>
<p><strong>Name:</strong> ${nome}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Company:</strong> ${empresa}</p>
<p><strong>Position:</strong> ${posicao || 'N/A'}</p>
<p><strong>Country:</strong> ${pais || 'N/A'}</p>
<p><strong>Message:</strong> ${mensagem || 'N/A'}</p>`,
    };

    console.log('Sending email via SendGrid...');
    await sgMail.send(msg);
    console.log('Email sent successfully!');

    return res.status(200).json({ success: true, message: 'Email sent successfully.' });
  } catch (error) {
    console.error('Error sending email:', error);

    if (error.response && error.response.body && error.response.body.errors) {
      return res.status(500).json({ error: error.response.body.errors });
    }

    return res.status(500).json({ error: 'Error sending email.' });
  }
});

const server = app.listen(PORT, () => {
  console.log(`Backend server running at http://localhost:${PORT}`);
  console.log('Waiting for requests...');
});

server.on('error', (error) => {
  console.error('Server error:', error);
});

process.on('SIGINT', () => {
  console.log('\nShutting down server...');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});
