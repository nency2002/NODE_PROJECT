const {Router} = require('express');
const Auth = require('../middleware/auth');
const IsAuth = require('../middleware/admin');
const { ProductRender, Post, Products, Deletes, Updatedata, Updates, All, HomeRender, ProfileRender, UpdateRender } = require('../controllers/product.controllers');
const ProRouter = Router();

ProRouter.get("/Post"  , Auth , IsAuth, ProductRender);

ProRouter.get("/Home" , HomeRender);
ProRouter.get("/Profile" , ProfileRender);
ProRouter.get("/Update" ,UpdateRender);



// post data
ProRouter.post("/Post" , Auth , Post )

// post karela data dekhay
ProRouter.get("/Products" ,Auth , Products)


// data delete karva
ProRouter.delete("/Delete/:id",   Deletes)  
// update
ProRouter.get("/Update/:id" ,  Updates )  
ProRouter.patch("/Edit/:id",Updatedata ) 

// badha data get karva
ProRouter.get("/All" , All )
module.exports=ProRouter