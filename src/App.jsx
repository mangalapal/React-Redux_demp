
import './App.css'
import Card from './components/Card'
import cardContext from './contextApi/CardContext';
import {Provider, useState} from "react"
function App() {

const [dark,setDark]=useState("dark")
  return (
    <div style={styles.container}>
      <cardContext.Provider value={{dark,setDark}}>
      <Card title={'Pant'} price={50}/>
      <Card title={'Shirt'} price={500}/>
      </cardContext.Provider>


    </div>
  )
}

export default App;
const styles={
  container:{
    display:"flex",
    justifyContent:"space-around",
    margin:"4px"
  }
}


