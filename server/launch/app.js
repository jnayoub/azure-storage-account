const dotenv = require("dotenv");
dotenv.config();

const express = require('express');
const authRouter = require('../routers/authRouter');
const fileManagementRouter = require('../routers/fileManagementRouter');
const clientRouter = require('../routers/clientRouter');
const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;
const protocol = process.env.PROTOCOL || 'http';
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(cookieParser());

const mongoodbConnection = require("../connections/database/mongo/mongodb-connection");

app.use('/api', fileManagementRouter);
app.use('/auth', authRouter);
app.use('/', clientRouter);

app.listen(port, () => {
   console.log(`Server started on ${protocol}://${host}:${port}`);
});
