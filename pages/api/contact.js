// pages/api/contact.js

import nodemailer from 'nodemailer';

export default function handler(req, res) {
    // Assurez-vous que la méthode de la requête est POST
    if (req.method === 'POST') {
        // Récupérez les données du corps de la requête
        const { name, email, phone, message } = req.body;

        // Configurez le transporteur de messagerie
        const transporter = nodemailer.createTransport({
            host: 'smtp-mail.outlook.com',
            port: 587,
            secure: false, // STARTTLS
            auth: {
                user: 'qualitechoisie13@outlook.com',
                pass: 'Cybcstn13@'
            }
        });

        // Construction du contenu de l'e-mail
        const mailOptions = {
            from: 'qualitechoisie13@outlook.com',
            to: 'qualitechoisie13@outlook.com',
            subject: 'Nouveau message de contact',
            html: `
        <p>Nom: ${name}</p>
        <p>Email: ${email}</p>
        <p>Téléphone: ${phone}</p>
        <p>Message: ${message}</p>
      `
        };

        // Envoi de l'e-mail
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
                res.status(500).json({ error: 'Erreur lors de l\'envoi de l\'e-mail' });
            } else {
                console.log('E-mail envoyé:', info.response);
                res.status(200).json({ message: 'E-mail envoyé avec succès' });
            }
        });
    } else {
        // Si la méthode de la requête n'est pas POST, renvoyer une réponse 405 Method Not Allowed
        res.setHeader('Allow', ['POST']);
        res.status(405).json({ error: `La méthode ${req.method} n'est pas autorisée` });
    }
}
