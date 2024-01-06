import React, {useEffect, useRef} from 'react'
import dagmarOne from '../../../assets/d_1.jpg';
import dagmarTwo from '../../../assets/d_2.jpg';
import dagmarThree from '../../../assets/d_3.jpg';
import zuzanaOne from '../../../assets/z_1.jpg';
import zuzanaTwo from '../../../assets/z_2.jpg';
import zuzanaThree from '../../../assets/z_3.jpg';
import styles from '../Home.module.css';
import Marquee from "react-fast-marquee";
import {motion, useInView, useAnimation} from "framer-motion";
import { Link } from 'react-router-dom';

export default function Offers() {
const refFitOne = useRef(null);
const refFitTwo = useRef(null);

const isInViewFitOne = useInView(refFitOne);
const isInViewFitTwo = useInView(refFitTwo)

const mainControlsFitOne = useAnimation();
const mainControlsFitTwo = useAnimation();

useEffect(() => {
    if(isInViewFitOne) {
       mainControlsFitOne.start("visible")

    }

    if(isInViewFitTwo) {
        mainControlsFitTwo.start("visible")
    }
}, [isInViewFitOne, isInViewFitTwo])


  return ( 
    <>
        <div className={styles.offerContainer}>
            <div className={styles.offerText}>
               <Link to="/shop"><h1>Check out this fit</h1></Link>
                <svg className={styles.lineOne} xmlns="http://www.w3.org/2000/svg" width="246.43" height="62.801" viewBox="0 0 246.43 62.801">
                    <path id="Path_4" data-name="Path 4" d="M1736.43,1282.664H1493v-59.8" transform="translate(-1491.5 -1221.363)" fill="none" stroke="#000" strokeLinecap="round" strokeWidth="3"/>
                </svg>

            </div>
            <div className={styles.offerFits} ref={refFitOne}>
                <motion.div
                variants={{
                    hidden: {opacity: 0},
                    visible: { opacity: 1}
                }}
                initial="hidden"
                animate={mainControlsFitOne}
                transition={{duration: 1, delay: 0}}
                >
                    <img src={dagmarOne} alt="fit 1 image" width="100%" />   
                </motion.div>
                <motion.div
                className={styles.two}
                variants={{
                    hidden: {opacity: 0, x: -75},
                    visible: {opacity: 1, x: 0}
                }}
                initial="hidden"
                animate={mainControlsFitOne}
                transition={{duration: 1, delay: 0.5}}
                >
                    <img src={dagmarTwo} alt="fit 1 image" width="100%" />
                </motion.div>
                <motion.div
                className={styles.three}
                  variants={{
                    hidden: {opacity: 0, x: -75},
                    visible: {opacity: 1, x: 0}
                }}
                initial="hidden"
                animate={mainControlsFitOne}
                transition={{duration: 1, delay: 1.25}}
                >
                    <img src={dagmarThree} alt="fit 1 image" width="100%" />
                </motion.div>
            </div>
        </div>
        <div className={styles.marqueeContainer}>
            <div className={styles.marqueeOne}>
                <Marquee autoFill={true}>
                    <div className={styles.marquee}>
                        <span>POPULAR</span>
                    </div>
                </Marquee>
            </div>
            <div className={styles.marqueeTwo}>
                <Marquee autoFill={true} direction='right'>
                    <div className={styles.marquee}>
                        <span>OUTFIT</span>
                    </div>
                </Marquee>
            </div>
        </div>
        <div className={styles.offerContainer}>
            <div ref={refFitTwo} className={styles.offerFits}>
                <motion.div
                className={styles.three}  
                variants={
                    {hidden: {opacity: 0, x: 75},
                    visible: {opacity: 1, x: 0}
                }}
                initial="hidden"
                animate={mainControlsFitTwo}
                transition={{duration: 1.5, delay: 1.25}}
                >
                    <img src={zuzanaThree} alt="fit 2 image" width="100%" />   
                </motion.div>
                <motion.div 
                className={styles.two}
                 variants={
                    {hidden: {opacity: 0, x: 75},
                    visible: {opacity: 1, x: 0}
                }}
                initial="hidden"
                animate={mainControlsFitTwo}
                transition={{duration: 1, delay: 0.5}}
               
                >
                    <img src={zuzanaTwo} alt="fit 2 image" width="100%" />
                </motion.div>
                <motion.div
                variants={{
                    hidden: {opacity: 0},
                    visible: {opacity: 1}
                }} 
                initial="hidden"
                animate={mainControlsFitTwo}
                transition={{duration: 1, delay: 0}}>
                    <img src={zuzanaOne} alt="fit 2 image" width="100%" />
                </motion.div>
            </div>
            <div className={styles.offerText}>
                <Link to="/shop"><h1>New arrivals</h1></Link>
                <svg className={styles.lineTwo} xmlns="http://www.w3.org/2000/svg" width="246.43" height="62.801" viewBox="0 0 246.43 62.801">
                    <path id="Path_5" data-name="Path 5" d="M1493,1282.664h243.43v-59.8" transform="translate(-1491.5 -1221.363)" fill="none" stroke="#000" strokeLinecap="round" strokeWidth="3"/>
                </svg>

            </div>
           
        </div>
    </>

  )
}
