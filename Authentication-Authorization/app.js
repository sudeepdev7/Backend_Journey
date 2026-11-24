const cookieParser = require('cookie-parser');
const express = require('express');
const app = express()
app.use(cookieParser())

const bcrypt = require('bcrypt')

app.get('/', (req, res) => {
    // res.cookie("name", "sudeep");
    // res.send("done")

    bcrypt.genSalt(10, function(err, salt) { //for encryption 
        bcrypt.hash("helolololo", salt, function(err, hash) {
            console.log(hash)
        });
    });

    bcrypt.compare("helolololo", "$2b$10$gIEe1qiGGK6ABtomxBWvc.SXFLmlGz/MHgW1U67mTfyCO0eHZk8MC", (err, result) => {
        console.log(result)
    })

    res.send("working")

})

app.get('/read', (req, res) => {
    console.log(req.cookies);
    res.send("initial cookie")
})

app.listen(3000);