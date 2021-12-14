import express from 'express';
import mongoose from 'mongoose';
import fileUpload from 'express-fileupload';

const app = express();
const PORT = 7000;
const DB_URL = 'mongodb+srv://user:user@cluster0.dwqqf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

app.use(express.json());
app.use(fileUpload());


async function startApp() {
    try {
        await mongoose.connect(DB_URL);
        app.listen(PORT, () => console.log('Приложение запущено!'));
    } catch(error) {
        console.error(error);
    }
}

startApp();