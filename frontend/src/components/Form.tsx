import { useState,useEffect } from 'react'
import {socket} from '../socket'
import './Form.css'
import Chatmsg from './Chatmsg'


function Form() {
  const [msg,setMsg]=useState('')
    const [recievedMsg,setrecievedMsg]=useState([])
    const [err,setErr]=useState(null)
    const handelSubmit=(e)=>{
      e.preventDefault()
        if (msg.trim()!=='') {
          try{
            socket.emit('chat message',msg)
          }catch(e){
            if(e.code==='ENOTCONN'){
              setErr('Error:Could not connect to socket server')
              console.log(err);
            }else{
              setErr('something went wrong')
              console.log(err);
            }
          }finally{
            setMsg('')
          }

        }
    }

  useEffect(()=>{
      socket.on('chat message',(msg)=>{
        setrecievedMsg((prevMsg)=>[...prevMsg,msg])
        
      })
    
      return ()=>socket.off('chat message')

      },[recievedMsg])

  return <div>
    <div className='chat-container'>
    <ul>
    {
      recievedMsg.map((message,index)=>{
        return <Chatmsg  text={message} key={index}/>
      })
    }
    </ul>
    </div>
    <form className="Form" onSubmit={(e)=>handelSubmit(e)}>
    <div className='chat-textbox'>
    <input onChange={(e)=>setMsg(e.target.value)} value={msg} className="input" />
    </div>
    <button className="btn" type='submit'>send</button>
    </form>
    </div>
}

export default Form
