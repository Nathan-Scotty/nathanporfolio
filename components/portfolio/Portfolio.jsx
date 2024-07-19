import styles from './stylesheets/Portfolio.module.css'
import List from '../../datalist/list';
import Items from '../../datalist/items';
import Data from '../../datalist/Data';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

const projects = Data().skills;

const allNavList = [
    'all',
    ...new Set(projects.map((project) => project.category))
];

export default function Porfolio() {

    const [projectItems, setMenuItems] = useState(projects);
    const [navList, setCatgeries] = useState(allNavList);

    const filterItems = (category) => {
        if (category === 'all') {
            setMenuItems(projects);
            return;
        }
        const newProjectItems = projects.filter((item) => item.category === category);

        setMenuItems(newProjectItems);
    }

    return <div className={styles.bgColor}>
        <div className={`${styles.generalContainer}`}>
            <div className={styles.title}>My PortFolio</div>

            <List list={navList} filterItems={filterItems} />

            <div className={`${styles.portfolio_container} ${styles.container} ${styles.grid}`}>
                <AnimatePresence initial={false}>
                    <Items projectItems={projectItems} />
                </AnimatePresence>
            </div>
        </div>
    </div>
}

