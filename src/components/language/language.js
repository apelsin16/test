import React, { useState } from "react";
// import ru from "./ru.png";
// import ua from "./ua.png";
// import uk from "./uk.png";
import styles from "./language.module.scss";

const Language = ({ flag, flags, onSelectFlag }) => {
  const [open, setOpen] = useState(false);

  const openBox = () => {
    if (open) {
      setOpen(false);
    } else {

      setOpen(true);
    }
  };

  const selectFlag = e => {    
    onSelectFlag(e.target.src);
    openBox();
  } 

  return (
    <div className={styles.language}>
      <button className={styles.button} onClick={openBox}>
        <img src={flag} alt="flag" className={styles.flag} />
        <svg
          style={ open ? {transform: `rotate(180deg)`} : {}}
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
      {open ? (
        <div className={styles.box} onClick={selectFlag}>
          <div>
            <img src={flag === flags[0] ? flags[1] : flags[2]} alt="flag" />
          </div>
          <div>
            <img src={flag === flags[0] ? flags[2] : flags[0]} alt="flag" />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Language;
