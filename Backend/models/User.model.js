const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs")

const UserSchema = new Schema({
    Name: {
        type: String,
        required: true,

    },
    Email: {
        type: String,
        required: true,
        unique: true,

    },
    Password: {
        type: String,
        required: true,
    }
});

UserSchema.pre("save", async function (next)  {
    if (!this.isModified("Password")) {
        return next()
    }
    const hassPassword = await bcrypt.hash(this.Password , 10)

    this.Password = hassPassword;
    next()

})


const User = model("User", UserSchema);
module.exports = User;
