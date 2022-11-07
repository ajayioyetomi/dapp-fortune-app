import React from 'react'
import css from '../../css/app.module.css';

const Deploy = () => {
  return (
    <div className={css.deployDiv}>
      <p>
        Hey, you are the Deploy and the deploy will pay a little token to deploy the application.
      </p>
      <p>
        Deployer also have decides the amount to pay to the fortune teller
      </p>
      <p>
        Set the amount to pay in the input below.
      </p>
    </div>
  )
}

export default Deploy