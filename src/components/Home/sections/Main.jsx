import React from "react";
import TopImg from "../../../assets/topimg.jpg";
import SmallImg from "../../../assets/topimg_sm.jpg";
import styles from "../Home.module.css";
import { motion } from "framer-motion";

export default function Main() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.topimages}>
        <h1 className={styles.companyName}>Core.</h1>
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className={styles.large}
          src={TopImg}
          alt="contemporary-art"
        ></motion.img>
        <motion.img
          initial={{ opacity: 0, y: 75 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className={styles.small}
          src={SmallImg}
          alt="ema_chamb"
        ></motion.img>
      </div>
      <div className={styles.topText}>
        <p>
          Dastin - a manifesto for public accessibility and the actualisation of
          the culture of the peoples of Central Europe in contemporary fashion
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="121.393"
          height="398.025"
          viewBox="0 0 121.393 398.025"
        >
          <path
            id="Path_6"
            data-name="Path 6"
            d="M1528,588.922V760.57h119.393V984.947"
            transform="translate(-1527 -587.922)"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );
}
