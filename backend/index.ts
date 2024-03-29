const {createServer}=require("node:http") 
const express=require('express')
const {Server}=require('socket.io')

const app=express()
const server=createServer(app)
const connection=new Server(server,{
    cors: {
    origin: "http://localhost:5173"
  }

})

connection.on('connection',(socket)=>{
  console.log("client connected");
  socket.on('chat message',(msg)=>{
    connection.emit('chat message',msg)   
  })
  socket.on('disconnect',()=>{
    console.log('client disconnected');
  })
  
})

server.listen(8000,()=>{
  console.log("listen");
})
  



