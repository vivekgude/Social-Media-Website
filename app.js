import express, { json } from 'express';
import path from 'path';
import connectDB from './config/database.js';
import './models/otp.js';
import './models/post.js';
import './models/user.js';
import authRoutes from './routes/auth.js';
import postRoutes from './routes/post.js';
import userRoutes from './routes/user.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;
app.use(json());

connectDB();

app.use('', authRoutes);
app.use('', postRoutes);
app.use('', userRoutes);

if (process.env.NODE_ENV == "production") {
    const clientBuildPath = path.resolve(__dirname, 'client', 'build');
    app.use(express.static(clientBuildPath));
    app.get("*", (req, res) => {
        res.sendFile(path.join(clientBuildPath, 'index.html'));
    });
}

app.listen(PORT, () => {
    console.log("Server is running on", PORT)
})