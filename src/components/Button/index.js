import React from 'react'
import './index.css'
const Button = (props) => {
  return (
    <button className={"btn "+props.classAtr}>
     {props.name}
    </button>
  )
}

export default Button