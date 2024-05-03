//dependencies
const express = require('express')
const app = express();
const morgan = require('morgan')

//routes
const pokemon =require("./routes/pokemon")
const user = require("./routes/user")

//middleware
const index = require("./middleware/index")
const auth = require("./middleware/auth")
const notFound = require('./middleware/notfound')
const cors = require('./middleware/cors')

app.use(cors);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", index)
app.use("/user", require("./routes/user"))
app.use(auth)
app.use("/pokemon", pokemon)
app.use(notFound)

app.listen(process.env.PORT || 3000,  () => {
    console.log("server is running...")
});
