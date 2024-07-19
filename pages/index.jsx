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


export default function Home() {
    return (
        <>
            <Head>
                <title>Portfolio | Home</title>
                <meta name="description" content="Passionate and creative web developer with expertise in both frontend and backend technologies" />

                <meta property="og:title" content="Porfolio | Home" />
                <meta property="og:description" content="I thrive on solving complex technical challenges" />
                <meta property="og:image" content="../assets/bgprofile.jpg" />
            </Head>
            <Element name="home" className={styles.home_container}>
                <div className={`${styles.container} ${styles.homeIndex}`}>

                    <h1 className={`${styles.home_title} ${styles.text_cs}`}>
                        <span>W</span>
                        <span>E</span>
                        <span>L</span>
                        <span>C</span>
                        <span>O</span>
                        <span>M</span>
                        <span>E </span>
                        <span></span>
                        <span className={styles.han}>Y</span>
                        <span className={styles.han}>&apos;</span>
                        <span className={styles.han}>A</span>
                        <span className={styles.han}>L</span>
                        <span className={styles.han}>L</span>
                    </h1>

                    <p className={`${styles.home_subtitle} ${styles.text_cs}`}>
                        My Name Is, <span>Nathan Musoko</span>
                    </p>
                    <div className={styles.home_img_wrapper}>
                        <div className={styles.home_banner}>
                            <Image src={profileImg} alt="profilephoto" className={styles.home_profile} />
                        </div>
                        <p className={`${styles.home_data} ${styles.home_data_one}`}>
                            <span className={styles.text_lg}>
                                4 <b>+</b>
                            </span>
                            <span className={`${styles.text_sm} ${styles.text_cs}`}>
                                Years of <b>Experience</b>
                            </span>
                        </p>
                    </div>
                    <p className={styles.home_text}>
                        I am full-stack web, desktop and mobile app developer. Passionate and dedicated programmer with a strong 
                        foundation in computer science and a keen eye for innovative solutions. My journey in programming has been 
                        fueled by a love for technology and a drive to create efficient, impactful applications.

                        I specialize in a variety of programming languages and frameworks, including C#, Java, PowerShell, Python, 
                        Node.js, React/Next.js, and ASP.NET. Additionally, I have extensive experience working with databases such 
                        as MySQL, MongoDB, and Cassandra. My diverse skill set enables me to tackle a wide range of projects, 
                        from backend development to creating dynamic, interactive front-end interfaces.

                        I strive to build software that not only meets the highest standards of functionality but also provides a 
                        seamless user experience. Explore my work, and let&apos;s connect to discuss how we can collaborate to bring 
                        your ideas to life
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
                            <FontAwesomeIcon icon={faDownload} /> Download Resume
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

