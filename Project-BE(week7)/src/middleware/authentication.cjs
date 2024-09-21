const bcrypt = require('bcrypt');
const AdminSchema = require('../models/adminSchema.cjs');

const authenticateAdmin = async (username, password) => {
    console.log("Authentication verifying...");

    const user = await AdminSchema.findOne({ username });
    if (!user) {
        return { success: false, message: 'Authentication failed. Incorrect Username.' };
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        return { success: false, message: 'Authentication failed. Incorrect Password.' };
    }

    return { success: true, message: 'Authentication successful' };
};

module.exports = authenticateAdmin;
