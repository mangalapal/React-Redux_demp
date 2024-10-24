import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Counter() {
    const  dispatch=useDispatch();
    const counter=useSelector((state)=>state.counter);
const increaseHandler=()=>{
    dispatch({type:'increase',payload:5})
}
const  decrementHandler=()=>{
    dispatch({type:"decrement"})
}
  return (
    <div >


        <h1>{counter}</h1>
        <button onClick={increaseHandler} style={styles.button}>Increment</button>
        <button onClick={decrementHandler} style={styles.button}>Decrement</button>
    </div>
  )
}

export default Counter

const styles={
    button:{
        border:"2px solid  black",
        padding:"3px",
        backgroundColor:"pink",
        borderRadius:"5px",
        color:"#000"
    }
}