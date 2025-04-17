const.fs=require('fs');
const data="i am append data"
fs.appendFile("./data.txt",data,(err)=>{
    if(err)
        console.log(err);
    console.log("Data appended");


});