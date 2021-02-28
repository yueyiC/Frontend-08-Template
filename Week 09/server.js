const http = require("http");

http.createServer((req,res)=>{
  // console.log("req",req)
  let body = []
  req.on("error",(err)=>{
    console.error(err)
  }).on("data",(chunk)=>{
    console.log("data",chunk)
    body.push(chunk.toString());
  }).on("end",()=>{
    // console.log("body 1",body);
    // body=Buffer.concat(body).toString();
    // console.log("body 2",body);
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end(
`<html maaa=a >
<head>
<style>
body div #myid{
  width:100px;
  background-color: #ff5000;
}
body div img{
  width:30px;
  background-color: #ff1111;
}
</style>
</head>
<body>
  <div>
    <img id="myid"/>
    <img />
  </div>
</body>
</html>`)
  })
}).listen(8088)

console.log("server started")