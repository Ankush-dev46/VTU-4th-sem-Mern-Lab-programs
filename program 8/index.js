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
    fname: String,
    price: Number
});

const User = mongoose.model('fruits', userSchema);

const server = express();

server.use(cors());
server.use(bodyParser.json());

// CRUD - Create
server.post('/demo', async (req, res) => {

    let user = new User();
    const keys = Object.keys(req.body);
    for (let i = 0; i < keys.length; i++) {
        user[keys[i]] = req.body[keys[i]]
    }
    const doc = await user.save();
    console.log('Input Data : ', doc);
    res.json(doc);
})

server.get('/data', async (req, res) => {
    const docs = await User.find({});
    res.json(docs)
})

server.listen(8080, () => {
    console.log('server started')
})
