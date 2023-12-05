import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

import './Footer.css'; // Create a CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2023 YourApp. All rights reserved.</p>
        <div className="social-icons">
            {/* Add your social media icons or links here */}
            <a href="https://www.example.com">
                <FaFacebook className='icon' />
            </a>
            <a href="https://www.example.com">
                <CiTwitter className='icon'/>
            </a>
            <a href="https://www.example.com">
            <FaInstagram className='icon'/>
            </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
