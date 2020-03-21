import React from 'react';
import styles from './footer-title.module.scss';

const FooterTitle = ({text, border, padding}) => {    
    return (
    <h4 className={styles.title} style={{border: border, paddingBottom: `${padding}px`}}>{text}</h4>
    )
}

export default FooterTitle;