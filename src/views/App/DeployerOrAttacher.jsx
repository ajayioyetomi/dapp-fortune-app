import React from 'react'
import {Button} from '../../ui-components';
import css from '../../css/app.module.css';

const DeployerOrAttacher = () => {
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
        />
        <Button text='A Fortune Teller' 
          style={{backgroundColor:'var(--white-color)',color:'var(--bold-color)'}}
          title='Attacher'
          />
      </div>
    </div>
  )
}

export default DeployerOrAttacher