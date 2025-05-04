import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
console.log(PORT);

app.use(express.json());
app.use(cors());
app.use(helmet()); // for security --> helmet is a security middleware that helps to protect your app by setting various HTTP headers
app.use(morgan("dev"))
app.get('/test', (req, res) => {
    console.log(res.getHeaders());
    res.send('hello from the test')
});

app.listen(PORT, () => {
    console.log('server is running' + PORT);
}); 