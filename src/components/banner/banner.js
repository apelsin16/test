import React from 'react';
import Slider from 'infinite-react-carousel';
import styles from './banner.module.scss'; 
import './dots.css';

const Banner = () => {
    return (
        <div className={styles.wrapper}> 
            <Slider dots arrows={false} dotsClass='dots' className={styles.slider}>
                <div className={styles.wrapperItem} >
                    <div className={styles.wrapTitle}>
                        <h2 className={styles.title}>Высокоточное изготовление изделий из металла по чертежам</h2>
                    </div>
                </div>
                <div className={styles.wrapperItem}>
                    <div className={styles.wrapTitle}>
                        <h2 className={styles.title}>Высокоточное изготовление изделий из металла по чертежам</h2>
                    </div>
                </div>
                <div className={styles.wrapperItem}>
                    <div className={styles.wrapTitle}>
                        <h2 className={styles.title}>Высокоточное изготовление изделий из металла по чертежам</h2>
                    </div>
                </div>
                <div className={styles.wrapperItem}>
                    <div className={styles.wrapTitle}>
                        <h2 className={styles.title}>Высокоточное изготовление изделий из металла по чертежам</h2>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default Banner;
