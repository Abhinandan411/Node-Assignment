import express from'express';
import logger from './logger.js';

const app = express();
const port = 7373;

app.use(logger)
app.get("/" , (req,res)=>{
    res.send("Hii there");
})

app.listen(port , ()=>{
    console.log("Server started at port ", port);
})