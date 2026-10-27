import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottels.css'
const Bottles = () => {
  const [bottles , setBottles] = useState([])

  useEffect(() => {
    fetch('bottles.json')
    .then(res => res.json())
    .then(data => setBottles(data))
  },[])

  return (
    <div>
      <h2>Total Bottles : {bottles.length} </h2>
    <div className="bottle-container">
          {
        bottles.map(bottle => 
        <Bottle bottle={bottle}></Bottle>
      )
      }
    </div>
    
    
    </div>
   
  );
};

export default Bottles;