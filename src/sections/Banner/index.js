import React from 'react'
import banner from '../../assets/img/black-and-white-building-architecture-64q2n3yrvy0zd3cj.webp'
import './index.css'
const Banner = () => {
  return (
    <div className='banner-wrapper'>
    <img src={banner} className="banner-img" />
     <div className='banner-body'>
    <p> i am</p>
    <p> a Front End Developer</p>
    <p> &#180;&#180; I am developing websites optimized with clean code.</p>
    <p> As well as I know javascript framework React.js. &#180;&#180;</p>
     </div>
    </div>
  )
}

export default Banner