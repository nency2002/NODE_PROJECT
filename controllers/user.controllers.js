const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user.model');




const SignupRender = (req,res)=>{
    res.render("signup");
}

const LoginRender = (req,res)=>{
    res.render("login");
}
const Signup = async(req,res)=>{
    try {
        const {email, password,username,role} = req.body;
        let data = await User.findOne({email:email});
        if(data){
            return res.send({message : 'User already exist'});
        }
        else{
            bcrypt.hash(password,5,async(err, hash)=>{
                if(err){
                    return res.send({Error: err.message});
                }
                else{
                    let obj={
                        email,password:hash,username,role
                    }
                    let data = await User.create(obj);
                    let token = jwt.sign({id : data._id, role : data.role}, "token");
                    res.cookie("token", token).cookie("role", data.role);
                    res.redirect('/User/Login');
                }
            })
        }
        
    } catch (error) {
        return res.send({Error : error.message})
    }
}



const Login = async(req,res)=>{
    try {
        const {email, password} = req.body;
        let data = await User.findOne({email});
        
        if(data){
            bcrypt.compare(password,data.password,(err,result)=>{
                if(err){
                    return res.send({error : err.message})
                }
                if(result){
                    let token = jwt.sign({id : data._id, role : data.role}, "token");
                    res.cookie("token", token).cookie("role", data.role);
                    res.redirect('/User/Login');
                }
                else{
                    return res.send({message:"Password is incorrect"})
                }
            })
        }
        else{
            return res.send({messagee: "User not registered"});
        }        
    } catch (error) {
        return res.send({Error : error.message})
    }
}



module.exports={SignupRender,Signup,LoginRender,Login}