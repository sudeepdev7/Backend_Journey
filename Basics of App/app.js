const express = require('express')
const app = express();
const PORT = 3000;
const userModel = require("./models/user")
const postModel = require("./models/post")

app.get('/', (req, res) => {
    res.send("POLOLOLOLO")
})

app.get('/create', async(req, res) => {
    let user = await userModel.create({
        username: "Sudeep",
        age: 20,
        email: "Ay"
    })

    res.send(user)
})

app.get('/post/create', async(req, res) => {
    let post = await postModel.create({
        postdata: "Hello everyone",
        user: "6b0727a9aad16163e1e5fd15",

    });

    let user = await userModel.findOne({ _id: "6b0727a9aad16163e1e5fd15" })
    user.post.push(post._id);
    await user.save();
    res.send({ post, user })


})



app.listen(PORT, () => {
    console.log(`Server is runnning on port ${PORT}`)
})