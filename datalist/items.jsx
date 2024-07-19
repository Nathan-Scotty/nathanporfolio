import styles from '../components/portfolio/stylesheets/Portfolio.module.css'
import Image from 'next/image';
import Link from 'next/link';
import {FaArrowRight} from 'react-icons/fa';
import {motion} from 'framer-motion'

export default function Items({projectItems}){
    return <>
        {projectItems.map((projectItem) => {
            const {id, img, category, title, description} = projectItem;
            return <motion.div 
             layout
             animate={{ opacity: 1, scale: 1}}
             initial={{ opacity: 0.8, scale: 0.6 }}
             exit={{ opacity: 0.8, scale: 0.6 }}
             transition={{duration: 0.3}}
             className={`${styles.portfolio_items} ${styles.card} ${styles.card_two}`} key={id}>
                <div className={styles.portfolio_img_wrapper}>
                    <Image src={img} alt="" className={styles.portfolio_img}/>
                </div>

                <span className={`${styles.portfolio_category} ${styles.text_cs}`}>{category}</span>
                <h3 className={styles.portfolio_title}>{title}</h3>
                <p className={styles.portfolio_description}>{description}</p>

                <Link href="" className={styles.link}>
                    See Pricing
                    <FaArrowRight className={styles.link_icon}></FaArrowRight>
                </Link>
            </motion.div>
        })}
    </>
}