import React from 'react'
import css from '../../css/app.module.css';
import {Button} from '../../ui-components';

const Welcome = () => {

  return (
    <>
      <div className={css.welcomeDiv}>
        <h2>WELCOME</h2>
        <p>
          Welcome to the fortune game, where you get your fortune read or you are the fortune teller. Get you game on!!! 
        </p>
        <div>
          <Button text='Get Started' />
        </div>        
      </div>
    </>
    
  )
}

export default Welcome