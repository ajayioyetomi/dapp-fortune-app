import React,{useEffect,useState} from 'react'
import css from '../../css/app.module.css';
import {Button} from '../../ui-components';
import {useReach} from '../../hooks/ReachHook';

const Deploy = () => {
  const {defaults} = useReach();
  const [amountVal,setAmountVal,setAmount] = useState(defaults.defaultAmount);

  const handleAmount = (e) =>{
     const val = e.target.value;
     setAmountVal(val);
     setAmount(val);
  }

  useEffect(()=>{
    setAmountVal(defaults.defaultAmount);
  },[])

  return (
    <div className={css.deployDiv}>
      <p>
        Hey, you are the deployer and the deployer will pay a little token to deploy the contract.
      </p>
      <p>
        Deployer will also decide the amount to pay to the fortune teller
      </p>
      <p>
        Set the amount to pay in the input below, and click on the deploy button to deploy the contract.
      </p>
      <div>
        <input type='number' value={amountVal?amountVal:defaults.defaultAmount} onChange={(e)=>handleAmount(e)} min='1' />
        <Button text='Deploy' />
      </div>
    </div>
  )
}

export default Deploy