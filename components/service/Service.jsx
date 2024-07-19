import React from "react";
import styles from './stylesheets/Service.module.css'
import Image from "next/image";
import Data from "../../datalist/Data";

const services = Data().services;

export default function Service() {

    return <>
        <div className={styles.container}>
            <div className={styles.row}>
                {services.map(({ name, title, description, image }, index) => (
                    <div className={styles.col__3} key={index}>
                        <div className={`${styles.service__box} ${styles.pointer}`}>
                            <div className={styles.icon}>
                                <Image src={image} alt={name} />
                            </div>
                            <div className={styles.service__meta}>
                                <h1 className={styles.service__text}>{name}</h1>
                                <p className={`${styles.p} ${styles.service__text} ${styles.p__color}`}>
                                    {title}
                                </p>
                                <p className={`${styles.p} ${styles.service__text} ${styles.p__color}`}>
                                    {description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
}