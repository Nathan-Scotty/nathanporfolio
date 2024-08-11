import Skills from "../components/skill/Skill";
import Head from "next/head";

export default function Skill() {

    return (
        <>
            <Head>
                <title>Portfolio | Skills</title>
                <meta name="description" content="Passionate and creative web developer with expertise in both frontend and backend technologies" />

                <meta property="og:title" content="Porfolio | Skills" />
                <meta property="og:description" content="I thrive on solving complex technical challenges" />
                <meta property="og:image" content="/nathan.webp" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
            </Head>
            <Skills />
        </>
    )
}