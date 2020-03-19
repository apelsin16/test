import React, { useState, useEffect } from 'react';

import SectionTitle from './../section-title/section-title';
import ServicesList from '../services-list/services-list';
import GearBig from '../gear-big/gear-big';
import GearSmall from '../gear-small/gear-small';
import styles from './services.module.scss';

const Services = () => {
    const [scrollY, setScrollY] = useState(0);

    function logit() {
      setScrollY(window.pageYOffset/2);
    }
  
    useEffect(() => {
      function watchScroll() {
        window.addEventListener("scroll", logit);
      }
      watchScroll();
      
      return () => {
        window.removeEventListener("scroll", logit);
      };
    }, []);
    return (
        <section className={styles.section}>
            <SectionTitle text='Услуги' />
            <div className={styles.listWrapper}>
              <ServicesList />
                <GearBig scroll={scrollY} top={67} left={1}/>
                <GearSmall scroll={scrollY} top={300} left={2}/>
                <GearSmall scroll={-scrollY} top={51} left={86} />
                <GearBig scroll={-scrollY} top={250} left={85}/>
            </div>
            <button className={styles.button}>Быстрый расчет цены по чертежу</button>

        </section>
    )
}

export default Services;