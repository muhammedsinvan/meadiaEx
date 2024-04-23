import React from 'react';
import Banner from '../components/Banner/Banner';
import Navbar from '../components/Navbar/Navbar';
import WhoWeAre from '../components/WhoWeAre/WhoWeAre';
import WhatWeDo from '../components/WhatWeDo/WhatWeDo';
import Vedio from '../components/Vedio/Vedio';
import Footer from '../components/Footer/Footer';
import Whatsapp from '../components/Whatsapp/Whatsapp';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <WhoWeAre />
      <WhatWeDo />
      <Vedio />
      <Footer />
      <Whatsapp />
    </div>
  )
}

export default Home
