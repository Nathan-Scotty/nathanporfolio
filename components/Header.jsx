import styles from "../styles/Header.module.css";
import { useEffect, useState } from "react";
import { Link } from 'react-scroll';
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";
import { useTheme } from "./ThemeProvider";

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const [scrollNav, setScrollNav] = useState(false);
    const [theme, setTheme] = useTheme();

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const changNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changNav);
    }, [showMenu]);

    useEffect(() => {
        document.body.classList.toggle("no-scroll", showMenu);
    }, [showMenu]);

    const handleMenuToggle = () => {
        setShowMenu(!showMenu);
    };

    const handleLinkClick = () => {
        setShowMenu(false);
    };

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <header className={`${scrollNav ? `${styles.scroll_header}` : ""} ${styles.header}`}>
            <nav className={styles.nav}>
                <Link to="home" smooth={true} duration={500} className={`${styles.nav_logo} ${styles.text_cs}`} onClick={handleLinkClick}>
                    N<span>A</span>T<span>H</span>A<span>N</span>
                </Link>
                <div className={`${showMenu ? `${styles.nav_menu} ${styles.show_menu}` : styles.nav_menu}`}>
                    <div className={styles.nav_data}>
                        <ul className={styles.nav_list}>
                            <li>
                                <Link to="home" smooth={true} duration={500} className={`${styles.nav_link} ${styles.text_cs}`} onClick={handleLinkClick}>
                                    HOME
                                </Link>
                            </li>
                            <li>
                                <Link to="services" smooth={true} duration={500} className={`${styles.nav_link} ${styles.text_cs}`} onClick={handleLinkClick}>
                                    SERVICES
                                </Link>
                            </li>
                            <li>
                                <Link to="skills" smooth={true} duration={500} className={`${styles.nav_link} ${styles.text_cs}`} onClick={handleLinkClick}>
                                    SKILLS
                                </Link>
                            </li>
                            <li>
                                <Link to="portfolio" smooth={true} duration={500} className={`${styles.nav_link} ${styles.text_cs}`} onClick={handleLinkClick}>
                                    PORTFOLIO
                                </Link>
                            </li>
                            <li>
                                <Link to="contact" smooth={true} duration={500} className={`${styles.nav_link} ${styles.text_cs}`} onClick={handleLinkClick}>
                                    CONTACT
                                </Link>
                            </li>
                            <div className={styles.header_socials}>
                                <a href="https://github.com/Nathan-Scotty" className={styles.header_social_link}>
                                    <FaGithub />
                                </a>
                                <a href="https://www.linkedin.com/in/nathan-musoko-3030a424a/" className={styles.header_social_link}>
                                    <FaInstagram />
                                </a>
                                <a href="https://www.linkedin.com/in/nathan-musoko-3030a424a/" className={styles.header_social_link}>
                                    <FaLinkedin />
                                </a>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className={styles.nav_btns}>
                    <div className={styles.theme_toggler} onClick={toggleTheme}>
                        {theme === 'light' ? <BsSun /> : <BsMoon />}
                    </div>
                    <div className={`${showMenu ? `${styles.nav_toggle} ${styles.animate_toggle}` : styles.nav_toggle}`} onClick={handleMenuToggle}>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>
        </header>
    );
}
