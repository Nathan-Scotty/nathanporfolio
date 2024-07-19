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
                <meta property="og:image" content="../assets/bgprofile.jpg" />
            </Head>
            <Services />
        </>
    );
}

