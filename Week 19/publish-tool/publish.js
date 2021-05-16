let http = require("http");
let archiver = require("archiver");
let child_process = require('child_process');
let querystring = require('querystring');

// 1. 打开 https://github.com/login/oauth/authorize
child_process.exec(`open https://github.com/login/oauth/authorize?client_id=Iv1.e7d2d6fc9d2218ee`)

// 3. 创建 server，接受 token，后点击发布
http.createServer(function(request, response) {
    let query = querystring.parse(request.url.match(/^\/\?([\s\S]+)$/)[1]);
    publish(query.token)
    response.end()
  }).listen(8083)
  
  function publish(token) {
    let request = http.request({
      hostname: '127.0.0.1',
      port: 8082,
      method: 'post',
      path: `/publish?token=${token}`,
      headers: {
        'Content-Type': 'application/octet-stream'
      }
    }, response => {
    })
    const archive = archiver("zip",{
        zlib:{level:9}
    });
    
    archive.directory("./sample/",false);
    archive.finalize();
    archive.pipe(request);
}

