import { useState } from 'react'

import './App.css'

function App() {

   const [height,setheight]=useState("");
   const [weight,setweight]=useState("");
   const [bmi,setbmi]=useState(null);
   const [bmistatus,setbmistatus]=useState("");
   const [errormsg,seterrormsg]=useState("");
   
   const calculatebmi=()=>{
    const isValidHeight=/^\d+$/.test(height)
   const isValidWeight=/^\d+$/.test(weight)
    if(isValidHeight && isValidWeight){
         const heightinmeter=height/100;
         const bmivalue=weight/(heightinmeter*heightinmeter);
         setbmi(bmivalue.toFixed(2));
         if(bmivalue<18.5){
          setbmistatus("UnderWeight");
         }
         else if(bmivalue>=18.5 &&bmivalue<24.9)  {
          setbmistatus("NormalWeight");
         }
         else if(bmivalue>=25 &&bmivalue<29.9)  {
          setbmistatus("OverWeight");
         }
        else{
          setbmistatus("Obese");
        }
         
        seterrormsg("");
    }
    else{
      setbmi(null);
      setbmistatus("");
      seterrormsg("Please enter valid numeric values for height and weight.")
    }
   }
   const clear=()=>{
    setbmi(null);
    setheight("");
    setweight("");
    setbmistatus("");
   }
  return (
    <>
      <div className='bmi-calculater'>
        <div className="box"></div>
        <div className="data">
          <h1>BMI Calculater</h1>
         {errormsg&& <p className='error'>{errormsg}</p>}
          <div className="input-container">
            <label  htmlFor='height'>Height(cm):</label>
            <input type="text" id='height' value={height} onChange={(e)=>setheight(e.target.value)}/>
          </div>
         
          <div className="input-container">
            <label  htmlFor='weight'>Weight(kg):</label>
            <input type="text" id='weight' value={weight} onChange={(e)=>setweight(e.target.value)}/>
          </div>
          <button onClick={calculatebmi}>Calculate BMI</button>
          <button  className='clearbtn' onClick={clear}>Clear</button>
          {bmi!==null &&(
            <div className="result">
            <p>Your BMI is:{bmi}</p>
            <p>Status:{bmistatus}</p>

          </div>
          )}
        </div>
        
      </div>
    </>
  )
}

export default App
