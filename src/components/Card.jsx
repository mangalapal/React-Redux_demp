import React, { useContext } from 'react'
import cardContext from '../contextApi/CardContext'

function Card({title,price}) {
   const{dark,setDark}= useContext(cardContext)
   console.log(dark)
   const chnHandler=()=>{
    setDark("light");
   }
  return (
    <div style={styles.card}>
    <h1>{title}</h1>
    <p>Price:{price}</p>
    <button onClick={chnHandler}>order</button>
    </div>
  )
}

export default Card
const styles={
    card:{
      border:"1px  solid black",
      padding:"5px",
      borderRadius:"5px"

    }
  }