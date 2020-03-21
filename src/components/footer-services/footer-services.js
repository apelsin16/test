import React from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./footer-services.module.scss";
import FooterTitle from "../footer-title/footer-title";

const FooterServices = () => {
  const isDesktop = useMediaQuery({ minWidth: 1360 });
  const padding = isDesktop ? 30 : 20;
  return (
    <div className={styles.services}>
      <FooterTitle text="Услуги" padding={padding} />
      <nav className={styles.nav}>
        {isDesktop ? (
          <ul className={styles.list}>
          <li className={styles.item}>
            <a href="#works" className={styles.link}>
              Производство оборудования
            </a>
          </li>
          <li className={styles.item}>
            <a href="#contacts" className={styles.link}>
              Металлическая мебель
            </a>
          </li>
          <li className={styles.item}>
            <a href="#delivery" className={styles.link}>
              Металлоконструкции
            </a>
          </li>
          <li className={styles.item}>
            <a href="#order" className={styles.link}>
              Металлообработка
            </a>
          </li>
          <li className={styles.item}>
            <a href="#works" className={styles.link}>
              Раскрой металла
            </a>
          </li>
          <li className={styles.item}>
            <a href="#contacts" className={styles.link}>
              Конструкторское бюро
            </a>
          </li>
          <li className={styles.item}>
            <a href="#delivery" className={styles.link}>
              Аренда техники
            </a>
          </li>
          <li className={styles.item}>
            <a href="#order" className={styles.link}>
              Ремонт техники
            </a>
          </li>
        </ul>
        ) : (
          <ul className={styles.list}>
          <li className={styles.item}>
            <a href="#works" className={styles.link}>
              Производство оборудования
            </a>
          </li>
          <li className={styles.item}>
            <a href="#works" className={styles.link}>
              Арт-объекты
            </a>
          </li>          
          <li className={styles.item}>
            <a href="#contacts" className={styles.link}>
              Металлическая мебель
            </a>
          </li>
          <li className={styles.item}>
            <a href="#delivery" className={styles.link}>
              Металлообработка
            </a>
          </li>
          <li className={styles.item}>
            <a href="#order" className={styles.link}>
              Лазерная резка
            </a>
          </li>
          <li className={styles.item}>
            <a href="#works" className={styles.link}>
              Металлоконструкции
            </a>
          </li>
          <li className={styles.item}>
            <a href="#contacts" className={styles.link}>
              Аренда спецтехники
            </a>
          </li>
        </ul>
        )}
      </nav>
    </div>
  );
};

export default FooterServices;
