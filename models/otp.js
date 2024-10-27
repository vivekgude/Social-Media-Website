import { Schema, model } from 'mongoose';

const otpSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: true,
    },
    expiryIn: {
        type: Number,
        required: true
    }
});

model("Otp", otpSchema)