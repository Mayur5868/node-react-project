const express = require('express');
const cors = require("cors");
require('./db/config');
const User = require('./db/User');
const Product = require('./db/Product');
const app = express();
app.use(express.json());

app.use(cors());

// Register code start

// app.post("/register", async (req, resp) => {
//     let user = new User(req.body);
//     let result = await user.save();
//     resp.send(result);
// })

app.post("/register", async (req, resp) => {
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password
    resp.send(result);
})

// Login code start

// app.post("/login",(req,resp)=>{
//     resp.send(req.body)
// })

app.post("/login", async (req, resp) => {

    // let user =await User.findOne(req.body)
    // resp.send(user)

    // let user =await User.findOne(req.body).select("-password");
    // resp.send(user)

    let user = await User.findOne(req.body).select("-password");
    if (user) {
        resp.send(user)
    } else {
        resp.send({ result: "No User Found" })
    }

})

// Product Add code

app.post("/add-product",async(req, resp)=>{
    let product = new Product(req.body);
    let result = await product.save();
    resp.send(result)
})


// Add product Api

app.get("/products",async (req,resp)=>{
    let products = await Product.find();
    if(products.length>0)
        {
            resp.send(products)
        } else
        {
            resp.send({result:"No Products Found"})
        }
})

// Delete Api

app.delete("/product/:id",async (req,resp)=>{
    // resp.send("Delete Date Is Under Working..")
    // resp.send(req.params.id)
    let result = await Product.deleteOne({_id:req.params.id})
    resp.send(result);
})

// Auto Fill Api For Update Data get
app.get("/product/:id", async(req,resp)=>{
    let result = await Product.findOne({_id:req.params.id})
    if(result){
        resp.send(result);
    }else{
        resp.send({result:"No Record Found"});
    }
})

//Product Update Api for update data new
app.put("/product/:id", async(req,resp)=>{
    let result = await Product.updateOne(
        {_id:req.params.id},
        {
            $set : req.body
        }
    )
    resp.send(result)
   
})

// Search api Route
app.get("/search/:key",async (req,resp)=>{
    let result =await Product.find({
        "$or":[
            {name:{$regex:req.params.key}},
            {price:{$regex:req.params.key}},
            {category:{$regex:req.params.key}},
            {company:{$regex:req.params.key}}
        ]
    });
    resp.send(result)
})
app.listen(5000);



// ------------------------------------------------------------