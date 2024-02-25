require('dotenv').config()
const express = require("express");
const app = express();

const port = 4000;

const profileData = {
            name: "Anjali Kushwaha",
            email: "anjali@gmail.com",
            city: "Bhopal",
            gender: "Female",
            education: "B.Tech"
}

app.get('/', (req, res) => {
            res.send("Hello World!");
});

app.get('/twitter', (req, res) => {
            res.send("This is the twitter page");
});
app.get('/login', (req, res) => {
            res.send("<h1>Please login to the page </h1>");
})
app.get('/data', (req, res) => {
            res.json(profileData);
})
app.listen(process.env.PORT, () => {
            console.log(`Example app listening on port ${port}`);
});