import React,{useState} from 'react'
import "./App.css";
import { useSelector, useDispatch } from "react-redux";

import {  Formik, Field, Form} from 'formik';
import {
  decrement,
  increment,
  reset,
  sum,
} from "./actions/index";


function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  


  const handleSubmit =(values)=>{
    const sumValues = values.number1 + values.number2
        dispatch(sum(sumValues))
   
  }

  return (
    <div className="App">

      <h3>Counter</h3>
      <h3>{counter.count}</h3>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
     

      <Formik
      initialValues={{
        number1 : 0,
        number2 : 0
      }}
      
       onSubmit={(values)=>handleSubmit(values)}
     >
       <Form>
         <label htmlFor="number1">enter number1</label>
         <Field name="number1" type="number" />
         
         <label htmlFor="number2">enter number2</label>
         <Field name="number2" type="number" />
         <button type="submit">Submit</button>
        
       </Form>
     </Formik>
     <h3>{counter.result}</h3>
   




    </div>
  );
}

export default App;