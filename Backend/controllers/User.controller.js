const ApiError = require("../utills/ApiError.js");
const ApiResponse = require("../utills/ApiResponse.js");
const User = require("../models/User.model.js");

const UserRegistration = async (req, res) => {
    // Extract data from the request
    // Vailidate data
    // try to store the data
    // check data is successfully store or not
    // return Error if the data is not successfully store
    // mitigate the  password and sensesative createdential
    // return Success response if data is successfully store
    try {
        const { Name, Email, Password } = req.body;
        console.log(req.body);

        if (!Name || !Email || !Password) {
            throw new ApiError(400, "Please fill all the field");
        }
        const createUser = await User.create({
            Name,
            Email,
            Password,
        });
        if (!createUser) {
            throw new ApiError(500, "Somthing Went wrong");
        }

        const user = await User.findById(createUser._id);
        if (!user) {
            throw new ApiError(500, "Somthing Went wrong");
        }

        res.status(201).json(new ApiResponse(201, user));
    } catch (err) {
        res.json(err.message);
    }
};

module.exports = {
    UserRegistration,
};
