import React from "react";
import styles from './info.module.scss';

const Info = ({ title, text, image }) => {
  return (
    <div className={styles.wrapper} style={{ background: `linear-gradient(0deg, rgba(62, 62, 62, 0.29) 0%, rgba(62, 62, 62, 0) 100%), url(${image})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}>
      <div
        className={styles.infoWrapper}
       
      >
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};

export default Info;
