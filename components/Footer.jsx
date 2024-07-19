import styles from '../styles/Footer.module.css'
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerBottom}>
                    &copy; 2024 Nathan Kadibu Musoko
                </div>
            </div>
        </footer>
    );
}