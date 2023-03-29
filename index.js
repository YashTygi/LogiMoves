const path=require("path");
const express=require("express");
const multer=require("multer");
const mongoose=require("mongoose");

const app=express();
const port=3000;

mongoose.connect("mongodb+srv://admin-dipin:Suraj2023@cluster0.dej7qho.mongodb.net/warehouseDB",{useNewUrlParser:true});


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null,`${Date.now()}-${file.originalname}`);
    }
  })
  
const upload = multer({ storage: storage })
app.set("view engine","ejs");
app.set("views",path.resolve("./views"));

app.use(express.urlencoded({extended:true}));
app.use(express.json());

const warehouseScema=new mongoose.Schema({
    name:String,
    address:String,
    proofOfId:String,
    warehouseId:String
});

const Warehouse=mongoose.model("warehouse",warehouseScema);


app.get("/",(req,res)=>{
    return res.render("list");
})
const cpUpload = upload.fields([{ name: 'avatar1'}, { name: 'avatar2'}])
app.post('/upload', cpUpload, function (req, res, next) {
    // console.log(req.body);
    // const x=req.files['avatar1'];
    console.log(req.files['avatar1'][0].path);

    const warehouse=new Warehouse({
        name:req.body.name,
        address:req.body.address,
        proofOfId:req.files['avatar1'][0].path,
        warehouseId:req.files['avatar2'][0].path
    })
    warehouse.save();
    return res.redirect("/");
})


// app.post("/upload",upload.fields({name:"avatar"},{name:"avatar2"}),(req,res)=>{
// })
app.listen(port,()=>console.log(`server is running`))