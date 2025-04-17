const http= require("http");

const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plan'});
    if(req.url==='/home'){
        req.end(`<h1>Welcome to home</h1>`);
    }
    else if(req.url==='/about'){
        res.end(`<h1>about page</h1>`);
        }
    else if (req.url==='contact'){
        res.end(`<h1>about page</h1>`);
    }
    else{
        res.end(`<h1>page not found</h1>`);
    }
    });
server.listen(9000,(err)=>{
    if(err)
        console.log("Error starting server",err)
    else
    console.log("Server started on post 9000")
})
