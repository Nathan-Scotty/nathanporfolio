import { useState } from 'react'
import styles from '../components/portfolio/stylesheets/Portfolio.module.css'

export default function List({list, filterItems}){
    const [active, setActive] = useState(0);
    return <div className={styles.portfolio_list}>
        {list.map((category, index) => {
            return <button className={`${active === index ? `${styles.active_work}`: ''} ${styles.portfolio_list_item} ${styles.text_cs}`} key={index
            } onClick={() => {
                setActive(index);
                filterItems(category)
            }}>
                {category}
            </button>
        })}
    </div>
}