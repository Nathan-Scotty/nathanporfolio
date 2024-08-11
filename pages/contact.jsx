import Contacts from "../components/contact/Contact"
import Head from "next/head"

export default function Contact() {

    return <>
        <Head>
            <title>Portfolio | Contact</title>
            <meta name="description" content="Passionate and creative web developer with expertise in both frontend and backend technologies" />

            <meta property="og:title" content="Porfolio | Contact" />
            <meta property="og:description" content="I thrive on solving complex technical challenges" />
            <meta property="og:image" content="/nathan.webp" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
        </Head>

        <Contacts />
    </>
}