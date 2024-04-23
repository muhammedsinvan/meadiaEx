import React from 'react';
import './Footer.css';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';

const Footer = () => {
  return (
    <footer>
    <div class="footer-logo">
        <img src="https://www.exmedia.in/assets/images/logo/exlogo.png" alt="Company Logo" />
    </div>
    <div class="footer-content">
        <div class="footer-menu">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
        <div class="footer-contact">
            <div class="contact-item">
                <EmailOutlinedIcon/>
                <p> example@gmail.com</p>
            </div>
            <div class="contact-item">
                <PhoneIphoneOutlinedIcon />
                <p>+1234567890</p>
            </div>
            <div class="contact-item">
                <FmdGoodOutlinedIcon/>
                <p> 123 Main St, City, Country</p>
            </div>
        </div>
        <div class="footer-social">
            <ul>
                <li>INSTAGRAM</li>
                <li>FACEBOOK</li>
                <li>YOUTUBE</li>
                <li>TWITTER</li>
                <li>LINKEDIN</li>
                <li>PINTEREST</li>
                <li>THREADS</li>
            </ul>
        </div>
    </div>
</footer>



  )
}

export default Footer
