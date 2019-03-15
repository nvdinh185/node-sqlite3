const express = require('express');
const app = express();

var main = (isHttp) => {
    
  const resource = require('./routes/resource');
  app.use('/excel', resource);

  if (isHttp) {
    const httpServer = require('http').createServer(app);
    const portHttp = process.env.PORT || isHttp;
    httpServer.listen(portHttp, () => console.log("Server is running!"));   
  }
}

const isHttp = 8080;

main(isHttp);