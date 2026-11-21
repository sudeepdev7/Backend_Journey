const express = require('express');
const app = express();

const userModel = require('./usermodel');

app.get('/', function(req, res) {
    res.send('Hello World');
})

app.get('/create', async function(req, res) {
    let createduser = await userModel.create({ //asynch operation
        name: "Sulu",
        username: "sulu11",
        email: "anything@example.com"
    })

    res.send(createduser)
})




app.get('/read', async(req, res) => {
    //let user = await userModel.find({ username: "joseph23" });
    let user = await userModel.find();
    res.send(user)
})

app.get('/update', async function(req, res) {
    let updateduser = await userModel.findOneAndUpdate({ username: "sudeep123" }, { name: "Sudeep Devkota" }, { new: true });
    res.send(updateduser)
})

app.get('/delete', async(req, res) => {
    let deleteduser = await userModel.findOneAndDelete({ username: "joseph23" })
    res.send()
})


app.listen(3000);