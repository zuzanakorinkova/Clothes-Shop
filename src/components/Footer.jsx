import React from 'react';
import Instagram from '../assets/instagram.svg';
import Behance from '../assets/behance.svg';


export default function Footer() {
  return (
    <footer>
        <div className="footerBackground">
            <div className="contactInfo">
            <p>Dastin - a manifesto for public accessibility and the actualisation 
                of the culture of the peoples of Central Europe in contemporary fashion
            </p>
            <div className="socialIcons">
                <a href="#" target="_blank"><img src={Instagram} alt="Instagram icon"  /></a>
                <a href="#" target="_blank"><img src={Behance} alt="Behance icon"  /></a>
            </div>
            </div>
        </div>
    </footer>
  )
}
