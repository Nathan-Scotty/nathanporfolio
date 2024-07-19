import styles from './stylesheets/Contact.module.css'
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import location from '../../assets/location.png'
import email from '../../assets/email.png'
import phone from '../../assets/phone.png'
import Image from 'next/image'
import { useEffect, useState } from 'react'


export default function Contact() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    useEffect(() => {
        // Sélectionnez le formulaire
        const form = document.getElementById('contactForm');

        // Écoutez l'événement de soumission du formulaire
        const handleSubmit = async (event) => {
            // Empêchez le comportement par défaut du formulaire
            event.preventDefault();

            // Récupérez les données du formulaire
            const formData = new FormData(form);

            try {
                // Envoyez une requête POST à votre API Next.js avec les données du formulaire
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(Object.fromEntries(formData))
                });

                // Vérifiez si la réponse est ok
                if (response.ok) {
                    // Réinitialisez le formulaire en vidant l'état formData
                    setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        message: ''
                    });
                } else {
                    // Affichez un message d'erreur si la réponse n'est pas ok
                    alert('Une erreur est survenue lors de l\'envoi du message.');
                }
            } catch (error) {
                // Affichez un message d'erreur en cas d'erreur
                console.error('Erreur lors de l\'envoi du formulaire :', error);
                alert('Une erreur est survenue lors de l\'envoi du message.');
            }
        };

        form.addEventListener('submit', handleSubmit);

        // Nettoyez l'écouteur d'événements lorsque le composant est démonté
        return () => {
            form.removeEventListener('submit', handleSubmit);
        };
    }, []);

    return <>
        <div className={styles.container}>
            <span className={styles.big_circle}></span>
            <div className={styles.form}>
                <div className={styles.contact_info}>
                    <h3 className={styles.title}>Let&apos;s get in touch</h3>
                    <p className={styles.text}>
                        I would be delighted to discuss your ideas and projects. Feel free to contact me with any questions or inquiries.
                    </p>

                    <div className={styles.info}>
                        <div className={styles.information}>
                            <Image src={location} className={styles.icon} alt="location" />
                            <p>Canada, Ontario, Ottawa</p>
                        </div>
                        <div className={styles.information}>
                            <Image src={email} className={styles.icon} alt="email" />
                            <p>qualitechoisie13@gmail.com</p>
                        </div>
                    </div>

                    <div className={styles.social_media}>
                        <p>Connect with us :</p>
                        <div className={styles.social_icons}>
                            <a href="#">
                                <FaTwitter />
                            </a>
                            <a href="#">
                                <FaInstagram />
                            </a>
                            <a href="#">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.contact_form}>
                    <span className={`${styles.circle} ${styles.one}`}></span>
                    <span className={`${styles.circle} ${styles.two}`}></span>
                    <form id='contactForm'>
                        <h3 className={styles.title}>Contact us</h3>
                        <div className={styles.input_container}>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" className={styles.input} required/>
                        </div>
                        <div className={styles.input_container}>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className={styles.input} required/>
                        </div>
                        <div className={styles.input_container}>
                            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" className={styles.input} required/>
                        </div>
                        <div className={`${styles.input_container} ${styles.textarea}`}>
                            <textarea name="message" value={formData.message} onChange={handleChange} placeholder='Message' className={styles.input} required></textarea>
                        </div>
                        <button type="submit" className={styles.btn}>Send</button>
                    </form>

                </div>
            </div>
        </div>
    </>
}