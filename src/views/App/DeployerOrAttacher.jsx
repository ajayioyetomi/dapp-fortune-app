import React from 'react'
import {Button} from '../../ui-components';
import css from '../../css/app.module.css';
import { useReach } from '../../hooks/ReachHook';

const DeployerOrAttacher = () => {
  const {setViews} = useReach();
  const readMyFortune = () =>{
    setViews({view:'Deploy',wrapper:'DeployerWrapper'});
  }

  const becomeAFortuneTeller = () =>{
    setViews({view:'Attach',wrapper:'AttacherWrapper'});
  }

  return (
    <div className={css.deployerOrAttacher}>
      <h2>Make your decision</h2>
      <p>
         Do you want your fortune read Or <br/><br/>
         Do you want to be a fortune teller.
      </p>
      <div>
        <Button text='Read My Fortune'
          title='Deployer'
          click={()=>readMyFortune()}
        />
        <Button text='A Fortune Teller' 
          style={{backgroundColor:'var(--white-color)',color:'var(--bold-color)'}}
          title='Attacher'
          click={()=>becomeAFortuneTeller()}
        />
      </div>
    </div>
  )
}

export default DeployerOrAttacher