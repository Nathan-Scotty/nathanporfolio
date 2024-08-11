import Image from "next/image";
import styles from '../styles/Index.module.css'
import profileImg from '../assets/bgprofile.jpg'
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import Service from "../components/service/Service";
import Skills from "../components/skill/Skill";
import Porfolios from "../components/portfolio/Portfolio";
import Contact from "../components/contact/Contact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { Element } from 'react-scroll';
import Head from "next/head";
import { FormattedMessage } from "react-intl";


export default function Home() {
    return (
        <>
            <Head>
                <title>Portfolio | Home</title>
                <meta name="description" content="Passionate and creative web developer with expertise in both frontend and backend technologies" />

                <meta property="og:title" content="Porfolio | Home" />
                <meta property="og:description" content="I thrive on solving complex technical challenges" />
                <meta property="og:image" content="/nathan.webp" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
            </Head>
            <Element name="home">
                <div className={`${styles.container} ${styles.homeIndex}`}>

                    <h1 className={`${styles.home_title} ${styles.text_cs}`}>
                        <span><FormattedMessage id="w" /></span>
                        <span><FormattedMessage id="e" /></span>
                        <span><FormattedMessage id="l" /></span>
                        <span><FormattedMessage id="c" /></span>
                        <span><FormattedMessage id="o" /></span>
                        <span><FormattedMessage id="m" /></span>
                        <span></span>
                        <span className={styles.han}><FormattedMessage id="y"/></span>
                        <span className={styles.han}><FormattedMessage id="ll"/></span>
                    </h1>

                    <p className={`${styles.home_subtitle} ${styles.text_cs}`}>
                        <FormattedMessage id="name" /> <span>Nathan Musoko</span>
                    </p>
                    <div className={styles.home_img_wrapper}>
                        <div className={styles.home_banner}>
                            <Image src={profileImg} alt="profilephoto" className={styles.home_profile} />
                        </div>
                        <p className={`${styles.home_data} ${styles.home_data_one}`}>
                            <span className={styles.text_lg}>
                                3 + 
                            </span>
                            <span className={`${styles.text_sm} ${styles.text_cs}`}>
                                <FormattedMessage id="experience"/>
                            </span>
                        </p>
                    </div>
                    <p className={styles.home_text}>
                        <FormattedMessage id="about" />
                    </p>
                    <div className={styles.home_socials}>
                        <a href="https://github.com/Nathan-Scotty" className={styles.home_social_link}>
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/nathan-musoko-3030a424a/" className={styles.home_social_link}>
                            <FaInstagram />
                        </a>
                        <a href="https://www.linkedin.com/in/nathan-musoko-3030a424a/" className={styles.home_social_link}>
                            <FaLinkedin />
                        </a>
                    </div>
                    <Link href="/CVNathan.pdf" download="CVNathan.pdf">
                        <button className={`${styles.w3Button}`}>
                            <FontAwesomeIcon icon={faDownload} /> <FormattedMessage id="resume"/>
                        </button>
                    </Link>
                </div>
            </Element>

            <Element name="services">
                <Service />
            </Element>

            <Element name="skills">
                <Skills />
            </Element>

            <Element name="portfolio">
                <Porfolios />
            </Element>

            <Element name="contact">
                <Contact />
            </Element>
        </>
    );
}

