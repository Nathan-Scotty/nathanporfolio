import Services from "../components/service/Service";
import Head from "next/head";

export default function Service() {

    return (
        <>
            <Head>
                <title>Portfolio | Services</title>
                <meta name="description" content="Passionate and creative web developer with expertise in both frontend and backend technologies" />

                <meta property="og:title" content="Porfolio | Services" />
                <meta property="og:description" content="I thrive on solving complex technical challenges" />
                <meta property="og:image" content="/nathan.webp" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
            </Head>
            <Services />
        </>
    );
}

