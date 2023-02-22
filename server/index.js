const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
/* const multer = require('multer'); */
const contactRouter = require('./routes/contact');



app.use(express.json());
app.use(cors())
dotenv.config()
app.use(express.json())

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('Connected to Db'))
    .catch(console.error)

/* 
const storage = multer.diskStorage({
    destination: (req, file, cd) => {
        cd(null, "images")
    }, filename: (req, file, cd) => {
        cd(null, 'hello.jpg');
    }
})

const upload = multer({ storage: storage })
app.post('/api/upload', upload.single("file"), (req, res) => {
    res.status(200).json('Foto has been uploaded')
}) */

app.use('/api/contacts', contactRouter);

app.listen(5000, () => console.log('server work on 5000'))


