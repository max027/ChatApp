import Form from "./components/Form"
import './App.css'
import {socket} from './socket'
import { useEffect } from "react"


function App() {
  useEffect(()=>{
    function onConnect(msg:any) {
      console.log(msg)    
    }
    socket.on('connection',(socket)=>{
      console.log("connected");
    })
  },[])
  return <div className="main">
    <h1>RealTime chatapp</h1>
    <Form/>
    </div>
}

export default App
