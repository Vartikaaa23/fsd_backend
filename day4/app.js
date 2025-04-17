const express =require('express');
const app=express();
app.use(express.json());
let user=[
    {id:1,name:'user1',email:'user@example.com'},
    {id:2,name:'user1',email:'user@example.com'},
    {id:3,name:'user1',email:'user@example.com'},
]
app.get('/',(req,res)=>{
    res.send('hello worls');
})

app.listen(9000,()=>{
    console.log("server strated on port 9000");
})