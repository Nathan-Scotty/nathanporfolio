import { useRouter } from 'next/router';
import styles from './stylesheets/Skill.module.css';
import { Link } from 'react-scroll';
import { FormattedMessage } from 'react-intl';

const Skill = () => {
    return (
        <div className={`${styles.w3Content}`} id="about">
            <h3 className={`${styles.w3TextLightGrey}`}>
                <FormattedMessage id="skills_heading" />
            </h3>
            <p className={styles.w3Wide}>
                <FormattedMessage id="web_development" />
            </p>
            <div className={styles.w3White}>
                <div className={styles.w3DarkGrey} style={{ height: '28px', width: '95%' }}></div>
            </div>
            <p className={styles.w3Wide}>
                <FormattedMessage id="mobile_development" />
            </p>
            <div className={styles.w3White}>
                <div className={styles.w3DarkGrey} style={{ height: '28px', width: '85%' }}></div>
            </div>
            <p className={styles.w3Wide}>
                <FormattedMessage id="desktop_development" />
            </p>
            <div className={styles.w3White}>
                <div className={styles.w3DarkGrey} style={{ height: '28px', width: '80%' }}></div>
            </div>
            <br />
            <div className={`${styles.w3Row} ${styles.w3Center} ${styles.w3Section} ${styles.w3LightGrey}`}>
                <div className={`${styles.w3Quarter} ${styles.w3Section}`}>
                    <span className={styles.w3Xlarge}>11+</span><br />
                    <FormattedMessage id="partners" />
                </div>
                <div className={`${styles.w3Quarter} ${styles.w3Section}`}>
                    <span className={styles.w3Xlarge}>55+</span><br />
                    <FormattedMessage id="projects_done" />
                </div>
                <div className={`${styles.w3Quarter} ${styles.w3Section}`}>
                    <span className={styles.w3Xlarge}>89+</span><br />
                    <FormattedMessage id="happy_clients" />
                </div>
                <div className={`${styles.w3Quarter} ${styles.w3Section}`}>
                    <span className={styles.w3Xlarge}>150+</span><br />
                    <FormattedMessage id="meetings" />
                </div>
            </div>

            <h3 className={`${styles.w3TextLightGrey}`}>
                <FormattedMessage id="pricing_heading" />
            </h3>
            <div className={styles.w3RowPadding}>
                <div className={`${styles.w3Half}`}>
                    <ul className={`${styles.w3Ul} ${styles.w3White} ${styles.w3Center} ${styles.w3Opacity} ${styles.w3HoverOpacityOff}`}>
                        <li className={`${styles.w3DarkGrey} ${styles.w3Xlarge}`}>
                            <FormattedMessage id="basic_plan" />
                        </li>
                        <li>
                            <FormattedMessage id="custom_web_development" />
                        </li>
                        <li>
                            <FormattedMessage id="database_integration" />
                        </li>
                        <li>
                            <FormattedMessage id="basic_api_development" />
                        </li>
                        <li>
                            <FormattedMessage id="email_support" />
                        </li>
                        <li>
                            <h2>$500</h2>
                            <span className={styles.w3Opacity}>
                                <FormattedMessage id="per_project" />
                            </span>
                        </li>
                        <li className={`${styles.w3LightGrey} ${styles.w3Padding24}`}>
                            <Link to="contact" smooth={true} duration={500}>
                                <button className={`${styles.w3Button} ${styles.w3PaddingLarge}`}>
                                    <FormattedMessage id="sign_up" />
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.w3Half}>
                    <ul className={`${styles.w3Ul} ${styles.w3White} ${styles.w3Center} ${styles.w3Opacity} ${styles.w3HoverOpacityOff}`}>
                        <li className={`${styles.w3DarkGrey} ${styles.w3Xlarge}`}>
                            <FormattedMessage id="pro_plan" />
                        </li>
                        <li>
                            <FormattedMessage id="full_stack_web_development" />
                        </li>
                        <li>
                            <FormattedMessage id="advanced_database_integration" />
                        </li>
                        <li>
                            <FormattedMessage id="complex_api_development" />
                        </li>
                        <li>
                            <FormattedMessage id="continuous_support" />
                        </li>
                        <li>
                            <h2>$1200</h2>
                            <span className={styles.w3Opacity}>
                                <FormattedMessage id="per_project" />
                            </span>
                        </li>
                        <li className={`${styles.w3LightGrey} ${styles.w3Padding24}`}>
                            <Link to="contact" smooth={true} duration={500}>
                                <button className={`${styles.w3Button} ${styles.w3PaddingLarge}`}>
                                    <FormattedMessage id="sign_up" />
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
