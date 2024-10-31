const express=require("express");
const app=express();

const port=8080;
const path=require("path");

app.use(express.static(path.join(__dirname,"public/css")));
app.use(express.static(path.join(__dirname,"public/javascript")));



 app.set("view engine","ejs");  //default searching ejs file  in persent folder
 app.set("views",path.join(__dirname,"/views")); //for looking view folder

app.get("/",(req,res)=>{
    res.render("home.ejs");
});

app.get("/ig/:username",(req,res)=>{
 // let {username}=req.params;
  //const follower=["adam","bob","steve","abc"];
  //console.log(username);
 //res.render("instagram.ejs",{ username, follower});
 let {username}=req.params;
const instadata=require("./data.json");
//console.log(instadata);
let data=instadata[username];
res.render("instagram.ejs",{ data});   //here data is in argument of instagram.ejs file 
console.log(data);
});

app.get("/rolldice",(req,res)=>{
         let { dicval } =Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{ dicval });
});
app.listen(port,()=>{
    console.log(`app is listening on port ${port}`)
});