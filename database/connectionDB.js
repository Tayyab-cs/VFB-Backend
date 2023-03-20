const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

module.exports = () => {
    mongoose.connect(process.env.DB_URI_ATLAS, { useNewUrlParser: true })

    const database = mongoose.connection;

    database.on('error', (error) => {
        console.log(error);
    });

    database.once('connected', () => {
        console.log('Database Connected Successfully.');
    });
}