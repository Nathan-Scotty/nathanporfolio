import { useRouter } from 'next/router';
import styles from './stylesheets/Skill.module.css';
import { Link } from 'react-scroll';

const Skill = () => {

    return (
        <div className={`${styles.w3Content}`} id="about">
            <h3 className={`${styles.w3TextLightGrey}`}>My Skills</h3>
            <p className={styles.w3Wide}>Web Development</p>
            <div className={styles.w3White}>
                <div className={styles.w3DarkGrey} style={{ height: '28px', width: '95%' }}></div>
            </div>
            <p className={styles.w3Wide}>Mobile Development</p>
            <div className={styles.w3White}>
                <div className={styles.w3DarkGrey} style={{ height: '28px', width: '85%' }}></div>
            </div>
            <p className={styles.w3Wide}>Desktop Development</p>
            <div className={styles.w3White}>
                <div className={styles.w3DarkGrey} style={{ height: '28px', width: '80%' }}></div>
            </div>
            <br />
            <div className={`${styles.w3Row} ${styles.w3Center} ${styles.w3Section} ${styles.w3LightGrey}`}>
                <div className={`${styles.w3Quarter} ${styles.w3Section}`}>
                    <span className={styles.w3Xlarge}>11+</span><br />
                    Partners
                </div>
                <div className={`${styles.w3Quarter} ${styles.w3Section}`}>
                    <span className={styles.w3Xlarge}>55+</span><br />
                    Projects Done
                </div>
                <div className={`${styles.w3Quarter} ${styles.w3Section}`}>
                    <span className={styles.w3Xlarge}>89+</span><br />
                    Happy Clients
                </div>
                <div className={`${styles.w3Quarter} ${styles.w3Section}`}>
                    <span className={styles.w3Xlarge}>150+</span><br />
                    Meetings
                </div>
            </div>

            <h3 className={`${styles.w3TextLightGrey}`}>My Price</h3>
            <div className={styles.w3RowPadding}>
                <div className={`${styles.w3Half}`}>
                    <ul className={`${styles.w3Ul} ${styles.w3White} ${styles.w3Center} ${styles.w3Opacity} ${styles.w3HoverOpacityOff}`}>
                        <li className={`${styles.w3DarkGrey} ${styles.w3Xlarge}`}>Basic</li>
                        <li>Custom Web Development</li>
                        <li>Database Integration (MySQL, MongoDB)</li>
                        <li>Basic API Development</li>
                        <li>Email Support</li>
                        <li>
                            <h2>$500</h2>
                            <span className={styles.w3Opacity}>per project</span>
                        </li>
                        <li className={`${styles.w3LightGrey} ${styles.w3Padding24}`}>
                            <Link to="contact" smooth={true} duration={500}>
                                <button className={`${styles.w3Button} ${styles.w3PaddingLarge}`}>
                                    Sign Up
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.w3Half}>
                    <ul className={`${styles.w3Ul} ${styles.w3White} ${styles.w3Center} ${styles.w3Opacity} ${styles.w3HoverOpacityOff}`}>
                        <li className={`${styles.w3DarkGrey} ${styles.w3Xlarge}`}>Pro</li>
                        <li>Full-Stack Web Development</li>
                        <li>Advanced Database Integration (MySQL, MongoDB, Cassandra)</li>
                        <li>Complex API Development</li>
                        <li>Continuous Support</li>
                        <li>
                            <h2>$1200</h2>
                            <span className={styles.w3Opacity}>per project</span>
                        </li>
                        <li className={`${styles.w3LightGrey} ${styles.w3Padding24}`}>
                            <Link to="contact" smooth={true} duration={500}>
                                <button className={`${styles.w3Button} ${styles.w3PaddingLarge}`}>
                                    Sign Up
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Skill;
