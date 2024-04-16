const express = require('express');
const app = express();


app.get("/", (req,res,next)=>{
    res.status(200)
    res.send("Bienvenido")
})

app.get("/:name", (req,res,next)=>{
    res.status(200)
    res.send("Buenas tardes señor " + req.params.name)
})

app.listen(process.env.PORT || 3000,  () => {
    console.log("server is running...")
});