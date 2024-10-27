import mongoose from 'mongoose';
import { MONGOURI } from './keys.js';

const connectDB = async () => {
    try {
        mongoose.connect(MONGOURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error(`Error connecting to MongoDB: ${err.message}`);
        process.exit(1); // Exit process with failure
    }
};

// Connection events
mongoose.connection.on('error', (err) => {
    console.error(`MongoDB connection error: ${err}`);
});

export default connectDB;
