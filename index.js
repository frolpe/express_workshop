const express = require('express')
const app = express();
const morgan = require('morgan')
const pokemon =require("./routes/pokemon")

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req,res,next)=>{
    res.status(200).json({code: 1, message: "Bienvenido al Pokedex"})
})

app.use("/pokemon", pokemon)

app.use((req, res, next) => {
    return res.status(404).send({code:404, message: "URL not fo und"})
})

app.listen(process.env.PORT || 3000,  () => {
    console.log("server is running...")
});