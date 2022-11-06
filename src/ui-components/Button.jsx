import React from 'react'
import css from  './css/button.module.css';

const Button = ({click,classname,styles,text}) => {
  return (
    <button style={styles?styles:{}} onClick={click?click:()=>{}} className={`${css.btn} ${classname ? classname :''}`}>
        {text}
    </button>
  )
}

export default Button