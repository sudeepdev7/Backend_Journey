//initialize a project with npm
//express install
//setting up parsers for form 

const express = require('express');
const app = express();
const path = require('path');

app.use(express.json()); //parsers
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs'); //setting up ejs as view engine
app.use(express.static(path.join(__dirname, 'public'))); //setting up public static files

app.get("/", function(req, res) {
    res.render("index");
});
app.listen(3000, function() {
    console.log("Server started on port 3000");
});

//settiing up ejs for ejs pages
//instal ejs from npm and setup as middleware for view engine



//dynamic routing and how to get data coming from front end at backend route

app.get("/profile/:username", function(req, res) { //:sudeep--> variable name for dynamic routing
    // req.params.username;
    res.send(`Welcome, ${req.params.username}`);
});

app.get("/author/:username/:age", function(req, res) { //:sudeep--> variable name for dynamic routing
    // res.send(req.params); return whole object
    res.send(`Welcome ${req.params.username}, your age is ${req.params.age}`);
});
//setting up public static files