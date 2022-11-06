import React from 'react'
import css from '../../css/app.module.css';
import {Button} from '../../ui-components';
import {useReach} from '../../hooks/ReachHook';

const Welcome = () => {
  const {setViews} = useReach();
  const handleGetStarted = ()=>{
     setViews({view:'DeployerOrAttacher'})
  }
  return (
    <>
      <div className={css.welcomeDiv}>
        <h2>WELCOME</h2>
        <p>
          Welcome to the fortune game, where you get your fortune read or you are the fortune teller. Get you game on!!! 
        </p>
        <div>
          <Button text='Get Started' click={()=>handleGetStarted()} />
        </div>        
      </div>
    </>
    
  )
}

export default Welcome