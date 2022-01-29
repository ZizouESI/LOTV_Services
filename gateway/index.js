const express = require("express");
const cors = require("cors");
const proxy = require("express-http-proxy");

const app = express();



app.use(cors());
app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
    next();
});


app.use('/auth',proxy("http://auth:8001"));
app.use('/resources',proxy("http://resources:8002"));


app.listen(8000,()=>{
    console.log("Gateway listening to port 8000 !!!");
})
