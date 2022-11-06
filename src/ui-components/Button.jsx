import React from 'react'
import css from  './css/button.module.css';

const Button = ({click,classname,style,text, title}) => {
  return (
    <button title={title?title:text} style={style?style:{}} onClick={click?click:()=>{}} className={`${css.btn} ${classname ? classname :''}`}>
        {text}
    </button>
  )
}

export default Button