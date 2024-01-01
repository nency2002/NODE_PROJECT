const Product = require("../models/product.model");



const ProductRender = (req,res)=>{
    res.render("productform");
}

const HomeRender = (req,res)=>{
    res.render("productlist");
}

const UpdateRender = (req,res)=>{
    res.render("update");
}

const ProfileRender = (req,res)=>{
    res.render("myproduct");
}

// pdoduct post
const Post =  async (req, res) => {
    let data = await Product.create(req.body);
    res.send(data);
}

// post karela data dekhay
const Products =  async (req, res) => {
    let data = await Product.find({userID : req.body.userID});
    res.send(data);
}

// data delete karva
const Deletes =  async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    let data = await Product.find({userID : req.body.userID});
    res.send(data);
}

// data update  karva
const Updatedata= async (req, res) => {
    let { id } = req.params;
    let data = await Product.findByIdAndUpdate(id, req.body);
    try {
        if (data) res.send("updated");
        else {
            res.send("not found");
        }
    } catch (error) {
        res.send("testing");
    }
};

const Updates  =async (req,res)=>{
    const {id} = req.params;
    
    let udata = await Product.findById(id);
    res.render("update", {udata});
}

// badha data get karva
const All =  async (req, res) => {
    let data = await Product.find();
    res.send(data);
}


module.exports = {Post, Products ,Deletes , Updatedata , Updates , All  ,ProductRender , HomeRender , ProfileRender , UpdateRender}