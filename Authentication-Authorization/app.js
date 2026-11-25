// const cookieParser = require('cookie-parser');
// const express = require('express');
// const app = express()
// app.use(cookieParser())

// //encr
// // const bcrypt = require('bcrypt')

// // app.get('/', (req, res) => {
// //     // res.cookie("name", "sudeep"); --> cookies 
// //     // res.send("done")

// //     bcrypt.genSalt(10, function(err, salt) { //for encryption 
// //         bcrypt.hash("helolololo", salt, function(err, hash) {
// //             console.log(hash)
// //         });
// //     });

// //     bcrypt.compare("helolololo", "$2b$10$gIEe1qiGGK6ABtomxBWvc.SXFLmlGz/MHgW1U67mTfyCO0eHZk8MC", (err, result) => {
// //         console.log(result)
// //     })

// //     res.send("working")

// // })

// // app.get('/read', (req, res) => {
// //     console.log(req.cookies);
// //     res.send("initial cookie")
// //})

// //jwt
// var jwt = require('jsonwebtoken')
// app.get('', (rer, res) => {
//     let token = jwt.sign({ email: "devkotasudeep615@gmail.com" }, "secret")
//     res.cookie("token", token)
//     res.send("sent cookies")
// })

// app.get('/read', (req, res) => {
//     //extract data
//     let data = jwt.verify(req.cookies.token, "secret")
//     console.log(data)

//     console.log(req.cookies.token)
//     res.send("Cookies is present here too")
// })

// app.listen(3000);


//phase 2

const path = require('path')
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const userModel = require("./models/user")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(cookieParser())


let port = 3000;
app.get('/', (req, res) => {
    res.render("index")
})

app.post('/create', (req, res) => {
    let { username, email, password, age } = req.body;

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async(err, hash) => {

            let createduser = await userModel.create({
                username,
                email,
                password: hash,
                age
            });

            let token = jwt.sign({ email }, "shhhh");
            res.cookie("token", token)
            res.redirect('/');
        });
    });

});

app.get('/login', (req, res) => {
    res.render("login")

})

app.post("/login", async(req, res) => {
    let user = await userModel.findOne({ email: req.body.email });
    if (!user) return res.send("something went wrong either on email or password.")
    bcrypt.compare(req.body.password, user.password, function(err, result) {
        if (result) {
            let token = jwt.sign({ email: user.email }, "shhhh");
            res.cookie("token", token)
            res.send("yes you can login")

        } else res.send("something went wrong either on email or password.")
    })
})

app.get("/logout", (req, res) => {
    res.cookie("token", "")
    res.redirect('/')
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})