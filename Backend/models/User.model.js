const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
    Name: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
    },
    Password: {
        type: String,
        required: true,
    }
});

const User = model("User", UserSchema);
module.exports = User;
