const User = require("../model/userModel");
const generateToken = require("../utils/generateToken");

const userController = {
    login: async (req, res) => {
        try {
            const { username, password } = req.body;
            const user = await User.findOne({ username });
            if(!user) return res.status(404).json({ message: "User account not found, please register" });
            if(user && await user.matchPassword(password)){
                const token = await generateToken(res, user._id);
                res.status(200).json({ message: "User logged in successfully", data: user, token });
            }else{
                res.status(400).json({ message: "Invalid credentials" });
            }
        } catch (error) {
            
        }
    },
    register: async (req, res) => {
        try {
            const { username } = req.body;
            const user = await User.findOne({ username });
            if(user) return res.status(400).json({ message: "User account already exist" });
            const response = await User.create(req.body);
            const token = await generateToken(res, response._id);
            res.status(201).json({ message: "User account created successfully", data: response, token });
        } catch (error) {
            res.status(500).json({ message: "Internal server error", error });
        }
    }
}

module.exports = userController;