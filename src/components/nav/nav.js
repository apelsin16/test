import React from "react";
import styles from "./nav.module.scss";

const Nav = () => {
  return (
    <nav>
      <ul className={styles.navList}>
        <li className={styles.item}>
          <a href="#home" className={styles.link}>Главная</a>
        </li>
        <li className={styles.item}>
          <a href="#services"  className={styles.link}>
            Услуги
            
          </a>
          <button className={styles.button}>
          <svg
              width="14"
              height="8"
              viewBox="0 0 14 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.0719 -4.36373e-07L7 6.13861L0.928104 -3.09824e-08L-4.04242e-07 0.937293L7 8L14 0.937292L13.0719 -4.36373e-07Z"
                fill="#E4B56B"
              />
            </svg>
          </button>
        </li>
        <li className={styles.item}>
          <a href="#works" className={styles.link}>Наши работы</a>
        </li>
        <li className={styles.item}>
          <a href="#about" className={styles.link}>О нас</a>
        </li>
        <li className={styles.item}>
          <a href="#contacts" className={styles.link}>Контакты</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
