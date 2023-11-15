import React from 'react'
import dagmarOne from '../../../assets/d_1.jpg';
import dagmarTwo from '../../../assets/d_2.jpg';
import dagmarThree from '../../../assets/d_3.jpg';
import zuzanaOne from '../../../assets/z_1.jpg';
import zuzanaTwo from '../../../assets/z_2.jpg';
import zuzanaThree from '../../../assets/z_3.jpg';
import styles from '../Home.module.css';


// MOVEMENT
// hover effect on images - first, we see one large image => on hover => two images show up from background of the image to display
        // position: absolute, on hover => position: relative ?
// auto horizontal scrolling text
// html:
{/* <div class="wrapper">
  <div class="marquee">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat, ante eu bibendum tincidunt, sem lacus vehicula augue, ut suscipit.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat, ante eu bibendum tincidunt, sem lacus vehicula augue, ut suscipit.
    </p>
  </div>
</div> */}

//css 
// .wrapper {
//     max-width: 100%;
//     overflow: hidden;
//   }
  
//   .marquee {
//     white-space: nowrap;
//     overflow: hidden;
//     display: inline-block;
//     animation: marquee 10s linear infinite;
//   }
  
//   .marquee p {
//     display: inline-block;
//   }
  
//   @keyframes marquee {
//     0% {
//       transform: translate3d(0, 0, 0);
//     }
//     100% {
//       transform: translate3d(-50%, 0, 0);
//     }
//   }

export default function Offers() {
  return ( 
    <>
        <div className={styles.offerContainer}>
            <div className={styles.offerText}>
               <a href="#"><h1>Checkout this fit</h1></a>
                <svg className={styles.lineOne} xmlns="http://www.w3.org/2000/svg" width="246.43" height="62.801" viewBox="0 0 246.43 62.801">
                    <path id="Path_4" data-name="Path 4" d="M1736.43,1282.664H1493v-59.8" transform="translate(-1491.5 -1221.363)" fill="none" stroke="#000" stroke-linecap="round" stroke-width="3"/>
                </svg>

            </div>
            <div className={styles.offerFits}>
                <div>
                    <img src={dagmarOne} alt="fit 1 image" width="100%" />   
                </div>
                <div>
                    <img src={dagmarTwo} alt="fit 1 image" width="100%" />
                </div>
                <div>
                    <img src={dagmarThree} alt="fit 1 image" width="100%" />
                </div>
            </div>
        </div>
        <div className={styles.offerContainer}>
            <div className={styles.offerFits}>
                <div>
                    <img src={zuzanaThree} alt="fit 2 image" width="100%" />   
                </div>
                <div>
                    <img src={zuzanaTwo} alt="fit 2 image" width="100%" />
                </div>
                <div>
                    <img src={zuzanaOne} alt="fit 2 image" width="100%" />
                </div>
            </div>
            <div className={styles.offerText}>
                <a href="#"><h1>New arrivals</h1></a>
                <svg className={styles.lineTwo} xmlns="http://www.w3.org/2000/svg" width="246.43" height="62.801" viewBox="0 0 246.43 62.801">
                    <path id="Path_5" data-name="Path 5" d="M1493,1282.664h243.43v-59.8" transform="translate(-1491.5 -1221.363)" fill="none" stroke="#000" stroke-linecap="round" stroke-width="3"/>
                </svg>

            </div>
           
        </div>
    </>

  )
}
