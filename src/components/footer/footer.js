import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styles from './footer.module.scss';
import FooterAbout from '../footer-about/footer-about';
import FooterServices from '../footer-services/footer-services';
import FooterContacts from '../footer-contacts/footer-contacts';

const Footer = () => {
    const isDesktop = useMediaQuery({ minWidth: 1360 })
 return (
    <footer className={styles.footer}>
        <div className={styles.footerTop}>
            <FooterAbout />
            <FooterServices />
            <FooterContacts />
        </div>
        <div className={styles.legal}>
            <p className={styles.text}>{ isDesktop ? "Developed" : null } by<br/> Stubbs</p>
        </div>
    </footer>
 );   
};

export default Footer;