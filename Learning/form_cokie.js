//session - cookie
//we can put any data in front end browser and when we req anything from backend
//data saved in frontend automatically comes to backend
//to stay logged in we use session and cookie

//user entered data --> converts into blob -> unreadble string --> blod need to be readble in backend

const express = require('express')
const app = express()

app.use(express.json()); //convert json(blob) data in readable format
app.use(express.urlencoded({ extended: true })); //convert form data into readable format

app.get("/", function(req, res) {
    res.send("champion mera sudeep")
})

app.get("/profile", function(req, res) {
    res.send("Hey Sudeep Devkota here");
})

app.listen(3000, function() {
    console.log("server is running on port 3000")
})