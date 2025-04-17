const http=request('http');

const server =http.createServer((req,res)=>{
    res.writeHead(200,{'constent-Type':'application/plain'});
    if(req.url==='/setdata'&& req.method==='POST')
    {
        let body='';
        req.on('data',chunk=>{
            body+=chunk;
        });
        req.on('end',()=>{
            let data=JSON.parse(body);
            console.log(data);
            res.end(JSON.stringify({message:'data recieved'}));
        });
    }
});