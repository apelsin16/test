import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

import SectionTitle from './../section-title/section-title';
import ServicesList from '../services-list/services-list';
import GearBig from '../gear-big/gear-big';
import GearSmall from '../gear-small/gear-small';
import styles from './services.module.scss';

const Services = () => {
    const [scrollY, setScrollY] = useState(0);

    const isDesktop = useMediaQuery({  minWidth: 1360 });
    const isMobile = useMediaQuery({  maxWidth: 1359 });

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
              { isDesktop && <GearBig scroll={scrollY} top={67} left={1}/> }
              { isDesktop && <GearSmall scroll={scrollY} top={300} left={2}/> }
              { isDesktop && <GearSmall scroll={-scrollY} top={51} left={86} /> }
              { isDesktop && <GearBig scroll={-scrollY} top={250} left={85}/> }
                
                
                
                
            </div>
            <button className={styles.button}>
              { isDesktop && "Быстрый расчет цены по чертежу"}
              { isMobile && "Расчет стоимости"}
            </button>

        </section>
    )
}

export default Services;