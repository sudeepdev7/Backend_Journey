//creating routes
//sudeep.com/hello --> /hello is route

const express = require('express');
const app = express();

app.use(function(req, res, next) { //runs everytime before going to any routes
    console.log("Middle ware is running")
    next();
});
app.use(function(req, res, next) { //runs everytime before going to any routes
    console.log("Middle ware is running second time")
    next();
});


//use is run everytime put get is run only when the route is called
app.get("/", function(req, res) {
    res.send("I am champion");
});

app.get("/profile", function(req, res) {
    res.send("Hey Sudeep Devkota here");
});

app.get("/about", function(req, res) { //with error handling
    // res.send("I am a web developer");
    return next(new Error("Something went wrong")) //console
});

//error handling always at last

app.use(function(err, req, res, next) {
    console.log(err.stack)
    res.status(500).send("Something Broke!, we dont know any idea"); //frontend
});

app.listen(3000);