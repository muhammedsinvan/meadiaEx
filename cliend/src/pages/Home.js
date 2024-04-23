import React, { useEffect, useState } from 'react';
import './Home.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import Banner from '../components/Banner/Banner';
import Navbar from '../components/Navbar/Navbar';
import WhoWeAre from '../components/WhoWeAre/WhoWeAre';
import WhatWeDo from '../components/WhatWeDo/WhatWeDo';
import Vedio from '../components/Vedio/Vedio';
import Footer from '../components/Footer/Footer';
import Whatsapp from '../components/Whatsapp/Whatsapp';

const Home = () => {

  const [showScrollButton, setShowScrollButton] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };


  return (
    <div>
      <Navbar />
      <Banner />
      <WhoWeAre />
      <WhatWeDo />
      <Vedio />
      <Footer />
      <Whatsapp />


  {showScrollButton && (
    <button className="scroll-to-top-btn" onClick={scrollToTop}>
      <KeyboardArrowUpIcon />
    </button>
  )}
  
    </div>
  )
}

export default Home
