import React from "react";
import russia from "./russia.png";
import styles from "./language.module.scss";

const Language = () => {
  return (
    <button className={styles.button}>
      <img src={russia} alt="flag" className={styles.flag} />
      <svg
        className={styles.svg}
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
      </svg>{" "}
    </button>
  );
};

export default Language;
