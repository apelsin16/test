import React from "react";
import logo from "./logo.png";
import Nav from "./../nav/nav";
import Search from "../search/search";
import Language from "../language/language";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" className={styles.logo} />
      <Nav />
      <div className={styles.actions}>
        <Search />
        <Language />
      </div>
    </header>
  );
};

export default Header;
