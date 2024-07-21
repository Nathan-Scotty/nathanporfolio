import { useState } from 'react';
import styles from '../components/portfolio/stylesheets/Portfolio.module.css';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Items({ projectItems }) {
    const [currentVideo, setCurrentVideo] = useState(null);

    const handleVideoClick = (event, videoElement) => {
        if (currentVideo && currentVideo !== videoElement) {
            currentVideo.pause();
        }

        if (videoElement) {
            videoElement.requestFullscreen?.();
            setCurrentVideo(videoElement);
        }
    };

    const handlePlay = (event) => {
        const videoElement = event.target;
        if (currentVideo && currentVideo !== videoElement) {
            currentVideo.pause();
        }
        setCurrentVideo(videoElement);
    };

    const handlePause = (event) => {
        const videoElement = event.target;
        if (currentVideo === videoElement) {
            setCurrentVideo(null);
        }
    };

    return (
        <>
            {projectItems.map((projectItem) => {
                const { id, video, category, linkdemo, linkgit, title, description } = projectItem;
                return (
                    <motion.div
                        layout
                        animate={{ opacity: 1, scale: 1 }}
                        initial={{ opacity: 0.8, scale: 0.6 }}
                        exit={{ opacity: 0.8, scale: 0.6 }}
                        transition={{ duration: 0.3 }}
                        className={`${styles.portfolio_items} ${styles.card} ${styles.card_two}`}
                        key={id}
                    >
                        <div className={styles.portfolio_img_wrapper}>
                            <video
                                id={`portfolioVideo-${id}`}
                                src={video}
                                alt={title}
                                className={styles.portfolio_img}
                                onClick={(event) => handleVideoClick(event, event.target)}
                                onPlay={handlePlay}
                                onPause={handlePause}
                                controls
                            />
                        </div>

                        <span className={`${styles.portfolio_category} ${styles.text_cs}`}>{category}</span>
                        <h3 className={styles.portfolio_title}>{title}</h3>
                        <p className={styles.portfolio_description}>{description}</p>

                        <div className={styles.links}>
                            <Link href={linkdemo} className={styles.link}>Demo</Link>
                            <Link href={linkgit} className={styles.link}>Github</Link>
                        </div>
                    </motion.div>
                );
            })}
        </>
    );
}
