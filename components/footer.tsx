import React from 'react';
import styles from '../src/styles/home.module.css';

const Footer = () => {
    return (
        <>
            <footer className={styles.foot}>
                <div className={styles.logodiv}>
                    © MoodBrew {new Date().getFullYear()}
                </div>
                <div className={styles.buttondiv}>
                    <a href="https://github.com/NeemaToto/MoodBrew.git">Link to Group Projects Repo</a>
                </div>
            </footer>
        </>
    );
};

export default Footer;
