import { Schema, model } from 'mongoose';
const { ObjectId } = Schema.Types

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    profilepic: {
        type: String,
        default: "https://res.cloudinary.com/instaclonewebapp/image/upload/v1642244581/44884218_345707102882519_2446069589734326272_n_zf1loq.jpg"
    },
    followers: [{ type: ObjectId, ref: "User" }],
    following: [{ type: ObjectId, ref: "User" }]
})

model("User", userSchema)