import React from "react";

const GearSmall = ({ scroll, top, left }) => {
  return (
    <svg
    style={{ transform: `rotate(${scroll}deg)`, position: 'absolute', top: `${top}px`, left: `${left}%`, zIndex: '-1' }}
      width="179"
      height="179"
      viewBox="0 0 179 179"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.1624 37.9327C13.5601 40.7888 13.7771 45.2075 16.6269 47.7988L27.5563 57.7181C24.8579 62.9932 22.8986 68.5219 21.6458 74.1843L6.91708 74.8952C3.05002 75.079 0.0722925 78.3495 0.26713 82.2102L1.33897 104.75C1.51648 108.606 4.79006 111.589 8.65396 111.4L23.3859 110.695C25.1821 116.214 27.6753 121.521 30.8518 126.528L20.9285 137.438C18.3348 140.297 18.544 144.727 21.4047 147.312L38.1181 162.497C40.9734 165.085 45.3953 164.874 47.9779 162.022L57.9068 151.109C63.1778 153.787 68.7097 155.752 74.3635 157.003L75.0729 171.754C75.2472 175.605 78.5318 178.582 82.387 178.39L104.938 177.312C108.8 177.131 111.772 173.864 111.586 170.005L110.877 155.268C116.384 153.464 121.715 150.986 126.711 147.802L137.626 157.722C140.473 160.322 144.904 160.113 147.481 157.264L162.666 140.551C165.269 137.709 165.051 133.276 162.207 130.681L151.263 120.763C153.967 115.485 155.942 109.969 157.188 104.296L171.937 103.595C175.784 103.401 178.747 100.132 178.567 96.27L177.495 73.7301C177.306 69.8803 174.033 66.8971 170.188 67.0683L155.436 67.7777C153.646 62.2696 151.162 56.965 147.98 51.9606L157.911 41.0389C160.511 38.1915 160.296 33.7641 157.435 31.165L140.728 15.9911C137.86 13.3951 133.444 13.6035 130.854 16.4674L120.948 27.3818C115.651 24.696 110.121 22.7227 104.47 21.4776L103.756 6.72927C103.584 2.87001 100.299 -0.106862 96.4437 0.0847943L73.9014 1.1653C70.0462 1.35696 67.0662 4.63605 67.2547 8.4858L67.9577 23.2264C62.4519 25.0076 57.1213 27.4852 52.146 30.6796L41.2103 20.7493C38.3582 18.1667 33.9465 18.3576 31.3528 21.2161L16.1624 37.9327ZM114.161 61.9879C129.203 75.672 130.319 98.9332 116.655 113.985C102.994 129.029 79.7129 130.148 64.6685 116.473C49.6305 102.808 48.5059 79.5305 62.1876 64.4972C75.8456 49.4482 99.1234 48.3236 114.161 61.9879Z"
        fill="#C4C4C4"
        fillOpacity="0.33"
      />
    </svg>
  );
};

export default GearSmall;
