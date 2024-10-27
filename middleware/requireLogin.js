import jwt from 'jsonwebtoken';
import { model } from 'mongoose';
import { JWT_KEYWORD } from '../config/keys.js';

const { verify } = jwt;
const User = model("User")

const requireLogin = (req, res, next) => {
    const { authorization } = req.headers
    if (!authorization) {
        return res.status(401).json({ error: "You are not logged in" })
    }
    const token = authorization.replace("Bearer ", "")
    verify(token, JWT_KEYWORD, (err, payload) => {
        if (err) {
            return res.status(401).json({ error: "You must be logged in" })
        }

        const { id } = payload
        User.findById(id)
            .then(userdata => {
                req.user = userdata;
                next();
            })
    })
};

export default requireLogin;