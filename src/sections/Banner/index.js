import React from 'react'
import banner from '../../assets/img/black-and-white-building-architecture-64q2n3yrvy0zd3cj.webp'
import './index.css'
import { motion} from "framer-motion";
const Banner = () => {
  const imageAnimate={
    offscreen:{x:-100, opacity:0},
    onscreen:{
    x:0,
    opacity:1,
    rotate:[0,10,0],
    transition: {type:"spring",
    bounce:0.4,
    duration:1}
  }

}

const textAnimate={
    offscreen:{y:100, opacity:0},
    onscreen:{y:50,
    opacity:1,
    transition: {type:"spring",
    bounce:0.8,
    duration:1}
 }

}
  return (
    <div className='banner-wrapper'>
    <img  src={banner} className="banner-img" />
     <div className='banner-body'>
    <motion.p  animate={{
      scale: [1, 4, 2, 1, 1]
    }} variants={textAnimate} 
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{once:false, amount:0.5}}
        transition={{staggerChildren:0.5}}> i am</motion.p>
    <motion.p variants={textAnimate} 
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{once:false, amount:0.5}}
        transition={{staggerChildren:0.5}}> a Front End Developer</motion.p>
    <motion.p variants={textAnimate} 
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{once:false, amount:0.5}}
        transition={{staggerChildren:0.5}}> &#180;&#180; I am developing websites optimized with clean code.</motion.p>
    <motion.p variants={textAnimate} 
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{once:false, amount:0.8}}
        transition={{staggerChildren:0.8}}> As well as I know javascript framework React.js. &#180;&#180;</motion.p>
     </div>
    </div>
  )
}

export default Banner