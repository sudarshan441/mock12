const express = require('express');
const route = express.Router();
const UserSchema = require("../models/userModel");
route.get('/getProfile', async function (req, res) {
    const { email } = req.body;
    const user = await UserSchema.findOne({ email });
    res.send(user);
});
route.post('/login', async function (req, res) {
    const { email, password } = req.body;
    const user = await UserSchema.findOne({ email });
    if (user) {
        if (user.password == password) {
            res.send("Successfully logged in");
        } else {
            res.send("Passwords do not match");
        }
    } else {
        res.send("Email does not exist");
    }
    res.send("LOGIN");
});
route.post('/signup', async function (req, res) {
    const { email, username, password } = req.body;
    const user = await UserSchema.create({ email: email, username: username, password: password })
    user.save();
    res.send("successfully signed up");
});
route.post('/calculate', function (req, res) {
    const { Amount, Interest_rate, Years } = req.body;
    const i=Interest_rate/100
    const Total_Maturity_Value = Amount*((((1+i)**Years)-1)/i);
    Total_Investment_Amount = Amount*Years;
    Total_Interest_Gained = Total_Maturity_Value - Total_Investment_Amount;

    
    res.send({Total_Maturity_Value,Total_Investment_Amount,Total_Interest_Gained});
});
module.exports = route;