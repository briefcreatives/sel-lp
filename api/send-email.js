import express from 'express';
import sgMail from '@sendgrid/mail';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

sgMail.setApiKey(process.env.SENDGRID_API_KEY);


app.post('/api/send-email', async (req, res) => {
  const { nome, email, empresa, posicao, pais, mensagem } = req.body;

  const msg = {
    to: 'contact@smartenergylab.com',
    from: 'no-reply@smartenergylab.com',
    subject: 'Novo contato via Landing Page',
    text: `Nome: ${nome}\nEmail: ${email}\nEmpresa: ${empresa}\nPosição: ${posicao}\nPaís: ${pais}\nMensagem: ${mensagem}`,
    html: `<p><strong>Nome:</strong> ${nome}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Empresa:</strong> ${empresa}</p>
           <p><strong>Posição:</strong> ${posicao}</p>
           <p><strong>País:</strong> ${pais}</p>
           <p><strong>Mensagem:</strong> ${mensagem}</p>`
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`SendGrid API server running on port ${PORT}`);
});
