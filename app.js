const http=require('http');
const fs= require('fs');
const server=http.createServer((req,res)=>{
    let url=req.url, method=req.method;
    if(url==='/'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><label for="message">Enter Message</label><br><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
      return  res.end();
    }if(url==='/message' && method==="POST"){
        fs.writeFileSync('message.txt', 'Dummy');
        res.statusCode=302;
        res.setHeader('Location', '/');
        return res.end();
    }
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>About Us Page</title></head>');
        res.write('<body><h1>Hello form my node.js server!</h1></body>');
        res.write('</html>');
        res.end();

});


server.listen(4000);