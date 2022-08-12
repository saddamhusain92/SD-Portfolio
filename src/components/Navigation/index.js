import React, { useState } from 'react'
import './index.css'
import { MdOutlineMenuOpen,MdClose } from 'react-icons/md';
import logo from '../../assets/img/logo.png'
import { NavLink } from "react-router-dom";
import Button from '../Button';
const Navigation = () => {
const[show,setShow] = useState({
    active:false,
    classAccess:"mobile-menu-wrapper-close",
    mobileSlidee:"mobile-menu-slider-close"
})
    const NavData = [
       {
            id:1,
            name:"Home",
            icon:"",
            path:"/"
        },
        {
            id:2,
            name:"About",
            icon:"",
            path:"/about"
        },
        {
            id:3,
            name:"Service",
            icon:"",
            path:"/services"
        },
        {
            id:4,
            name:"Portfolio",
            icon:"",
            path:"/portfolio"
        },
       
        {
            id:5,
            name:"Blogs",
            icon:"",
            path:"/blog"
        }


    ]
    const controllSlide =()=>{
    show.active?setShow({
    active:false,
    classAccess:"mobile-menu-wrapper",
    mobileSlidee:"mobile-menu-slider"
    }):setShow({
        active:true,
        classAccess:"mobile-menu-wrapper-close",
        mobileSlidee:"mobile-menu-slider-close"
        })
    }
  
  return (
 <div className='Navigation'>
       <div className='main-nav-bar'>
    <div className='Logo'>
    <img src={logo} alt ="sdhusain" height={40} />
    </div>
    <div className='nav-section'>
    {NavData.map((ele)=>(
        <NavLink key={ele.id} to={ele.path}>
         {ele.name}
        </NavLink>
    ))}
    </div>
    <div className='button-section'>
      <Button name="Contact"/>
      <MdOutlineMenuOpen className='mobile-menu' onClick={controllSlide}/>
    </div>
    </div>
    <div className={show.mobileSlidee} >
    <div className={show.classAccess}>
     <div className='close-btn' onClick={controllSlide}><MdClose className='close-cross'/></div>
     <div className='mobile-nav-link'>
      <ul className='mobile-link'>
      {NavData.map((ele)=>(
        <li key={ele.id}>
        <NavLink  to={ele.path}>
         {ele.name}
        </NavLink>
        </li>
    ))}
      </ul>
     </div>
    </div>

    </div>
 </div>
  )
}

export default Navigation