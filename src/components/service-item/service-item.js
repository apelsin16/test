import React from 'react';
import styles from './service-item.module.scss';

const ServiceItem = ({ image, title}) => {
    return (
        <li 
            className={styles.wrapper} 
            style={{backgroundImage: `url(${image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className={styles.titleWrapper}>
                <h3 className={styles.title}>{title}</h3>
            </div>
                        
        </li> 
    )
}

export default ServiceItem;