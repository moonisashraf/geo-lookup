const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const requestIp = require('request-ip');
var geoip = require('geoip-lite');
var cors = require('cors')


app.use(cors())



app.get("/", (req,res)=>{
  
  let ip = requestIp.getClientIp(req)
  var geo = geoip.lookup(ip);
  res.json(geo)
})




app.listen(3000, ()=>{
    console.log("Server is running on PORT", 3000)
})
