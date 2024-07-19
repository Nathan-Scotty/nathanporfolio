import Porfolios from "../components/portfolio/Portfolio";
import Head from "next/head";

export default function Porfolio() {


    return <>
        <Head>
            <title>Portfolio | Portfolio</title>
            <meta name="description" content="Passionate and creative web developer with expertise in both frontend and backend technologies" />

            <meta property="og:title" content="Porfolio | Portfolio" />
            <meta property="og:description" content="I thrive on solving complex technical challenges" />
            <meta property="og:image" content="../assets/bgprofile.jpg" />
        </Head>
        <Porfolios />
    </>
}

