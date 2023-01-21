const { Schema, default: mongoose } = require("mongoose");
const express = require("express");

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
},{
timestamps:true,});

const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;