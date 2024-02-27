import Image from 'next/image';
import Link from 'next/link';
import styles from '../src/styles/home.module.css'

const Header = () => {
    return (
        <header className={styles.head}>
            <div className={styles.logodiv}>
                <Image src='/Logo.svg' width={70} height={70} alt='img' className={styles.logo} />
            </div>
            <div className={styles.buttondiv}>
                <div className={styles.headbutton}>
                    Sign Up
                </div>
                <div className={styles.headbutton}>
                    Logins
                </div>
            </div>
        </header>
    );
};

export default Header;
