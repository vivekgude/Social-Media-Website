import express, { json } from 'express';
import connectDB from './config/database.js';
import './models/otp.js';
import './models/post.js';
import './models/user.js';
import authRoutes from './routes/auth.js';
import postRoutes from './routes/post.js';
import userRoutes from './routes/user.js';


const app = express();
const PORT = process.env.PORT || 3001;
app.use(json());

connectDB();

app.use('', authRoutes);
app.use('', postRoutes);
app.use('', userRoutes);

if (process.env.NODE_ENV == "production") {
    app.use('client/build')
    const path = require('path')
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

app.listen(PORT, () => {
    console.log("Server is running on", PORT)
})