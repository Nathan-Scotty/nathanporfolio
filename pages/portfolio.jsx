import Porfolios from "../components/portfolio/Portfolio";
import Head from "next/head";

export default function Porfolio() {


    return <>
        <Head>
            <title>Portfolio | Portfolio</title>
            <meta name="description" content="Passionate and creative web developer with expertise in both frontend and backend technologies" />

            <meta property="og:title" content="Porfolio | Portfolio" />
            <meta property="og:description" content="I thrive on solving complex technical challenges" />
            <meta property="og:image" content="/logoNathan.png" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
        </Head>
        <Porfolios />
    </>
}

