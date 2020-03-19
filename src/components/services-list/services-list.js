import React from 'react';
import ServiceItem from '../service-item/service-item';
import styles from './services-list.module.scss';

import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';
import img4 from './img4.png';
import img5 from './img5.png';
import img6 from './img6.png';
import img7 from './img7.png';
import img8 from './img8.png';

const data = [
    { image: img1, title: 'Производство оборудования' },
    { image: img2, title: 'Металлическая мебель' },
    { image: img3, title: 'Металлоконструкции' },
    { image: img4, title: 'Металлообработка' },
    { image: img5, title: 'Раскрой металла' },
    { image: img6, title: 'Конструкторское бюро' },
    { image: img7, title: 'Аренда техники' },
    { image: img8, title: 'Ремонт техники' },
]

const ServicesList = () => {
    return (
        <ul className={styles.list}>
            {data.map((el, idx) => {
                return <ServiceItem key={idx}  image={el.image} title={el.title}/>
            })}
        </ul>
    )
}

export default ServicesList;