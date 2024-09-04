const express = require("express")
const app = express()
const cors = require("cors")
require("dotenv").config()
const port = process.env.PORT || 5000
app.use(cors({
    origin: '*', // Allow all origins
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allow all methods
    allowedHeaders: '*', // Allow all headers
    credentials: true // Allow credentials (optional)
}));

app.use(express.json())

app.use(require("./routes/record"))
const dbo = require("./db/conn")

app.use((req, res, next) => {
    console.log('CORS headers applied');
    next();
});

app.get("/", function (req, res) {
    res.send("App is running")
})

dbo.connectToMongoDB(function (error) {
    if (error) throw error

    app.listen(port, () => {
        console.log("Server is running on port: " + port)
    })
})