const express = require('express');
const { signupUser,getAllusers ,loginUsers,getUserByEmail} = require('../controllers/user.controller');
const {AuthToken} = require("../middlewares/AuthToken");

const UserRouter = express.Router();
//user signup
UserRouter.post("/users",signupUser);
// get all users
UserRouter.get("/users",AuthToken,getAllusers);
//login uisers
UserRouter.post("/login",loginUsers);

UserRouter.get("/me", AuthToken,getUserByEmail);

module.exports=UserRouter;
