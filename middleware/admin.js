const jwt = require('jsonwebtoken');

//token verify karava

const IsAuth = ( req , res , next)=>{
    let {token}  = req.cookies;
    if(token){
        let decoded = jwt.verify(token , "token");
        if(decoded.role == "admin"){
            req.user = decoded;
            next();
        }
        else{
            return res.send({message : "You are not authirsed to access this page"})
        }
    }
    else{
        res.redirect('/User/Login');
    }
}



module.exports = IsAuth;