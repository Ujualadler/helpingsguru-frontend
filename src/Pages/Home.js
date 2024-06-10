import React from 'react'
import Box from '@mui/material/Box';
import Navbar from '../Components/Navbar';
import Slider from '../Components/Slider';
import About from '../Components/About';
import OurSpeakers from '../Components/OurSpeakers';
import UpcomingEvents from '../Components/UpcomingEvents';
import CountDown from '../Components/CountDown';
import OurMagazines from '../Components/OurMagazines';
import CenterTypo from '../Components/CenterTypo';
import Gallery from '../Components/Gallery';
import Testimonials from '../Components/Testimonials';
import Footer from '../Components/Footer';




function Home() {
  return (
   <Box position={'relative'}>
      <Slider/>
      <About/>
      <OurSpeakers/>
      <UpcomingEvents/>
      <CountDown/>  
      <OurMagazines/>
      <CenterTypo/>
      <Gallery/>
      <Testimonials/>
   </Box>
  )
}

export default Home