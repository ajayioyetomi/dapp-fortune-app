import React,{useRef,useEffect} from 'react'

let count = 0;
let start = false;
let counter = null;
let content = '';


const Waiting = () => {
  const spanRef = useRef();

  useEffect(()=>{

    counter = setInterval(()=>{
      count++;
      content+= '.';
      if(count == 4){
        count = 0;
        content = '';
      }
      if(spanRef && spanRef.current){
         spanRef.current.textContent = `${content}`;
      }
    },3000)
  },[])

  return (
    <div>
      <p>Please wait <span ref={spanRef}></span></p>
    </div>
  )
}

export default Waiting