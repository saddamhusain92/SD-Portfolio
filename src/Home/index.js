import React from 'react'
import Navigation from '../components/Navigation'
import Banner from '../sections/Banner';
import profile from './../assets/img/profile.jpg'
import { motion } from "framer-motion";
import './index.css'

const Home = () => {
  const imageAnimate = {
    offscreen: { x: -100, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      rotate: [0, 10, 0],
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1
      }
    }

  }
  return (
    <div className='Home-page'>
      <Navigation />
      <Banner />
      <div className='about'>
        <h4 className='wrapper-header-'>About Me</h4>
        <div className='about-wrapper'>
        <motion.div variants={imageAnimate} initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ staggerChildren: 0.5 }} className='img-box'>
          <div className='profile-img'>
            <img src={profile} alt="profile" height={250} width={250} />
          </div>
        </motion.div>
        <div className='about-me'>
        <p className='about-header'>
          details
        </p>
        </div>

        </div>

      </div>
    </div>
  )
}

export default Home