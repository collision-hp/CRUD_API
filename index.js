const express=require('express')
const app = express()
const mongoose = require('mongoose');
const Product=require('./models/product.model.js')
const productRoute=require("./routes/product.route.js");

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}))

//routes
app.use("/api/products",productRoute);


app.get('/',(req,res)=>{
    res.send("Hello from Node_API server Updated");
});

// //get all products
// app.get('/api/products', async (req,res)=>{
//     try{
//         const products=await Product.find({});
//         res.status(200).json(products)
//     }
//     catch(error){
//         res.status(500).json({message:error.message});
//     }
// });

// //to get the particular product using api
// app.get('/api/products/:id', async (req,res)=>{
//     try{
//         const {id}=req.params;
//         const product=await Product.findById(id);
//         res.status(200).json(product);

//      }
//     catch(error){
//         res.status(500).json({message:error.message});
//     }
// });

// //update the products
// app.post('/api/products',async (req,res)=>{
//     try {
//         const product=await Product.create(req.body);
//         res.status(200).json(product);
//     } catch (error) {
//         res.status(500).json({message:error.message})
//     }
// })

// //update a particular product using api
// app.put('/api/products/:id',async(req,res)=>{
//     try {
//         const {id}=req.params;
//         const product =await Product.findByIdAndUpdate(id,req.body);
//         if(!product){
//             return res.status(404).json({message:"Product not found"});
//         }
//         const updatedProduct=await Product.findById(id);
//         res.status(200).json(updatedProduct);
//     } 
//     catch (error) {
//         res.status(500).json({message:error.message});
//     }
// })

// //delete a product
// app.delete('/api/products/:id',async(req,res)=>{
//     try {
//         const {id}=req.params
//         const product=await Product.findByIdAndDelete(id);
//         if(!product){
//             return res.status(404).json({message:"Product not Found"})
//         }
//         res.status(200).json({message:"Product Deleted successfully"});
//     } 
//     catch (error) {
//         res.status(500).json({message:error.message})
//     }
// })

mongoose.connect("mongodb+srv://champatisatyabrata26:Sbc421926@backenddb.nzoxdbx.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
//response
.then(()=>{
    console.log("Connected to database");
    app.listen(3000,()=>{
        console.log("Server is running on port 3000");
    });
})
.catch(()=>{
    console.log("Connection Failed")
})

