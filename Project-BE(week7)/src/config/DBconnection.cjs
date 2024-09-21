const mongoose = require("mongoose");
require('dotenv').config();

const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.DBCONNECT, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database Connected ✅");
    } catch (error) {
        console.error("ERROR in connecting!", error);
        throw error; // Rethrow error for better handling
    }
};

module.exports = connectToDB;
