import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import logo from "./logo.png";
import Nav from "./../nav/nav";
import Search from "../search/search";
import Language from "../language/language";
import styles from "./header.module.scss";

const langueges = [
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAVCAYAAAC+NTVfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABNSURBVHgB7dOxEcAgDENRKZezt8gCmYCF2YhFXLqBYwigQH+BV+jEiOhmht1lJt4Juzt2RxIPDib8PpwoteNQ2lz4PTjb/+lqwoUvbwAXsQskR/MhPQAAAABJRU5ErkJggg==",
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAVCAYAAAC+NTVfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA6SURBVHgB7dRRDQAgDMTQG8EWSjCDFmygAz2bjEuW1sD7a2i/lKkhY+Dg4P3xedaVq8gv9goODt4TL1prBnKRKhgLAAAAAElFTkSuQmCC",
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAVCAYAAAC+NTVfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPJSURBVHgBxZZ5TBRXHMe/Mx2g2mI35XRL2qItsaGBtGBii2z/KKVFi6ShilvtlrgioLSQKmmtbNq6EG3ogcQW3DVSgUpttQjVeCVe8QJRPGIQFQR2XeQSBRaE3Z3nvGd2RUFdvPgkv0zmzbz53b83XPyS9aSotAKiSOAMPWdz0LxYi/aScseap3IGfH/RwD0wzalvjB3jihkRQeALslW4uG854j4OwdMgImwSzm9ZjJXjOsFbWtvxqp8HSnLVOLNTgy9ip+Bxw/McZkeHYn++GusCOJjej0NbUSn4M+Gz0JC+Av1NJgS+Ph40EvUHtMwIF+EZPAo0vItU7+GYTo0sGOE2NxGt6zdB/vV8BJ/aDl4WMRVt0kJNtBot+r9hjwQ14sTW7/Bp1NsYKdTTDxVvYFuOCt+4tkOcl4qrZbsgT41HUEUZ5GnzILzgDn752NfAb1gDWWQ4DD/8BhoJ48o8ZkRgwHj88/t8RyScUUrDSz3VTwSeU6egRVcCn6Q5zFO/ZSkQPGQ4dLwOc9IKAM4/mVCJS9GT2soaYliRR47KgkilTyhp1PxMxL4bxM4lQzuxWG3kYnIGe8cu9H5gwEoazjWR+q9+JBVeIaTypSnEmL2G2HrMjv3G5k7yweeriF0nZzb3O3qMkywf86wLJA1M2JqLwGQwdQs1Q1pt4h/aB+7r67eA2G63NFe3MMO5Bh9E18EqVqB23F6WY9zUUIwUjoYNowSPUWRUlQu0WEZK96GhOXcPe4icm3sHVTt3q9oHM1wF36vaH7Svt2/gjnf456WTiMpnqevQ3XPD8UA09+LyT/mo8g9H1SthaNKuQt15I6Q+x3BYbSIajB23lYsiTLl/4vgEBSq9Q2DQ5uJybSMSlv4Fu06eTqTDm9KxRZcEb093WK93S0rzUB0YCdPqQvgmKuG2UYdlfd6YFJMNi2V45f0DVkxQaBCfXsiM4N1c4fdtEoJPbJWuyWgrLsO1aXORJZhQpVezicnRyUM3WzquoSW/mM13is8CJeonv4PMooPYc7jWcd47e57HRr2F71On480AObu3tHag478duJJXDEvbVXh8EgmBetoqKWyWvLRJofZSRqMrNgaZu2ugS1yLh2Xz9mqU7jzJPNR8OY0dVr7SjPecOR2GrNXo3LYXwqngKIhSvnwXzEbjuwpk/F+Njeq1Tv/Z3A/6jYJ/jzBRSUYsSYhgkfD/NYOlgvdSxeLFHRugvgAoEnQoKT/2WBTfTeHmowj6KBMzF+lZTbh4e0BY2iVD2aycIW3wpKDpKN99GsqYybgJW3DhpxcOOaoAAAAASUVORK5CYII="
];
const Header = () => {
  const [flag, setFlage] = useState(langueges[0]);
  const [ mobileMenuOpen, setMobileMenuOpen ] = useState(false);

  const isDesktop = useMediaQuery({  minWidth: 1360 });
  const isMobile = useMediaQuery({ maxWidth: 1359 });

  const selectFlag = text => {
    setFlage(text);
  };

  const openMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  }

  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" className={styles.logo} />
      { isDesktop && <Nav />}

      <div className={styles.actions}>
        <Search />
        { isDesktop && <Language flag={flag} flags={langueges} onSelectFlag={selectFlag} />}
        
          { isMobile && <button className={styles.menuButton} onClick={openMenu}>
            { mobileMenuOpen ? (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 1.8L16.2 0L9 7.2L1.8 0L0 1.8L7.2 9L0 16.2L1.8 18L9 10.8L16.2 18L18 16.2L10.8 9L18 1.8Z" fill="#3E3E3E"/>
              </svg>
            ) : (
              <svg
            width="26"
            height="18"
            viewBox="0 0 26 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="26" height="2.57143" fill="#3E3E3E" />
              <rect y="7.71436" width="26" height="2.57143" fill="#3E3E3E" />
              <rect y="15.4286" width="26" height="2.57143" fill="#3E3E3E" />
            </svg>
            )
          }
            
          </button> }   

          {mobileMenuOpen && (
            <div className={styles.menu}> 
              <div className={styles.menuHeader}>
                <p className={styles.menuTitle}>Меню</p>
                <ul className={styles.flags}>
                  <li>
                    <button className={styles.flagButton}><img src={langueges[0]} alt="russia's flag"/></button>
                  </li>
                  <li>
                    <button className={styles.flagButton}><img src={langueges[1]} alt="ukrainian flag"/></button>
                  </li>
                  <li>
                    <button className={styles.flagButton}><img src={langueges[2]} alt="UK's flag"/></button>
                  </li>
                </ul>
              </div>
              <nav>
                <ul>
                  <li><a className={styles.link} href="#services">Услуги</a></li>
                  <li><a className={styles.link} href="#works">Наши работы</a></li>
                  <li><a className={styles.link} href="#about">О нас</a></li>
                  <li><a className={styles.link} href="#contacts">Контакты</a></li>
                </ul>
              </nav>
            </div>
          )}
      </div>
    </header>
  );
};

export default Header;
