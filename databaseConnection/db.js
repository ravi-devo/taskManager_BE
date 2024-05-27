const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.CONNECTION_URL);
        console.log("DB Connection Established");
    } catch (error) {
        console.log("Error in connecting to DB", error);
    }
}

module.exports = dbConnection;