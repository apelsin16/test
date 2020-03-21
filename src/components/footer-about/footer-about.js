import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styles from './footer-about.module.scss';
import FooterTitle from '../footer-title/footer-title';

const FooterAbout = () => {
    const isDesktop = useMediaQuery({ minWidth: 1360 });
    const padding = isDesktop ? 30 : 20;
    return (
        <div className={styles.about}>
            <FooterTitle text='О компании' padding={padding}/>
            <nav className={styles.nav}>
                <ul>
                    <li className={styles.item}><a href="#works" className={styles.link}>Наши работы</a></li>
                    <li className={styles.item}><a href="#contacts" className={styles.link}>Контакты</a></li>
                    <li className={styles.item}><a href="#delivery" className={styles.link}>Доставка</a></li>
                    <li className={styles.item}><a href="#order" className={styles.link}>Форма заказа</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default FooterAbout;