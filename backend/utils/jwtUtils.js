import jwt from 'jsonwebtoken';
import { configDotenv } from 'dotenv';
configDotenv();


const SECRET_KEY = process.env.JWT_KEY;

export const generateToken = (payload, expiresIn = "24h") => {
    return jwt.sign(payload, SECRET_KEY, { expiresIn });
};


