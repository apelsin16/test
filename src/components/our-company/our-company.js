import React from "react";
import styles from "./our-company.module.scss";
import SectionTitle from "../section-title/section-title";
import Info from "../info/info";
import img from "./img.png";
import img1 from "./img1.png";

const OurCompany = () => {
  return (
    <section className={styles.section}>
      <SectionTitle text="Наша компания" />
      <Info
        image={img}
        text="Люди – профессионалы с большим опытом работы. Полный спектр работ по металлообработке в одном месте
         – комплексный индивидуальный подход. Конструкторский отдел. Логистика. Многолетний опыт машиностроения – 
         создание промышленного"
        title='Почему мы?'
      />
      <Info 
        image={img1}
        text='Люди – профессионалы с большим опытом работы. Полный спектр работ по металлообработке в одном месте 
        – комплексный индивидуальный подход. Конструкторский отдел. Логистика. Многолетний опыт машиностроения – 
        создание промышленного'
        title='Наши преимущества'
      />
    </section>
  );
};

export default OurCompany;
