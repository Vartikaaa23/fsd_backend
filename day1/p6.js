const fs=require ('fs');

const write=(data)=>{

fs.writeFile("./data.txt",data,(err)=>{
    if(err)
        console.log("Error wrriting File",err);
    else
    console.log("File written Successsfully");

    });
}
write("i am new data");