import sgMail from '@sendgrid/mail';import express from 'express';

import sgMail from '@sendgrid/mail';

export default async function handler(req, res) {import cors from 'cors';

  // Enable CORS

  res.setHeader('Access-Control-Allow-Origin', '*');const app = express();

  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');app.use(express.json());

  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');app.use(cors());



  // Handle preflightsgMail.setApiKey(process.env.SENDGRID_API_KEY);

  if (req.method === 'OPTIONS') {

    return res.status(200).end();

  }app.post('/api/send-email', async (req, res) => {

  const { nome, email, empresa, posicao, pais, mensagem } = req.body;

  if (req.method !== 'POST') {

    return res.status(405).json({ error: 'Method not allowed' });  const msg = {

  }    to: 'contact@smartenergylab.com',

    from: 'no-reply@smartenergylab.com',

  try {    subject: 'Novo contato via Landing Page',

    // Get environment variables    text: `Nome: ${nome}\nEmail: ${email}\nEmpresa: ${empresa}\nPosição: ${posicao}\nPaís: ${pais}\nMensagem: ${mensagem}`,

    const apiKey = process.env.SENDGRID_API_KEY;    html: `<p><strong>Nome:</strong> ${nome}</p>

    const toEmail = process.env.TO_EMAIL;           <p><strong>Email:</strong> ${email}</p>

    const fromEmail = process.env.FROM_EMAIL;           <p><strong>Empresa:</strong> ${empresa}</p>

           <p><strong>Posição:</strong> ${posicao}</p>

    // Validate environment variables           <p><strong>País:</strong> ${pais}</p>

    if (!apiKey || !toEmail || !fromEmail) {           <p><strong>Mensagem:</strong> ${mensagem}</p>`

      console.error('Missing environment variables:', {  };

        hasApiKey: !!apiKey,

        hasToEmail: !!toEmail,  try {

        hasFromEmail: !!fromEmail    await sgMail.send(msg);

      });    res.status(200).json({ success: true });

      return res.status(500).json({   } catch (error) {

        error: 'Server configuration error',    res.status(500).json({ success: false, error: error.message });

        details: 'Missing required environment variables'   }

      });});

    }

const PORT = process.env.PORT || 3001;

    // Configure SendGridapp.listen(PORT, () => {

    sgMail.setApiKey(apiKey);  console.log(`SendGrid API server running on port ${PORT}`);

});

    // Get form data
    const { nome, email, empresa, posicao, pais, mensagem } = req.body;

    // Build email content
    const msg = {
      to: toEmail,
      from: fromEmail,
      subject: `New Contact Form Submission from ${nome}`,
      text: `
Name: ${nome}
Email: ${email}
Company: ${empresa}
Position: ${posicao}
Country: ${pais}
Message: ${mensagem}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${empresa}</p>
        <p><strong>Position:</strong> ${posicao}</p>
        <p><strong>Country:</strong> ${pais}</p>
        <p><strong>Message:</strong></p>
        <p>${mensagem}</p>
      `,
    };

    // Send email
    await sgMail.send(msg);
    
    console.log('Email sent successfully to:', toEmail);
    return res.status(200).json({ message: 'Email sent successfully' });

  } catch (error) {
    console.error('SendGrid Error:', error.response?.body || error.message);
    return res.status(500).json({ 
      error: 'Failed to send email',
      details: error.response?.body?.errors?.[0]?.message || error.message
    });
  }
}
