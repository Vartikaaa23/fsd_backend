const http = require('http');
const fs=require('fs/promises');

const server=http.createServer(async (req,res)=>{
    res.setHeader('constent-Type','application/json');
    res.statusCode =200;
    if(req.url==='/getdata'&& req.method==='GET')
    {
        const data=await fs.readFile('.data.json','utf8');
        res.end(JSON.stringify(data));
    }
    else if(req.url==='/setdata'&& req.method==='POST')
    {
        let body='';
        req.on('data',chunk => {
            body +=chunk;
        });
        req.on('end',async ()=>{
            let user=[];
            user=await fs.readFile('./data.json');
            user=JSON.parse(users);
            const newid=users.length>0?users[users.length-1].id+1:1;
            const data = JSON.parse(body);
            data.id=newid;
            user.push(data);
            await fs.writeFile('./data.json',JSON.stringify(users,null,2));
            res.end(JSON.stringify({message:'data saved'}));
        })
    }
    else
    {}
})

server.listen(9000,() => {
    console.log('server running on port 9000');
})