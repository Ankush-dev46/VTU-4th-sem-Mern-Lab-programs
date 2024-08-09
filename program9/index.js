const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/local');
    console.log('db connected')
}
const userSchema = new mongoose.Schema({
    uname: String,
    pass: String
});

const User = mongoose.model('users', userSchema);

const server = express();

server.use(cors());
server.use(bodyParser.json());

// CRUD - Create
server.post('/demo', async (req, res) => {
    const username = req.body.uname, password = req.body.pass;
    const docs = await User.findOne({ username });
    if (docs) {
        if (docs.pass === password) {
            res.json("Login Success");
        } else {
            res.json("Invalid UserName or Password")
        }
    }
})

server.listen(8080, () => {
    console.log('server started')
})
