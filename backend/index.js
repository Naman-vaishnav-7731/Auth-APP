import express from "express"
import { configDotenv } from 'dotenv';
import router from './routes/auth.route.js';
import { db, sequelize } from './models/index.js';
import bodyParser from 'body-parser';
import cors from 'cors';

configDotenv(); // Get all env data

const app = express();
const PORT = process.env.PORT || 3002;

const corsSettings = {
    origin: "http://localhost:3001",
    credentials:true,
    optionSuccessStatus:200
};

app.use(cors(corsSettings));

// Parse request of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type -application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Established Database Connection 
sequelize.authenticate().then(() => {
    console.log("Database is Connected....")
}).catch((err) => {
    console.log("Database Error", err);
});

// All Routes
app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});






