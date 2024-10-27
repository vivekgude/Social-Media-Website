import { config } from 'dotenv';

if (process.env.NODE_ENV !== 'production') {
    config();
}

let keys;

if (process.env.NODE_ENV === 'production') {
    keys = await import('./prod.js');
} else {
    keys = await import('./dev.js');
}

export const { MONGOURI, JWT_KEYWORD, NODEMAILER_PASS } = keys;
