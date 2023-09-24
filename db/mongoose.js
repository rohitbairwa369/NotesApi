
require('dotenv').config(); // Load environment variables from .env file

// Access environment variables
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb+srv://rohittbairwaa11:mvjsWIQodenJnwKj@cluster0.tl3zbxo.mongodb.net/BlogManager';

// This file will handle connection logic to the MongoDB database
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect( DATABASE_URL, { useNewUrlParser: true }).then(() => {
    console.log("Connected to MongoDB successfully :)");
}).catch((e) => {
    console.log("Error while attempting to connect to MongoDB");
    console.log(e);
});

// To prevent deprectation warnings (from MongoDB native driver)
// mongoose.set('useCreateIndex', true);
// mongoose.set('useFindAndModify', false);



module.exports = {
    mongoose
};