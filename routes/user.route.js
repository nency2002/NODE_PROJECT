const {Router} = require('express');
const { SignupRender, Signup, Login, LoginRender } = require('../controllers/user.controllers');
const UserRouter = Router();

UserRouter.get("/Signup",SignupRender );

UserRouter.post("/Signup",Signup);

UserRouter.get("/Login", LoginRender)

UserRouter.post("/Login",Login )


module.exports={UserRouter}