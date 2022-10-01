var http = require('http');
var fs = require('fs');
var app = http.createServer(function(request,response){
    var url = request.url;
    let now = new Date();
    if(request.url == '/'){
      let templete = 
    `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Infinity and Beyond</title>
      </head>
    `;
    }
    if(request.url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    let templete =
    `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Infinity and Beyond</title>
    </head>
    <body>
        <h1>LIHO</h1>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <p id="msg"></p>
        <script src="script.js"></script>
        <p>Now time is${now}</p>
  </body>
</html>
    `;

    response.end(templete);
 
});
app.listen(3000);